# npc\_faction\_entries

<table>
  <thead>
    <tr>
      <th style="text-align:left">Column</th>
      <th style="text-align:left">Data Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">npc_faction_id</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left"><a href="npc_faction.md">NPC Faction Identifier</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">faction_id</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left"><a href="../factions/faction_list.md">Faction Identifier</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">value</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Value. Amount gained or lost for killing the NPCs assigned to this npc_faction_id.</td>
    </tr>
    <tr>
      <td style="text-align:left">npc_value</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">
        <p>How the NPCs assigned to this npc_faction_id respond to other NPCs that
          are on the faction_id for this entry.</p>
        <p>NPC Value: -1 = Attack, 0 = Neutral, 1 = Assist</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">temp</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Temporary: 0 = Faction is permanent, player receives a message, 1 = Faction
        is temporary, player does not receive a message, 2 = Faction is temporary,
        player receives a message, 3 = Faction is permanent, but player does not
        receive a message.</td>
    </tr>
  </tbody>
</table>