---
description: EQEmu Admin Fear Hints schema information.
---

# fear\_hints

## EQEmu Database Table Schema: Fear Hints

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique Fear Hint Identifier |
| zone | varchar | [Zone Short Name](https://eqemu.gitbook.io/server/categories/reference-lists/zones) |
| x | float | X Coordinate |
| y | float | Y Coordinate |
| z | float | Z Coordinate |
| forced | tinyint | Forced: 0 = False, 1 = True |
| disjoint | tinyint | Disjoint: 0 = False, 1 = True |

