/**
 * Quick and dirty doc generator script
 *
 * @author: Akkadius
 */

const mysql    = require('mysql');
const yaml     = require('js-yaml');
const fs       = require('fs');
const database = 'peq';
const program  = require('commander');
const table    = require('markdown-table')

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: database
  }
);

connection.connect();

let schemaData                  = {};
const SCHEMA_REFERENCE_YML_FILE = 'database-schema-reference.yml';

/**
 * Tables to be excluded from the 'pull' command
 */
const excludedTables = [
  'tblServerListType',
  'tblServerAdminRegistration',
  'tblLoginServerAccounts',
  'tblWorldServerRegistration',
  'zone_state_dump'
];


/**
 * To update which categories a table falls under, update this
 */
const tableCategories = {
  'Tasks': [
    'tasks',
    'tasksets',
    'task_activities',
    'task_replay_groups'
  ],
  'Guilds': [
    'guilds',
    'guild_bank',
    'guild_ranks',
    'guild_members',
    'guild_relations'
  ]
};

let tablesWrittenToIndex = {};

/**
 * Load an existing database yml reference
 */
if (fs.existsSync(SCHEMA_REFERENCE_YML_FILE)) {
  schemaData = yaml.safeLoad(fs.readFileSync(SCHEMA_REFERENCE_YML_FILE, 'utf8'));
  console.log('Loaded schema from [' + SCHEMA_REFERENCE_YML_FILE + ']');
}

/**
 * Pull
 */
program
  .version('1.0.0')
  .command('pull')
  .description('Pulls database schema and updates working yaml schema reference')
  .action(function (cmd) {

      connection.query(`
        SELECT
          *
        FROM
          INFORMATION_SCHEMA.COLUMNS
        WHERE
          TABLE_SCHEMA = '${database}'
        ORDER BY
          TABLE_NAME,
          ORDINAL_POSITION;
      `, function (error, results, fields) {
          results.forEach(function (row) {
              /**
               RowDataPacket {
                  TABLE_CATALOG: 'def',
                  TABLE_SCHEMA: 'peq',
                  TABLE_NAME: 'aa_ability',
                  COLUMN_NAME: 'category',
                  ORDINAL_POSITION: 3,
                  COLUMN_DEFAULT: '-1',
                  IS_NULLABLE: 'NO',
                  DATA_TYPE: 'int',
                  CHARACTER_MAXIMUM_LENGTH: null,
                  CHARACTER_OCTET_LENGTH: null,
                  NUMERIC_PRECISION: 10,
                  NUMERIC_SCALE: 0,
                  DATETIME_PRECISION: null,
                  CHARACTER_SET_NAME: null,
                  COLLATION_NAME: null,
                  COLUMN_TYPE: 'int(10)',
                  COLUMN_KEY: '',
                  EXTRA: '',
                  PRIVILEGES: 'select,insert,update,references',
                  COLUMN_COMMENT: '',
                  IS_GENERATED: 'NEVER',
                  GENERATION_EXPRESSION: null
                }
               */

              if (excludedTables.includes(row.TABLE_NAME)) {
                return;
              }

              if (typeof schemaData[row.TABLE_NAME] === 'undefined') {
                schemaData[row.TABLE_NAME] = {};
              }
              if (typeof schemaData[row.TABLE_NAME][row.COLUMN_NAME] === 'undefined') {
                schemaData[row.TABLE_NAME][row.COLUMN_NAME] = {};
              }

              schemaData[row.TABLE_NAME][row.COLUMN_NAME].dataType = row.DATA_TYPE;
              schemaData[row.TABLE_NAME][row.COLUMN_NAME].nullable = row.IS_NULLABLE;

              if (typeof schemaData[row.TABLE_NAME][row.COLUMN_NAME].description === 'undefined') {
                schemaData[row.TABLE_NAME][row.COLUMN_NAME].description = '';
              }
            }
          );

          /**
           * Write .yml
           */
          fs.writeFileSync(SCHEMA_REFERENCE_YML_FILE, yaml.safeDump(schemaData, { noCompatMode: true }));

          console.log('Updated schema written to [' + SCHEMA_REFERENCE_YML_FILE + ']');
        }
      );
    }
  );

/**
 * Write
 */
program.command('write')
  .description('Writes the schema reference into markdown files')
  .action(function (cmd) {

      let summaryTablesList  = '## Tables' + '\n\n';
      let categoryTablesList = '';

      Object.keys(tableCategories).forEach(function (category) {
        var tables = tableCategories[category];

        console.log(category);
        categoryTablesList += '* [' + category + '](placeholder.md)\n';
        // categoryTablesList += '\n## ' + category + '\n\n';

        tables.forEach(function (table) {
          tablesWrittenToIndex[table] = 1;
          // categoryTablesList += '* [' + table + '](' + table + '.md)' + '\n';
          categoryTablesList += '    * [' + table + '](' + table + '.md)' + '\n';
        });
      });

      Object.keys(schemaData).forEach(function (key) {
          var val         = schemaData[key];
          const tableName = key;

          let markdownTable = [];
          markdownTable.push(['Column', 'Data Type', 'Description']);

          Object.keys(val).forEach(function (subKey) {
              var subVal        = schemaData[key][subKey];
              const tableColumn = subKey;
              const dataType    = subVal.dataType;
              const nullable    = subVal.nullable;
              const description = subVal.description;

              markdownTable.push([tableColumn, dataType, description]);
            }
          );

          let fileContents = table(markdownTable);

          /**
           * Write doc page
           *
           * @type {string}
           */
          const fileName = 'docs/' + tableName + '.md';
          fs.writeFile(fileName, fileContents, (err) => {
              console.log('File [' + fileName + '] written');
            }
          );

          if (tablesWrittenToIndex[tableName]) {
            return;
          }

          summaryTablesList += '* [' + tableName + '](' + tableName + '.md)\n';
        }
      );

      /**
       * Base summary file contents
       *
       * @type {string}
       */
      let summaryFileContents = `# Summary

## Categories

${categoryTablesList}
${summaryTablesList}


`;

      /**
       * Write summary
       *
       * @type {string}
       */
      const fileName = 'docs/SUMMARY.md';
      fs.writeFile(fileName, summaryFileContents, (err) => {
          console.log('File [' + fileName + '] written');
        }
      );
    }
  );

program.parse(process.argv);

/**
 * Some date function shamelessly ripped from stackoverflow (quick and dirty)
 *
 * @param date
 * @returns {string}
 */
function formatDate(date) {
  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  var day        = date.getDate();
  var monthIndex = date.getMonth();
  var year       = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ' ' + year;
}

connection.end();
