---
description: EQEmu AAs / Alternative Advancement Effect schema information.
---

# aa\_effects

## EQEmu Database Table Schema: AA Effects 

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique Entry Identifier |
| aaid | mediumint | [AA Identifier](aa_ability.md) |
| slot | tinyint | Slot |
| effectid | mediumint | [Spell Effect Identifier](https://eqemu.gitbook.io/server/categories/spells/spell-effect-ids) |
| base1 | mediumint | First Base Value |
| base2 | mediumint | Second Base Value |

