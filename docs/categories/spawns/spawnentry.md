# spawnentry

| Column | Data Type | Description |
| :--- | :--- | :--- |
| spawngroupID | int | [Unique Spawn Group Identifier](spawngroup.md) |
| npcID | int | [NPC Type Identifier](../npcs/npc_types.md) |
| chance | smallint | Chance: 0 = Never, 100 = Always |

The spawnentry table has an entry for every NPC that is possible for a spawngroup. Every [spawn2](spawn2.md) entry is associated with exactly one [spawngroup](spawngroup.md). If an entry in the spawn2 table is enabled, and the condition value for that entry's condition is at least 1, an NPC is picked based on chance from this \(spawnentry\) table.

The condition\_value\_filter allows further filtering of which NPC gets picked.

It is easy to get the roles of the \_condition, cond\_value \(both from spawn2\) and condition\_value\_filter confused. To summarize:

| **Field** | **Table** | **Notes** |
| :--- | :--- | :--- |
| \_condition | spawn2 | A spawn2 entry will not fire unless \_condition is zero \(always on\) or a specified non-zero \_condition is enabled \(see spawn\_condition\_values\). |
| cond\_value | spawn2 | Only used if \(\_condition &gt; 0\). Nearly 100% of the usage of this field is on\(1\)/off\(0\). |
| condition\_value\_filter | spawnentry | The cond\_value of the \_condition in the relevant spawn2 entry must match exactly to enable this npc |

### Why was condition\_value\_filter added?

Most EQEmu servers utilize \(2\) spawn2 entries to enable day/night. One entry for Night \(condition 1\) and another for Day \(condition 2\). Using this technique does not allow for day/night spawns to co-exist. On live, some zones such as lake rathe, allow day mobs to spawn in spots where night mobs were killed, while leaving the rest of the night mobs up.

The addition of the condition\_value\_filter in spawnentry allows day/night to be implemented using a single condition and single spawn2 locations for each mob. These spawn2 entries are always enabled \(cond\_value 1\). The single condition simply toggles between day/night. This is done by using a [spawn\_condition](spawn_conditions.md) with an onchange value of 0 \(do nothing\). The spawnentry rows are then filtered based on the current value of the \_condition. See [spawn\_events](spawn_events.md) table for details on how day/night are enabled/disabled.

