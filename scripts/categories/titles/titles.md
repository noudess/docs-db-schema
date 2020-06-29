| Column          | Data Type | Description                                                                        |
| --------------- | --------- | ---------------------------------------------------------------------------------- |
| id              | int       | Unique Title Identifier                                                            |
| skill_id        | tinyint   | [Skill Identifier](https://eqemu.gitbook.io/server/categories/player/skills)       |
| min_skill_value | mediumint | Minimum Skill Value                                                                |
| max_skill_value | mediumint | Maximum Skill Value                                                                |
| min_aa_points   | mediumint | Minimum AA Points                                                                  |
| max_aa_points   | mediumint | Maximum AA Points                                                                  |
| class           | tinyint   | [Class](https://eqemu.gitbook.io/server/categories/player/class-list)              |
| gender          | tinyint   | [Gender](https://eqemu.gitbook.io/server/categories/npc/genders)                   |
| char_id         | int       | [Unique Character Identifier](character_data.md)                                   |
| status          | int       | [Required Status](https://eqemu.gitbook.io/server/categories/player/status-levels) |
| item_id         | int       | [Item Identifier](items.md)                                                        |
| prefix          | varchar   | Prefix                                                                             |
| suffix          | varchar   | Suffix                                                                             |
| title_set       | int       | Title Set Identifier                                                               |