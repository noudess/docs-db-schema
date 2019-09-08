| Column            | Data Type | Description                                    |
| ----------------- | --------- | ---------------------------------------------- |
| id                | int       | Unique Entry Identifier                        |
| adventure_id      | smallint  | Unique Adventure Identifier                    |
| instance_id       | int       | [Unique Instance Identifier](instance_list.md) |
| count             | smallint  |                                                |
| assassinate_count | smallint  |                                                |
| status            | tinyint   |                                                |
| time_created      | int       | Time Created UNIX Timestamp                    |
| time_zoned        | int       | Time Zoned UNIX Timestamp                      |
| time_completed    | int       | Time Completed UNIX Timestamp                  |