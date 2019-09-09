| Column         | Data Type | Description                                                                    |
| -------------- | --------- | ------------------------------------------------------------------------------ |
| char_id        | int       | [Character Identifier](character_data.md)                                      |
| guild_id       | mediumint | [Guild Identifier](guilds.md)                                                  |
| rank           | tinyint   | [Rank](https://eqemu.gitbook.io/server/categories/reference-lists/guild-ranks) |
| tribute_enable | tinyint   | Tribute Enable: 0 = False, 1 = True                                            |
| total_tribute  | int       | Total Tribute                                                                  |
| last_tribute   | int       | Last Tribute                                                                   |
| banker         | tinyint   | Banked: 0 = False, 1 = True                                                    |
| public_note    | text      | Public Note                                                                    |
| alt            | tinyint   | Alt: 0 = False, 1 = True                                                       |