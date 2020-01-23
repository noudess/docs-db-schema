# tasks

| Column | Data Type | Description |
| :--- | :--- | :--- |
| id | int | Unique Task Identifier |
| type | tinyint | [Task Type](https://eqemu.gitbook.io/server/categories/types/task-types) |
| duration | int | Duration |
| duration\_code | tinyint | [Duration Code](https://eqemu.gitbook.io/server/categories/reference-lists/task-duration-codes) |
| title | varchar | Title |
| description | text | Description |
| reward | varchar | Reward Description |
| rewardid | int | [Reward Item Identifier](../items/items.md) |
| cashreward | int | Cash Reward in Copper |
| xpreward | int | Experience Reward |
| rewardmethod | tinyint | Reward Method: 0 = Single Item ID, 1 = List of Items, 2 = Quest Controlled |
| minlevel | tinyint | Minimum Level |
| maxlevel | tinyint | Maximum Level |
| repeatable | tinyint | Repeatable: 0 = False, 1 = True |
| faction\_reward | int | Faction Reward |
| completion\_emote | varchar | Completion Emote |

