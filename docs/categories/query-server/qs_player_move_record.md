# qs\_player\_move\_record

| Column | Data Type | Description |
| :--- | :--- | :--- |
| move\_id | int | Unique Move Identifier |
| time | timestamp | Time Timestamp |
| char\_id | int | [Character Identifier](../characters/character_data.md) |
| from\_slot | mediumint | [From Slot Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/inventory-slots) |
| to\_slot | mediumint | [To Slot Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/inventory-slots) |
| stack\_size | mediumint | Stack Size |
| char\_items | mediumint | [Character Item Identifier](../items/items.md) |
| postaction | tinyint | Post Action |

