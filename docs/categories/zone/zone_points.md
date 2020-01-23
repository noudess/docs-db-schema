# zone\_points

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique Zone Point Identifier |
| zone | varchar | [Zone Short Name](https://eqemu.gitbook.io/server/categories/reference-lists/zones) |
| version | int | Version |
| number | smallint | Represents the iterator field sent in the struct ZonePoint\_Entry, zone points for the current zone are sent when client zones in \(during Client::Handle\_Connect\_OP\_ReqClientSpawn in client\_packet.cpp\).  This number field must be unique and also could have a hardcoded equivalent in the client, eg. client is expecting a specific number value for a zone point or teleport/object pad, such as in Erudin \(erudnext\). |
| y | float | Y Coordinate |
| x | float | X Coordinate |
| z | float | Z Coordinate |
| heading | float | Heading Coordinate |
| target\_y | float | Target Y Coordinate |
| target\_x | float | Target X Coordinate |
| target\_z | float | Target Z Coordinate |
| target\_heading | float | Target Heading Coordinate |
| zoneinst | smallint | [Instance Identifier](https://github.com/EQEmu/docs-db-schema/tree/d4bc469f77c5c772d9206ed2f9af908aabd1069d/docs/instance_list.d) |
| target\_zone\_id | int | [Target Zone Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/zones) |
| target\_instance | int | Target Instance Identifier |
| buffer | float | Zone Point Buffer |
| client\_version\_mask | int | [Client Version Mask](https://eqemu.gitbook.io/server/categories/reference-lists/client-version-bitmasks) |

