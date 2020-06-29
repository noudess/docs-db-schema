| Column                | Data Type | Description                                   |
| --------------------- | --------- | --------------------------------------------- |
| id                    | int       | Unique NPC Faction Identifier                 |
| name                  | tinytext  | Name                                          |
| primaryfaction        | int       | [Primary Faction Identifier](faction_list.md) |
| ignore_primary_assist | tinyint   | Ignore Primary Assist: 0 = False, >0 = True   |