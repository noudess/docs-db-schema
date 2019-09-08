| Column           | Data Type | Description                                                                                     |
| ---------------- | --------- | ----------------------------------------------------------------------------------------------- |
| id               | int       | Unique AA Identifier                                                                            |
| name             | text      | Name                                                                                            |
| category         | int       | [AA Category](https://app.gitbook.com/@eqemu/s/server/categories/reference-lists/aa-categories) |
| classes          | int       | [Classes](https://eqemu.gitbook.io/server/categories/reference-lists/class-list) Bitmasks       |
| races            | int       | [Races](https://app.gitbook.com/@eqemu/s/server/categories/reference-lists/race-list)           |
| drakkin_heritage | int       | Drakkin Heritage, 127 in all AAs                                                                |
| deities          | int       | [Deities](https://app.gitbook.com/@eqemu/s/server/categories/reference-lists/deity-list)        |
| status           | int       | Minimum Status required                                                                         |
| type             | int       | [AA Type](https://app.gitbook.com/@eqemu/s/server/categories/types/aa-types)                    |
| charges          | int       | Number of Charges                                                                               |
| grant_only       | tinyint   | Grant Only Flag: 0 = No, 1 = Yes                                                                |
| first_rank_id    | int       | First Rank Identifier                                                                           |
| enabled          | tinyint   | Enabled: 0 = No, 1 = Yes                                                                        |