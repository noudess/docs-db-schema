---
description: EQEmu AAs / Alternative Advancement Ability schema information.
---

# aa\_ability

## EQEmu Database Table Schema: AA Ability 

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique AA Identifier |
| name | text | Name |
| category | int | [AA Category](hhttps://eqemu.gitbook.io/server/categories/reference-lists/aa-categories) |
| classes | int | [Classes](https://eqemu.gitbook.io/server/categories/reference-lists/class-list) Bitmasks |
| races | int | [Races](hhttps://eqemu.gitbook.io/server/categories/reference-lists/race-list) |
| drakkin\_heritage | int | Drakkin Heritage: 127 = All |
| deities | int | [Deities](hhttps://eqemu.gitbook.io/server/categories/reference-lists/deity-list) |
| status | int | [Minimum Status](https://eqemu.gitbook.io/server/categories/reference-lists/status-levels) |
| type | int | [AA Type](hhttps://eqemu.gitbook.io/server/categories/types/aa-types) |
| charges | int | Number of Charges |
| grant\_only | tinyint | Grant Only Flag: 0 = No, 1 = Yes |
| first\_rank\_id | int | First Rank Identifier |
| enabled | tinyint | Enabled: 0 = No, 1 = Yes |

