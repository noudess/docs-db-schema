# global\_loot

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique Global Loot Identifier |
| description | varchar | Description |
| loottable\_id | int | [Loottable Identifier](loottable.md) |
| enabled | tinyint | Enabled: 0 = False, 1 = True |
| min\_level | int | Minimum Level |
| max\_level | int | Maximum Level |
| rare | tinyint | Rare: 0 = False, 1 = True |
| raid | tinyint | Raid: 0 = False, 1 = True |
| race | mediumtext | [Race](https://eqemu.gitbook.io/server/categories/reference-lists/race-list) |
| class | mediumtext | [Class](https://eqemu.gitbook.io/server/categories/reference-lists/class-list) |
| bodytype | mediumtext | [Body Type](https://eqemu.gitbook.io/server/categories/types/body-types) |
| zone | mediumtext | [Zone Short Name](https://eqemu.gitbook.io/server/categories/reference-lists/zones) |

