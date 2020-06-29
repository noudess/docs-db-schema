| Column        | Data Type | Description                                                                   |
| ------------- | --------- | ----------------------------------------------------------------------------- |
| id            | int       | Unique Ground Spawn Identifier                                                |
| zoneid        | int       | [Zone Identifier](https://eqemu.gitbook.io/server/categories/zones/zone-list) |
| version       | smallint  | Version: -1 For All                                                           |
| max_x         | float     | Maximum X Coordinate                                                          |
| max_y         | float     | Maximum Y Coordinate                                                          |
| max_z         | float     | Maximum Z Coordinate                                                          |
| min_x         | float     | Minimum X Coordinate                                                          |
| min_y         | float     | Minimum Y Coordinate                                                          |
| heading       | float     | Heading Coordinate                                                            |
| name          | varchar   | Name                                                                          |
| item          | int       | [Item Identifier](items.md)                                                   |
| max_allowed   | int       | Max Allowed                                                                   |
| comment       | varchar   | Comment                                                                       |
| respawn_timer | int       | Respawn Timer in Seconds                                                      |