| Column            | Data Type | Description                                                                     |
| ----------------- | --------- | ------------------------------------------------------------------------------- |
| id                | int       | Unique Tradeskill Recipe Identifier                                             |
| name              | varchar   | Recipe Name                                                                     |
| tradeskill        | smallint  | [Tradeskill](https://eqemu.gitbook.io/server/categories/reference-lists/skills) |
| skillneeded       | smallint  | Skill Level Needed                                                              |
| trivial           | smallint  | Trivial Skill Level                                                             |
| nofail            | tinyint   | No Fail: 0 = False, 1 = True                                                    |
| replace_container | tinyint   | Replace Container: 0 = False, 1 = True                                          |
| notes             | tinytext  | Notes                                                                           |
| must_learn        | tinyint   | Must Learn: 0 = False, 1 = True                                                 |
| quest             | tinyint   | Quest: 0 = False, 1 = True                                                      |
| enabled           | tinyint   | Enabled: 0 = False, 1 = True                                                    |