| Column                | Data Type | Description                                                                                          |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------- |
| skill_id              | int       | [AA Identifier](aa_ability.md)                                                                       |
| name                  | varchar   | Name                                                                                                 |
| cost                  | int       | Cost                                                                                                 |
| max_level             | int       | Maximum Level                                                                                        |
| hotkey_sid            | int       | Hotkey SID                                                                                           |
| hotkey_sid2           | int       | Hotkey SID 2                                                                                         |
| title_sid             | int       | Title SID                                                                                            |
| desc_sid              | int       | Description SID                                                                                      |
| type                  | tinyint   | Type                                                                                                 |
| spellid               | int       | [Spell Identifier](spells_new.md)                                                                    |
| prereq_skill          | int       | Prerequisite Skill Level                                                                             |
| prereq_minpoints      | int       | Prerequisite Minimum Points                                                                          |
| spell_type            | int       | [Spell Type](https://eqemu.gitbook.io/server/categories/types/spell-types)                           |
| spell_refresh         | int       | Spell Refresh                                                                                        |
| classes               | int       | [Classes](https://eqemu.gitbook.io/server/categories/reference-list/class-list)                      |
| berserker             | int       | Berseker: 0 = False, 1 = True                                                                        |
| class_type            | int       | Level                                                                                                |
| cost_inc              | tinyint   | Cost Increase                                                                                        |
| aa_expansion          | smallint  | [AA Expansion Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/expansion-list) |
| special_category      | int       | Special Category                                                                                     |
| sof_type              | tinyint   | [Secrets of Faydwer Type](https://eqemu.gitbook.io/server/categories/reference-lists/aa-categories)  |
| sof_cost_inc          | tinyint   | Secrets of Faydwer Cost Increase                                                                     |
| sof_max_level         | tinyint   | Secrets of Faydwer Maximum Level                                                                     |
| sof_next_skill        | int       | Secrets of Faydwer Next Skill                                                                        |
| clientver             | tinyint   | [Client Version](https://eqemu.gitbook.io/server/categories/reference-lists/expansion-list)          |
| account_time_required | int       | Account Time Required in Seconds                                                                     |
| sof_current_level     | tinyint   | Secrets of Faydwer Current Level                                                                     |
| sof_next_id           | int       | Secrets of Faydwer Next Identifier                                                                   |
| level_inc             | tinyint   | Secrets of Faydwer Level Increase                                                                    |