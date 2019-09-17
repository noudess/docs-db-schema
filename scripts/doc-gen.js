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

var connection = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: database
	}
);

connection.connect();

let schemaData = {};
const SCHEMA_REFERENCE_YML_FILE = 'database-schema-reference.yml';

/**
 * Tables to be excluded from the 'pull' command
 */
const excludedTables = [
	'peq_admin',
	'player_reports',
	'tblServerListType',
	'tblServerAdminRegistration',
	'tblLoginServerAccounts',
	'tblWorldServerRegistration',
	'vw_bot_character_mobs',
	'vw_bot_groups',
	'vw_groups',
	'vw_guild_members',
	'vwmercnpctypes',
	'zone_state_dump'
];


/**
 * To update which categories a table falls under, update this
 */
const tableCategories = {
	'AAs': [
		'aa_ability',
		'aa_actions',
		'aa_effects',
		'aa_ranks',
		'aa_rank_effects',
		'aa_rank_prereqs',
		'aa_required_level_cost',
		'aa_timers',
		'altadv_vars'
	],
	'Account': [
		'account',
		'account_flags',
		'account_ip',
		'account_rewards',
		'sharedbank'
	],	
	'Admin': [
		'banned_ips',
		'bot_command_settings',
		'bug_reports',
		'bugs',
		'chatchannels',
		'class_skill',
		'command_settings',
		'db_version',
		'discovered_items',
		'eqtime',
		'eventlog',
		'fear_hints',
		'gm_ips',
		'hackers',
		'ip_exemptions',
		'level_exp_mods',
		'logsys_categories',
		'name_filter',
		'perl_event_export_settings',
		'petitions',
		'profanity_list',
		'races',
		'reports',
		'saylink',
		'start_zones',
		'starting_items',
		'variables',
		'veteran_reward_templates'
	],
	'Adventures': [
		'adventure_details',
		'adventure_members',
		'adventure_stats',
		'adventure_template',
		'adventure_template_entry',
		'adventure_template_entry_flavor'
	],
	'Alternate Currency': [
		'alternate_currency'
	],
	'Books': [
		'books'
	],
	'Bots': [
		'bot_buffs',
		'bot_data',
		'bot_groups',
		'bot_group_members',
		'bot_guild_members',
		'bot_heal_rotations',
		'bot_heal_rotation_members',
		'bot_heal_rotation_targets',
		'bot_inspect_messages',
		'bot_inventories',
		'bot_owner_options',
		'bot_pets',
		'bot_pet_buffs',
		'bot_pet_inventories',
		'bot_spells_entries',
		'bot_spell_casting_chances',
		'bot_stances',
		'bot_timers'
	],
	'Buyers': [
		'buyer'
	],
	'Characters': [
		'character_activities',
		'character_alternate_abilities',
		'character_alt_currency',
		'character_auras',
		'character_bandolier',
		'character_bind',
		'character_buffs',
		'character_corpses',
		'character_corpse_items',
		'character_currency',
		'character_data',
		'character_disciplines',
		'character_enabledtasks',
		'character_inspect_messages',
		'character_item_recast',
		'character_languages',
		'character_leadership_abilities',
		'character_material',
		'character_memmed_spells',
		'character_pet_buffs',
		'character_pet_info',
		'character_pet_inventory',
		'character_potionbelt',
		'character_skills',
		'character_spells',
		'character_tasks',
		'character_task_lockouts',
		'character_tribute',
		'char_create_combinations',
		'char_create_point_allocations',
		'char_recipe_list',
		'friends',
		'keyring',
		'lfguild',
		'mail',
		'player_titlesets'
	],
	'Client Files': [
		'base_data',
		'db_str',
		'skill_caps',
		'spells_new'
	],
	'Data Storage': [
		'data_buckets',
		'quest_globals'
	],
	'Doors': [
		'doors'
	],
	'Factions': [
		'client_faction_associations',
		'client_faction_names',
		'client_server_faction_map',
		'custom_faction_mappings',
		'faction_base_data',
		'faction_list',
		'faction_list_mod',
		'faction_values',
	],
	'Graveyards': [
		'graveyard'
	],
	'Ground Spawns': [
		'ground_spawns',
	],
	'Groups': [
		'group_id',
		'group_leaders'
	],
	'Guilds': [
		'guilds',
		'guild_bank',
		'guild_ranks',
		'guild_members',
		'guild_relations'
	],
	'Grids': [
		'grid',
		'grid_entries'
	],
	'Horses': [
		'horses'
	],
	'Instances': [
		'instance_list',
		'instance_list_player'
	],
	'Inventory': [
		'inventory',
		'inventory_snapshots',
		'inventory_versions'
	],
	'Items': [
		'items',
		'item_tick'
	],
	'Loginserver': [
		'login_accounts',
		'login_api_tokens',
		'login_server_admins',
		'login_server_list_types',
		'login_world_servers'
	],
	'Loot': [
		'global_loot',
		'lootdrop',
		'lootdrop_entries',
		'loottable',
		'loottable_entries'
	],
	'Mercenaries': [
		'mercs',
		'merc_armorinfo',
		'merc_buffs',
		'merc_inventory',
		'merc_merchant_entries',
		'merc_merchant_templates',
		'merc_merchant_template_entries',
		'merc_name_types',
		'merc_npc_types',
		'merc_spell_lists',
		'merc_spell_list_entries',
		'merc_stance_entries',
		'merc_stats',
		'merc_subtypes',
		'merc_templates',
		'merc_types',
		'merc_weaponinfo'
	],
	'Merchants': [
		'merchantlist',
		'merchantlist_temp'
	],
	'NPCs': [
		'npc_emotes',
		'npc_faction',
		'npc_faction_entries',
		'npc_scale_global_base',
		'npc_spells',
		'npc_spells_effects',
		'npc_spells_effects_entries',
		'npc_spells_entries',
		'npc_types',
		'npc_types_metadata',
		'npc_types_tint',
		'proximities'
	],
	'Objects': [
		'object',
		'object_contents'
	],
	'Pets': [
		'pets',
		'pets_equipmentset',
		'pets_equipmentset_entries'
	],
	'Query Server': [
		'qs_merchant_transaction_record',
		'qs_merchant_transaction_record_entries',
		'qs_player_aa_rate_hourly',
		'qs_player_delete_record',
		'qs_player_delete_record_entries',
		'qs_player_events',
		'qs_player_handin_record',
		'qs_player_handin_record_entries',
		'qs_player_move_record',
		'qs_player_move_record_entries',
		'qs_player_npc_kill_record',
		'qs_player_npc_kill_record_entries',
		'qs_player_speech',
		'qs_player_trade_record',
		'qs_player_trade_record_entries'
	],
	'Raids': [
		'raid_details',
		'raid_leaders',
		'raid_members'
	],
	'Rules': [
		'rule_sets',
		'rule_values'
	],
	'Spawns': [
		'respawn_times',
		'spawn2',
		'spawnentry',
		'spawngroup',
		'spawn_conditions',
		'spawn_condition_values',
		'spawn_events'
	],
	'Spells': [
		'auras',
		'blocked_spells',
		'damageshieldtypes',
		'spell_buckets',
		'spell_globals',
		'spells_new',
	],
	'Tasks': [
		'completed_tasks',
		'goallists',
		'tasks',
		'tasksets',
		'task_activities',
		'task_replay_groups'
	],
	'Timers': [
		'timers'
	],
	'Titles': [
		'titles'
	],
	'Trader': [
		'trader',
		'trader_audit'
	],
	'Tradeskills': [
		'fishing',
		'forage',
		'tradeskill_recipe',
		'tradeskill_recipe_entries'
	],
	'Traps': [
		'ldon_trap_entries',
		'ldon_trap_templates',
		'traps'
	],
	'Tributes': [
		'tributes',
		'tribute_levels'
	],
	'Zone': [
		'launcher',
		'launcher_zones',
		'zone',
		'zoneserver_auth',
		'zone_flags',
		'zone_points',
		'zone_server'
	],
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
