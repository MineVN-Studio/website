---
id: enchant-lore
title: enchant-lore.yml
description: EnchantSlots lore config
sidebar_position: 2
---
```
tiers:
  default: 4
  COMMON: 4
  UNCOMMON: 5
  RARE: 6
  EPIC: 6
  LEGENDARY: 6
categories:
- SWORD
- TOOL
- DAGGER
- SPEAR
- HAMMER
- BOW
- CROSSBOW
- ARMOR
- GREATSWORD
- LONGSWORD
- KATANA
- AXE
- GREATAXE
- HALBERD
- GREATHAMMER
lore-builder:
  slots: '&7Enchant Slots ({used}/{max}):'
  line: ' {status} '
  status:
    empty: ' &7Empty'
    used: <color:187e57>{enchant} {level}
```