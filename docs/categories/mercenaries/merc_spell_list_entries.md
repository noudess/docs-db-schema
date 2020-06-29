| Column                   | Data Type | Description                                                                            |
| ------------------------ | --------- | -------------------------------------------------------------------------------------- |
| merc_spell_list_entry_id | int       | Unique Mercenary Spell List Entry Identifier                                           |
| merc_spell_list_id       | int       | [Mercenary Spell List Identifier](merc_spell_lists.md)                                 |
| spell_id                 | int       | [Spell Identifier](spells_new.md)                                                      |
| spell_type               | int       | [Spell Type](https://eqemu.gitbook.io/server/categories/spells/spell-types)            |
| stance_id                | tinyint   | [Stance Type Identifier](https://eqemu.gitbook.io/server/categories/bots/stance-types) |
| minlevel                 | tinyint   | Minimum Level                                                                          |
| maxlevel                 | tinyint   | Maximum Level                                                                          |
| slot                     | tinyint   | Slot                                                                                   |
| procChance               | tinyint   | Proc Chance: 0 = Never, 100 = Always                                                   |