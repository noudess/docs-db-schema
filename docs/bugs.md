| Column | Data Type | Description                                                                                           |
| ------ | --------- | ----------------------------------------------------------------------------------------------------- |
| id     | int       | Unique Bug Identifier                                                                                 |
| zone   | varchar   | [Zone Short Name](https://eqemu.gitbook.io/server/categories/reference-list/zones)                    |
| name   | varchar   | Player Name                                                                                           |
| ui     | varchar   |                                                                                                       |
| x      | float     | X Coordinate                                                                                          |
| y      | float     | Y Coordinate                                                                                          |
| z      | float     | Z Coordinate                                                                                          |
| type   | varchar   |                                                                                                       |
| flag   | tinyint   |                                                                                                       |
| target | varchar   | Target when reported                                                                                  |
| bug    | varchar   | Bug reported                                                                                          |
| date   | date      | Date when reported                                                                                    |
| status | tinyint   | [Account Status of Reporter](https://eqemu.gitbook.io/server/categories/reference-lists/status-levels |