| Column       | Data Type | Description                                                                   |
| ------------ | --------- | ----------------------------------------------------------------------------- |
| id           | int       | Unique Spawn2 Entry Identifier                                                |
| spawngroupID | int       | [Unique Spawngroup Identifier](spawngroup.md)                                 |
| zone         | varchar   | [Zone Short Name](https://eqemu.gitbook.io/server/categories/zones/zone-list) |
| version      | smallint  | Version                                                                       |
| x            | float     | X Coordinate                                                                  |
| y            | float     | Y Coordinate                                                                  |
| z            | float     | Z Coordinate                                                                  |
| heading      | float     | Heading Coordinate                                                            |
| respawntime  | int       | Respawn Time in Seconds                                                       |
| variance     | int       | Variance in Seconds                                                           |
| pathgrid     | int       | [Path Grid Identifier](grid.md)                                               |
| _condition   | mediumint | Condition                                                                     |
| cond_value   | mediumint | Condition Value                                                               |
| enabled      | tinyint   | Enabled: 0 = False, 1 = True                                                  |
| animation    | tinyint   | [Animation](https://eqemu.gitbook.io/server/categories/npc/animations)        |