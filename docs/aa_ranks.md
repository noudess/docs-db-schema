| Column           | Data Type | Description                                                                                       |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------- |
| id               | int       | [Unique AA Identifier](aa_ability.md)                                                             |
| upper_hotkey_sid | int       |                                                                                                   |
| lower_hotkey_sid | int       |                                                                                                   |
| title_sid        | int       |                                                                                                   |
| desc_sid         | int       |                                                                                                   |
| cost             | int       | Cost in AA Points                                                                                 |
| level_req        | int       | Level Required                                                                                    |
| spell            | int       | [Spell Identifier](spells_new.md)                                                                 |
| spell_type       | int       |                                                                                                   |
| recast_time      | int       | Recast Timer                                                                                      |
| expansion        | int       | [Expansion Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/expansion-list) |
| prev_id          | int       | Previous Rank Identifier                                                                          |
| next_id          | int       | Next Rank Identifier                                                                              |