# faction\_list\_mod

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique Faction List Modifier Identifier |
| faction\_id | int | [Faction Identifier](faction_list.md) |
| mod | smallint | Modifier |
| mod\_name | varchar | Modifier Name: r\# = [Race Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/race-list), c\# = [Class Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/class-list), d\# = [Deity Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/deity-list) |

There are 3 types of modifications, \(r\)ace, \(c\)lass, and \(d\)eity. The mod name consists of the letter indicated followed by the id of the race/class/deity.

For example, an entry with mod\_name r4 and a mod of 10, means that all characters of race 4 \(wood elf\) gain 10 faction points from the base faction value just for being wood elves... well that and those kinky outfits they wear.

