| Column     | Data Type | Description                                                                                  |
| ---------- | --------- | -------------------------------------------------------------------------------------------- |
| move_id    | int       | Unique Move Identifier                                                                       |
| time       | timestamp | Time Timestamp                                                                               |
| char_id    | int       | [Character Identifier](character_data.md)                                                    |
| from_slot  | mediumint | [From Slot Identifier](https://eqemu.gitbook.io/server/categories/inventory/inventory-slots) |
| to_slot    | mediumint | [To Slot Identifier](https://eqemu.gitbook.io/server/categories/inventory/inventory-slots)   |
| stack_size | mediumint | Stack Size                                                                                   |
| char_items | mediumint | [Character Item Identifier](items.md)                                                        |
| postaction | tinyint   | Post Action                                                                                  |