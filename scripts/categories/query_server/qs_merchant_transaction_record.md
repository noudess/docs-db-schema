| Column         | Data Type | Description                                                                   |
| -------------- | --------- | ----------------------------------------------------------------------------- |
| transaction_id | int       | Unique Transaction Identifier                                                 |
| time           | timestamp | Timestamp                                                                     |
| zone_id        | int       | [Zone Identifier](https://eqemu.gitbook.io/server/categories/zones/zone-list) |
| merchant_id    | int       | [Merchant Identifier](merchantlist.md)                                        |
| merchant_pp    | int       | Merchant Platinum                                                             |
| merchant_gp    | int       | Merchant Gold                                                                 |
| merchant_sp    | int       | Merchant Silver                                                               |
| merchant_cp    | int       | Merchant Copper                                                               |
| merchant_items | mediumint | Merchant Items                                                                |
| char_id        | int       | [Unique Character Identifier](character_data.md)                              |
| char_pp        | int       | Character Platinum                                                            |
| char_gp        | int       | Character Gold                                                                |
| char_sp        | int       | Character Silver                                                              |
| char_cp        | int       | Character Copper                                                              |
| char_items     | mediumint | Character Items                                                               |