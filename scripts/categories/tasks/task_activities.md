| Column               | Data Type | Description                                                                                       |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------- |
| taskid               | int       | [Task Identifier](tasks.md)                                                                       |
| activityid           | int       | Activity Identifier: Starts at 0                                                                  |
| step                 | int       | Step: 0 = Always Available, >0 = Must Complete Previous                                           |
| activitytype         | tinyint   | [Activity Type](https://eqemu.gitbook.io/server/categories/task-system-guide/task-activity-types) |
| target_name          | varchar   | Target Name                                                                                       |
| item_list            | varchar   | [Item Identifier List](items.md)                                                                  |
| skill_list           | varchar   | [Skill Identifier List](https://eqemu.gitbook.io/server/categories/player/skills)                 |
| spell_list           | varchar   | [Spell Identifier List](spells_new.md)                                                            |
| description_override | varchar   | Description Override                                                                              |
| goalid               | int       | Goal Identifier or [Goal List Identifier](goallists.md)                                           |
| goalmethod           | int       | Goal Method: 0 = Single Value, 1 = List                                                           |
| goalcount            | int       | Goal Count                                                                                        |
| delivertonpc         | int       | Deliver To NPC: 0 = No Delivery NPC, >0 = [NPC Type Identifier](npc_types.md)                     |
| zones                | varchar   | [Zones List](https://eqemu.gitbook.io/server/categories/zones/zone-list)                          |
| optional             | tinyint   | Optional: 0 = False, 1 = True                                                                     |