---
id: lorebuilder
title: Lore Builder
description: EnchantSlots Lore Builder
sidebar_position: 3
---
You can modify the lore as the way you wanted. Including HEX COLOR support.

Explaination:
- Slots - the first lore
- Status -  Check if the item has enchantments on it or not. If NO, displayed " EMTY ", if YES, displayed " USED ". 
- **<color:187e57>** - The color of the lore, you can visit https://rgb.birdflop.com/ for more color choices

```
lore-builder:
  slots: '&7Enchant Slots ({used}/{max}):'
  line: ' {status}'
  status:
    empty: ' &7Empty'
    used: <color:187e57>{enchant} {level}
```