---
description: EQEmu Admin Starting Items schema information.
---

# starting\_items

## EQEmu Database Table Schema: Starting Items

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique Starting Items Entry Identifier |
| race | int | [Race](https://eqemu.gitbook.io/server/categories/reference-lists/race-list): 0 = All |
| class | int | [Class](https://eqemu.gitbook.io/server/categories/reference-lists/class-list): 0 = All |
| deityid | int | [Deity](https://eqemu.gitbook.io/server/categories/reference-lists/deity-list): 0 = Alll |
| zoneid | int | [Zone Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/zones) |
| itemid | int | [Item Identifier](../items/items.md) |
| item\_charges | tinyint | Item Charges |
| gm | tinyint | GM: 0 = False, 1 = True |
| slot | mediumint | [Slot](https://eqemu.gitbook.io/server/categories/reference-lists/inventory-slots) |

