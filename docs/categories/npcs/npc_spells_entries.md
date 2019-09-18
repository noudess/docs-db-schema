# npc\_spells\_entries

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique NPC Spell Entry Identifier |
| npc\_spells\_id | int | [Unique NPC Spell Set Identifier](npc_spells.md) |
| spellid | smallint | [Spell Identifier](../spells/spells_new.md) |
| type | int | [Spell Type Bitmask](https://eqemu.gitbook.io/server/categories/types/spell-types) |
| minlevel | tinyint | Minimum Level |
| maxlevel | tinyint | Maximum Level |
| manacost | smallint | Mana Cost |
| recast\_delay | int | Recast Delay |
| priority | smallint | Priority: 0 = Innate, 1 = Highest Priority, 5 = Lower Priority, 10 = Even Lower Priority |
| resist\_adjust | int | Resist Adjustment |
| min\_hp | smallint | Minimum Health Percentage |
| max\_hp | smallint | Maximum Health Percentage |

