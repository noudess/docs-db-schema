| Column       | Data Type | Description                                                                     |
| ------------ | --------- | ------------------------------------------------------------------------------- |
| id           | int       | Unique Starting Items Entry Identifier                                          |
| race         | int       | [Race](https://eqemu.gitbook.io/server/categories/npc/race-list): 0 = All       |
| class        | int       | [Class](https://eqemu.gitbook.io/server/categories/player/class-list): 0 = All  |
| deityid      | int       | [Deity](https://eqemu.gitbook.io/server/categories/player/deity-list): 0 = Alll |
| zoneid       | int       | [Zone Identifier](https://eqemu.gitbook.io/server/categories/zones/zone-list)   |
| itemid       | int       | [Item Identifier](items.md)                                                     |
| item_charges | tinyint   | Item Charges                                                                    |
| gm           | tinyint   | GM: 0 = False, 1 = True                                                         |
| slot         | mediumint | [Slot](https://eqemu.gitbook.io/server/categories/inventory/inventory-slots)    |