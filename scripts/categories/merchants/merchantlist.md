| Column            | Data Type | Description                                                                      |
| ----------------- | --------- | -------------------------------------------------------------------------------- |
| merchantid        | int       | Merchant Identifier                                                              |
| slot              | int       | Slot                                                                             |
| item              | int       | [Item Identifier](items.md)                                                      |
| faction_required  | smallint  | Faction Required                                                                 |
| level_required    | tinyint   | Level Required                                                                   |
| alt_currency_cost | smallint  | [Alternate Currency Cost](alternate_currency.md)                                 |
| classes_required  | int       | [Classes Required](https://eqemu.gitbook.io/server/categories/player/class-list) |
| probability       | int       | Probability: 0 = Never, 100 = Always                                             |