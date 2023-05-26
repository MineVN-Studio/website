---
id: config
title: config.yml
description: A list of all config options for DeluxeForms
sidebar_position: 1
---
This section contains the license key, which you can get in from our Discord after purchased the plugin and verified. The plugin requires the license key to activate. So when you download it, you have to put it here.

```yaml
license_key: "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"
```

Toggle to send your server information to bStats
```yaml
bStats: true
```
## Register Form
This section contains the form that you want to register. The form will be registered when the plugin is loaded. The form will be registered with the name you put in the config. The name will be used to open the form.

```yaml
gui_menus: 
 <FormName>:  
   file: <FileName>.yml
 MineVN:
   file: minevn.yml
 TML:
   file: /tml/tml_form.yml
```
:::info
 
 - **FormName** is the name of the form you will give the form, not necessarily the same as the file name. 
 - **FileName** is the name of form in folder `gui_menus`

:::