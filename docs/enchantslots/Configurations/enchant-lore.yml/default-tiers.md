---
id: default-tiers
title: Default tiers
description: Set default tiers for your non-MMOItems items
sidebar_position: 7
---

Explaination:
  - The key in the section is the [material ID](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).
  - The value is the tier you want to assign to that material.
  - The `default` key is apply for any type of material.

:::caution
If you set the tier is `"null"`, it won't convert the item to display the enchant lore.
:::

```
default-tiers:
  default: COMMON
  DIAMOND_SWORD: "null"
```
