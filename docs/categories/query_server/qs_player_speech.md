| Column       | Data Type | Description                                                                       |
| ------------ | --------- | --------------------------------------------------------------------------------- |
| id           | int       | Unique Speech Identifier                                                          |
| from         | varchar   | [From Character Identifier](character_data.md)                                    |
| to           | varchar   | [To Character Identifier](character_data.md)                                      |
| message      | varchar   | Message                                                                           |
| minstatus    | smallint  | [Minimum Status](https://eqemu.gitbook.io/server/categories/player/status-levels) |
| guilddbid    | int       | [Guild Database Identifier](guilds.md)                                            |
| type         | tinyint   | Type                                                                              |
| timerecorded | timestamp | Time Recorded Timestamp                                                           |