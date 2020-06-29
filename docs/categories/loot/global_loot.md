| Column       | Data Type  | Description                                                                   |
| ------------ | ---------- | ----------------------------------------------------------------------------- |
| id           | int        | Unique Global Loot Identifier                                                 |
| description  | varchar    | Description                                                                   |
| loottable_id | int        | [Loottable Identifier](loottable.md)                                          |
| enabled      | tinyint    | Enabled: 0 = False, 1 = True                                                  |
| min_level    | int        | Minimum Level                                                                 |
| max_level    | int        | Maximum Level                                                                 |
| rare         | tinyint    | Rare: 0 = False, 1 = True                                                     |
| raid         | tinyint    | Raid: 0 = False, 1 = True                                                     |
| race         | mediumtext | [Race](https://eqemu.gitbook.io/server/categories/npc/race-list)              |
| class        | mediumtext | [Class](https://eqemu.gitbook.io/server/categories/player/class-list)         |
| bodytype     | mediumtext | [Body Type](https://eqemu.gitbook.io/server/categories/npc/body-types)        |
| zone         | mediumtext | [Zone Short Name](https://eqemu.gitbook.io/server/categories/zones/zone-list) |
| hot_zone     | tinyint    |                                                                               |