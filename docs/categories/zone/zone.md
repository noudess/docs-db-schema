# zone

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
      <td style="text-align:left">short_name</td>
      <td style="text-align:left">varchar</td>
      <td style="text-align:left">Short Name</td>
    </tr>
    <tr>
      <td style="text-align:left">id</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Unique Entry Identifier</td>
    </tr>
    <tr>
      <td style="text-align:left">file_name</td>
      <td style="text-align:left">varchar</td>
      <td style="text-align:left">File Name</td>
    </tr>
    <tr>
      <td style="text-align:left">long_name</td>
      <td style="text-align:left">text</td>
      <td style="text-align:left">Long Name</td>
    </tr>
    <tr>
      <td style="text-align:left">map_file_name</td>
      <td style="text-align:left">varchar</td>
      <td style="text-align:left">Map File Name</td>
    </tr>
    <tr>
      <td style="text-align:left">safe_x</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Safe X Coordinate</td>
    </tr>
    <tr>
      <td style="text-align:left">safe_y</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Safe Y Coordinate</td>
    </tr>
    <tr>
      <td style="text-align:left">safe_z</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Safe Z Coordinate</td>
    </tr>
    <tr>
      <td style="text-align:left">graveyard_id</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left"><a href="../graveyards/graveyard.md">Graveyard Identifier</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">min_level</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Minimum Level</td>
    </tr>
    <tr>
      <td style="text-align:left">min_status</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left"><a href="https://eqemu.gitbook.io/server/categories/reference-lists/status-levels">Minimum Status</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">zoneidnumber</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left"><a href="https://eqemu.gitbook.io/server/categories/reference-lists/zones">Unique Zone Identifier</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">version</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Version</td>
    </tr>
    <tr>
      <td style="text-align:left">timezone</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Timezone</td>
    </tr>
    <tr>
      <td style="text-align:left">maxclients</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Maximum Clients</td>
    </tr>
    <tr>
      <td style="text-align:left">ruleset</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left"><a href="../rules/rule_sets.md">Ruleset Identifier</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">note</td>
      <td style="text-align:left">varchar</td>
      <td style="text-align:left">Note</td>
    </tr>
    <tr>
      <td style="text-align:left">underworld</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Bottom Z to represent when the player is under the world</td>
    </tr>
    <tr>
      <td style="text-align:left">minclip</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Minimum Clipping Distance</td>
    </tr>
    <tr>
      <td style="text-align:left">maxclip</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Maximum Clipping Distance</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_minclip</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Fog Minimum Clipping Distance</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_maxclip</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Fog Maximum Clipping Distance</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_blue</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Blue Level: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_red</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Red Level: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_green</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Green Level: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">sky</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Sky type the client will present as the backdrop</td>
    </tr>
    <tr>
      <td style="text-align:left">ztype</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">This field is sent directly to the client on zone-in, most zones are set
        to 0, 1 or 255.</td>
    </tr>
    <tr>
      <td style="text-align:left">zone_exp_multiplier</td>
      <td style="text-align:left">decimal</td>
      <td style="text-align:left">This will multiply the XP to this percentage value (decimal based, 100%
        = 1.0)</td>
    </tr>
    <tr>
      <td style="text-align:left">walkspeed</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Walkspeed in this zone</td>
    </tr>
    <tr>
      <td style="text-align:left">time_type</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">This value varies depending on the zone but it is sent to the client on
        zone in. Most starting zones/newbie areas have this value set to 2, dungeons
        tyically have this set to 0, some zones break from the norm and have values
        greater than 2, (akanon = 3, blackburrow = 5, cazicthule = 5, crushbone
        = 5, erudnint = 4, kaladima = 3, etc.)</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_red1</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Red Level 1: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_green1</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Green Level 1: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_blue1</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Blue Level 1: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_minclip1</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Fog Minimum Clipping Distance 1</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_maxclip1</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Fog Maximum Clipping Distance 1</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_red2</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Red Level 2: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_green2</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Green Level 2: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_blue2</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Blue Level 2: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_minclip2</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Fog Minimum Clipping Distance 2</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_maxclip2</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Fog Maximum Clipping Distance 2</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_red3</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Red Level 3: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_green3</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Green Level 3: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_blue3</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Blue Level 3: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_minclip3</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Fog Minimum Clipping Distance 3</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_maxclip3</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Fog Maximum Clipping Distance 4</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_red4</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Red Level 4: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_green4</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Green Level 4: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_blue4</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Fog Blue Level 4: 0 = None, 255 = Max</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_minclip4</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Fog Minimum Clipping Distance 4</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_maxclip4</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Fog Maximum Clipping Distance 4</td>
    </tr>
    <tr>
      <td style="text-align:left">fog_density</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">This is the intensity of the fog, this should be a number between 0-1,
        most commonly used is .1 or .33</td>
    </tr>
    <tr>
      <td style="text-align:left">flag_needed</td>
      <td style="text-align:left">varchar</td>
      <td style="text-align:left"><a href="zone_flags.md">Flag Required</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">canbind</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Can Bind: 0 = False, 1 = True (for Caster), 2 = True (for All)</td>
    </tr>
    <tr>
      <td style="text-align:left">cancombat</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Can Combat: 0 = False, 1 = True</td>
    </tr>
    <tr>
      <td style="text-align:left">canlevitate</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Can Levitate: 0 = False, 1 = True (Does not affect those with #gm on)</td>
    </tr>
    <tr>
      <td style="text-align:left">castoutdoor</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Cast Outdoors: 0 = False, 1 = True</td>
    </tr>
    <tr>
      <td style="text-align:left">hotzone</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Hotzone: 0 = False, 1 = True</td>
    </tr>
    <tr>
      <td style="text-align:left">insttype</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Instance Type</td>
    </tr>
    <tr>
      <td style="text-align:left">shutdowndelay</td>
      <td style="text-align:left">bigint</td>
      <td style="text-align:left">Shutdown Delay</td>
    </tr>
    <tr>
      <td style="text-align:left">peqzone</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">#peqzone: 0 = False, 1 = True</td>
    </tr>
    <tr>
      <td style="text-align:left">expansion</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left"><a href="https://eqemu.gitbook.io/server/categories/reference-lists/expansion-list">Expansion</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">suspendbuffs</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Suspend Buffs: 0 = False, 1 = True</td>
    </tr>
    <tr>
      <td style="text-align:left">rain_chance1</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Rain Chance 1</td>
    </tr>
    <tr>
      <td style="text-align:left">rain_chance2</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Rain Chance 2</td>
    </tr>
    <tr>
      <td style="text-align:left">rain_chance3</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Rain Chance 3</td>
    </tr>
    <tr>
      <td style="text-align:left">rain_chance4</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Rain Chance 4</td>
    </tr>
    <tr>
      <td style="text-align:left">rain_duration1</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Rain Duration 1</td>
    </tr>
    <tr>
      <td style="text-align:left">rain_duration2</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Rain Duration 2</td>
    </tr>
    <tr>
      <td style="text-align:left">rain_duration3</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Rain Duration 3</td>
    </tr>
    <tr>
      <td style="text-align:left">rain_duration4</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Rain Duration 4</td>
    </tr>
    <tr>
      <td style="text-align:left">snow_chance1</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Snow Chance 1</td>
    </tr>
    <tr>
      <td style="text-align:left">snow_chance2</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Snow Chance 2</td>
    </tr>
    <tr>
      <td style="text-align:left">snow_chance3</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Snow Chance 3</td>
    </tr>
    <tr>
      <td style="text-align:left">snow_chance4</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Snow Chance 4</td>
    </tr>
    <tr>
      <td style="text-align:left">snow_duration1</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Snow Duration 1</td>
    </tr>
    <tr>
      <td style="text-align:left">snow_duration2</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Snow Duration 2</td>
    </tr>
    <tr>
      <td style="text-align:left">snow_duration3</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Snow Duration 3</td>
    </tr>
    <tr>
      <td style="text-align:left">snow_duration4</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Snow Duration 4</td>
    </tr>
    <tr>
      <td style="text-align:left">gravity</td>
      <td style="text-align:left">float</td>
      <td style="text-align:left">Gravity</td>
    </tr>
    <tr>
      <td style="text-align:left">type</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">
        <p>Type</p>
        <p>0 = Unknown, 1 = Regular, 2 = Instanced, 3 = Hybrid, 4 = Raid, 5 = City</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">skylock</td>
      <td style="text-align:left">tinyint</td>
      <td style="text-align:left">Sky Lock</td>
    </tr>
    <tr>
      <td style="text-align:left">fast_regen_hp</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Fast Regen Health</td>
    </tr>
    <tr>
      <td style="text-align:left">fast_regen_mana</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Fast Regen Mana</td>
    </tr>
    <tr>
      <td style="text-align:left">fast_regen_endurance</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Fast Regen Endurance</td>
    </tr>
    <tr>
      <td style="text-align:left">npc_max_aggro_dist</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">NPC Max Aggro Distance</td>
    </tr>
    <tr>
      <td style="text-align:left">max_movement_update_range</td>
      <td style="text-align:left">int</td>
      <td style="text-align:left">Max Movement Update Range</td>
    </tr>
  </tbody>
</table>

