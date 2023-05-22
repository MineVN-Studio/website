---
id: tiers
title: Tiers
description: Item tiers
sidebar_position: 2
---
This section decides the amount of enchantments can be applied on an item. This is depended on MMOItems config. If the item is manually generated (Crafted, given from command,...), the default tier is set to COMMON.

If the tier is not configed in Mmoitems, EnchantSlots WILL NOT recognise it and the lore section will not be displayed.

In order to let the plugin recognise an item, please add default: 4 just like this
(You can copy a premade config at Plugin's files)

```
tiers:
  default: 4
  COMMON: 4
  UNCOMMON: 5
  RARE: 6
  EPIC: 6
  LEGENDARY: 6
```