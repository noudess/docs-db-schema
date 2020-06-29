| Column      | Data Type | Description                                                                   |
| ----------- | --------- | ----------------------------------------------------------------------------- |
| id          | int       | Unique Fishing Identifier                                                     |
| zoneid      | int       | [Zone Identifier](https://eqemu.gitbook.io/server/categories/zones/zone-list) |
| Itemid      | int       | [Item Identifier](items.md)                                                   |
| skill_level | smallint  | Skill Level                                                                   |
| chance      | smallint  | Chance: 0 = Never, 100 = Always                                               |
| npc_id      | int       | [NPC Type Identifier](npc_types.md)                                           |
| npc_chance  | int       | NPC Chance: 0 = Never, 100 = Always                                           |