| Column           | Data Type | Description                                                                         |
| ---------------- | --------- | ----------------------------------------------------------------------------------- |
| id               | int       | Unique Corpse Identifier                                                            |
| charid           | int       | [Unique Character Identifier](character_data.md)                                    |
| charname         | varchar   | Character Name                                                                      |
| zone_id          | smallint  | [Zone Identifier](https://eqemu.gitbook.io/server/categories/reference-lists/zones) |
| instance_id      | smallint  | Instance Identifier                                                                 |
| x                | float     | X Coordinate                                                                        |
| y                | float     | Y Coordinate                                                                        |
| z                | float     | Z Coordinate                                                                        |
| heading          | float     | Heading Coordinate                                                                  |
| time_of_death    | datetime  | Time of Death                                                                       |
| is_rezzed        | tinyint   | Is Rezzed: 0 = False, 1 = True                                                      |
| is_buried        | tinyint   | Is Buried: 0 = False, 1 = True                                                      |
| was_at_graveyard | tinyint   | Was At Graveyard: 0 = False, 1 = True                                               |
| is_locked        | tinyint   | Is Locked: 0 = False, 1 = True                                                      |
| exp              | int       | Experience                                                                          |
| size             | int       | Size                                                                                |
| level            | int       | Level                                                                               |
| race             | int       | [Race](https://eqemu.gitbook.io/server/categories/reference-lists/race-list)        |
| gender           | int       | [Gender](https://eqemu.gitbook.io/server/categories/reference-lists/genders)        |
| class            | int       | [Class](https://eqemu.gitbook.io/server/categories/reference-lists/class-list)      |
| deity            | int       | [Deity](https://eqemu.gitbook.io/server/categories/reference-lists/deity-list)      |
| texture          | int       | [Texture](https://eqemu.gitbook.io/server/categories/reference-lists/textures)      |
| helm_texture     | int       | [Helm Texture](https://eqemu.gitbook.io/server/categories/reference-lists/textures) |
| copper           | int       | Copper                                                                              |
| silver           | int       | Silver                                                                              |
| gold             | int       | Gold                                                                                |
| platinum         | int       | Platinum                                                                            |
| hair_color       | int       | Hair Color                                                                          |
| beard_color      | int       | Beard Color                                                                         |
| eye_color_1      | int       | Eye Color 1                                                                         |
| eye_color_2      | int       | Eye Color 2                                                                         |
| hair_style       | int       | Hair Style                                                                          |
| face             | int       | Face                                                                                |
| beard            | int       | Beard                                                                               |
| drakkin_heritage | int       | Drakkin Heritage                                                                    |
| drakkin_tattoo   | int       | Drakkin Tattoo                                                                      |
| drakkin_details  | int       | Drakkin Details                                                                     |
| wc_1             | int       |                                                                                     |
| wc_2             | int       |                                                                                     |
| wc_3             | int       |                                                                                     |
| wc_4             | int       |                                                                                     |
| wc_5             | int       |                                                                                     |
| wc_6             | int       |                                                                                     |
| wc_7             | int       |                                                                                     |
| wc_8             | int       |                                                                                     |
| wc_9             | int       |                                                                                     |