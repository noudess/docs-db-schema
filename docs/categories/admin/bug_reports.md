# bug\_reports

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique Bug Report Identifier |
| zone | varchar | [Zone Short Name](https://eqemu.gitbook.io/server/categories/reference-lists/zones) |
| client\_version\_id | int | [Client Version Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/client-version-bitmasks) |
| client\_version\_name | varchar | [Client Version Name](https://eqemu.gitbook.io/server/categories/reference-lists/client-version-bitmasks) |
| account\_id | int | [Account Identifier](../account/account.md) |
| character\_id | int | [Character Identifier](../characters/character_data.md) |
| character\_name | varchar | [Character Name](../characters/character_data.md) |
| reporter\_spoof | tinyint | Reporter Spoof |
| category\_id | int | Category Identifier |
| category\_name | varchar | Category Name |
| reporter\_name | varchar | Reporter Name |
| ui\_path | varchar | UI Path |
| pos\_x | float | Position X Coordinate |
| pos\_y | float | Position Y Coordinate |
| pos\_z | float | Position Z Coordinate |
| heading | int | Heading Coordinate |
| time\_played | int | Time Played in Seconds |
| target\_id | int | Target Identifier |
| target\_name | varchar | Target Name |
| optional\_info\_mask | int | Optional Info Mask: 0 = False, 1 = True |
| \_can\_duplicate | tinyint | Can Duplicate: 0 = False, 1 = True |
| \_crash\_bug | tinyint | Crash Bug |
| \_target\_info | tinyint | Target Info |
| \_character\_flags | tinyint | Character Flags |
| \_unknown\_value | tinyint | Unknown |
| bug\_report | varchar | Bug Report |
| system\_info | varchar | System Information |
| report\_datetime | datetime | Report Datetime |
| bug\_status | tinyint | Bug Status |
| last\_review | datetime | Last Review Datetime |
| last\_reviewer | varchar | Last Reviewer |
| reviewer\_notes | varchar | Reviewer Notes |

