---
description: EQEmu Admin Event Log schema information.
---

# eventlog

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique Event Identifier |
| accountname | varchar | [Account Name](../account/account.md) |
| accountid | int | [Account Identifier](../account/account.md) |
| status | int | [Status](https://eqemu.gitbook.io/server/categories/reference-lists/status-levels) |
| charname | varchar | [Character Name](../characters/character_data.md) |
| target | varchar | Target |
| time | timestamp | TIme Timestamp |
| descriptiontype | varchar | Description Type |
| description | text | Description |
| event\_nid | int | Event Identifier |

