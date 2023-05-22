---
id: installation
title: Installation
description: EnchantSlots installation
sidebar_position: 2
---
Since the plugin is MMOItems dependence, it requires the plugin to run. So here is the guide after you have these 2 plugins installed

## STEP 1: MMOItems config

After active the plugin by replacing the license key in config.yml, you will have to do some config in MMOItems.

```
plugins/mmoitems/language/lore-format.yml
```

After you opened lore-format.yml, add this line into the config
```
  - '#enchant-slots#'
```

## STEP 2: Reload MMOItems

Having done all 2 previous step, you need to reload Mmoitems by /mmoitems reload

## STEP 3: MMOItems enable

Do /mi browse, and scroll to final pages, there will be an option called Enable EnchantSlots, turn it to TRUE 

If the item does not display the lore, please check if the rarity and catagories is configured or not.

Example: https://imgur.com/a/ivuEhn1

**WARNING: DO NOT USE PLUGMAN TO RELOAD THE PLUGIN. RESTART THE SERVER INSTEAD**