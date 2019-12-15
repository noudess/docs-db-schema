---
description: EQEmu AAs / Alternative Advancement Rank schema information.
---

# aa\_ranks

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | [AA Identifier](aa_ability.md) |
| upper\_hotkey\_sid | int | Upper Hotkey SID |
| lower\_hotkey\_sid | int | Lower Hotkey SID |
| title\_sid | int | Title SID |
| desc\_sid | int | Description SID |
| cost | int | Cost in AA Points |
| level\_req | int | Level Required |
| spell | int | [Spell Identifier](../spells/spells_new.md) |
| spell\_type | int | [Spell Type](https://eqemu.gitbook.io/server/categories/types/spell-types) |
| recast\_time | int | Recast Timer |
| expansion | int | [Expansion Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/expansion-list) |
| prev\_id | int | Previous Rank Identifier |
| next\_id | int | Next Rank Identifier |

