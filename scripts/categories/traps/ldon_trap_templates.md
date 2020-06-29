| Column   | Data Type | Description                                                              |
| -------- | --------- | ------------------------------------------------------------------------ |
| id       | int       | Unique LDoN Trap Template Identifier                                     |
| type     | tinyint   | [Trap Type](https://eqemu.gitbook.io/server/categories/zones/trap-types) |
| spell_id | smallint  | [Spell Identifier](spells_new.md)                                        |
| skill    | smallint  | [Skill](https://eqemu.gitbook.io/server/categories/player/skills)        |
| locked   | tinyint   | Locked: 0 = False, 1 = True                                              |