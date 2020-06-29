| Column           | Data Type | Description                                                               |
| ---------------- | --------- | ------------------------------------------------------------------------- |
| id               | int       | Unique Mercenary Armor Info Identifier                                    |
| merc_npc_type_id | int       | [Mercenary NPC Type Identifier](merc_npc_types.md)                        |
| minlevel         | tinyint   | Minimum Level                                                             |
| maxlevel         | tinyint   | Maximum Level                                                             |
| texture          | tinyint   | [Texture](https://eqemu.gitbook.io/server/categories/npc/textures)        |
| helmtexture      | tinyint   | [Helmet Texture](https://eqemu.gitbook.io/server/categories/npc/textures) |
| armortint_id     | int       | [Armor Tint Identifier](npc_types_tint.md)                                |
| armortint_red    | tinyint   | Armor Tint Red: 0 = None, 255 = Max                                       |
| armortint_green  | tinyint   | Armor Tint Green: 0 = None, 255 = Max                                     |
| armortint_blue   | tinyint   | Armor Tint Blue: 0 = None, 255 = Max                                      |