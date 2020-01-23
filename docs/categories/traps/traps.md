# traps



| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique Trap Identifier |
| zone | varchar | [Zone Short Name](https://eqemu.gitbook.io/server/categories/reference-lists/zones) |
| version | smallint | Version: -1 For All |
| x | int | X Coordinate |
| y | int | Y Coordinate |
| z | int | Z Coordinate |
| chance | tinyint | Chance: 0 = None, 100 = Always |
| maxzdiff | float | Max Z Difference |
| radius | float | Trap Radius |
| effect | int | [Trap Type](https://eqemu.gitbook.io/server/categories/types/trap-types) |
| effectvalue | int | Effect Value: \(Based on Trap Type\) 0 = [Spell Identifier](../spells/spells_new.md), 1 = Radius, 2 = [NPC Type Identifier](../npcs/npc_types.md), 3 = [NPC Type Identifier](../npcs/npc_types.md), 4 = Minimum Damage |
| effectvalue2 | int | Effect Value 2: \(Based on Trap Type\) 0 = Unused, 1 = \(0 = Everything Will Aggro, 1 = Only KoS Will Agro\), 2 = Number of NPCs, 3 = Number of NPCs, 4 = Maximum Damage |
| message | varchar | Message |
| skill | int | [Skill Required](https://eqemu.gitbook.io/server/categories/reference-lists/skills) |
| level | mediumint | Level |
| respawn\_time | int | Respawn Timer in Seconds |
| respawn\_var | int | Random Respawn Timer Variance in Seconds |
| triggered\_number | tinyint | Triggered Member |
| group | tinyint | Group |
| despawn\_when\_triggered | tinyint | Despawn When Triggered: 0 = False, 1 = True |
| undetectable | tinyint | Undetectable: 0 = False, 1= True |

### Trap Parameters

| **Type** | **Effect** | **Effect Value** | **Effect Value 2** | **Notes** |
| :--- | :--- | :--- | :--- | :--- |
| Casting Trap | 0 | Spell ID | Unused | Casts a spell on the player that triggered the trap. |
| Alarm Trap | 1 | Range of effect | 0 \(all NPCs aggro\) or 1 \(only KOS NPCs aggro\) | Causes NPCs to aggro the player who triggered the trap. |
| Mystic Spawn \(NPC Trap\) | 2 | npc\_type ID of the mob spawned | number of mobs spawned | Spawns NPCs at a close spot in a small area |
| Bandit Spawn \(NPC Trap2\) | 3 | npc\_type ID of the mob spawned | number of mobs spawned | Spawns NPCs at a close spot in a large area |
| Damage Trap | 4 | minimum amount of damage | maximum amount of damage | Causes damage to the player that triggered the trap. |

### Trap Message Defaults

| **Type** | **Effect** | **Default Message** |
| :--- | :--- | :--- |
| Casting Trap | 0 | "\_\_\_\_\_ triggers a trap!" |
| Alarm Trap | 1 | "A loud alarm rings out through the air..." |
| Mystic Spawn | 2 | "The air shimmers..." |
| Bandit Spawn | 3 | "A bandit leaps out from behind a tree!" |
| Damage Trap | 4 | "\_\_\_\_\_ triggers a trap!" |

