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
use-categories: true
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
enchants-level:
  '1': I
  '2': II
  '3': III
  '4': IV
  '5': V
  '6': VI
  '7': VII
  '8': VIII
  '9': IX
  '10': X
# Here you can change the name of the enchantment
# get vanilla enchant id at: https://minecraft.fandom.com/wiki/Enchanting#Summary_of_enchantments
enchants-name:
  protection: Protection
  mending: Mending
  looting: Looting
gem-enchants:
  # Here you can add the gem ID
  # the number is the level of the gem
  # if the gem doesn't have level, just add the first entry to the list
  example:
  - '1'
  - '2'
  - '3'
  - '4'
  - '5'
  - '6'
  - '7'
  - '8'
  - '9'
  - '10'
default-tiers:
  default: COMMON
  DIAMOND_SWORD: COMMON
# List of NBT tags that will be mark as not convertible to item
# Example: DISABLE_NBT
exclude-nbt:
- CustomFishing
# - display  
```
