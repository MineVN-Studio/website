---
id: form-requirements-actions
title: Requirements and Actions
description: The requirement will be applied when the player opens the Form
sidebar_position: 3
---
:::note

You can have more than one requirement

:::

## Requirement type

| Type                  | Identifiers                                                  | Options          |
|-----------------------|--------------------------------------------------------------|------------------|
| `Has permission`      | `has permission` `has perm` `haspermission` `hasperm` `perm` | `permission`     |
| `Has permission`      | `has permission` `has perm` `haspermission` `hasperm` `perm` | `permission`     |
| `Has money`           | `has money` `hasmoney`                                       | `amount`         |
| `Not has money`       | `!has money` `!hasmoney`                                     | `permission`     | 
| `Has XP`              | `has xp` `hasxp`                                             | `amount`         |
| `Not has XP`          | `!has xp` `!hasxp`                                           | `amount`         |
| `String equals`       | `string equals` `stringequals`                               | `input` `output` |
| `String not equals`   | `string not equal` `!stringequals`                           | `input` `output` |
| `String contains`     | `string cointains` `stringcontains` `contains`               | `input` `output` |
| `String not contains` | `!string contains` `!stringcontains` `!contains`             | `input` `output` |
| `Greater than`        | `>` `greater than` `greaterthan`                             | `input` `output` |
| `Greater than equal`  | `>=` `greater than or equal to` `greaterthanorequalto`       | `input` `output` |
| `Equal`               | `==` `equal to` `equalto`                                    | `input` `output` |
| `Less than equal`     | `=<` `less than or equal to` `lessthanorequalto `            | `input` `output` |
| `Less than`           | `string equals` `stringequals`                               | `input` `output` |
| `String equals`       | `<` `less than` `lessthan`                                   | `input` `output` |
| `String equals`       | `string equals` `stringequals`                               | `input` `output` |
| `String equals`       | `string equals` `stringequals`                               | `input` `output` |

## Action type

| Type              | Identifiers        | Definitions                 |
|-------------------|--------------------|-----------------------------|
| `Console`         | `[Console]`        | Run command as Console      |
| `Player`          | `[player]`         | Run command as Player       |
| `Command Event`   | `[commandevent]`   | Fire a player command event |
| `Open form`       | `[openform]`       | Open a form                 |
| `Messages`        | `[messages]`       | Send a message              |
| `Broadcast`       | `[broadcast]`      | Broadcast a message         |
| `Chat`            | `[chat]`           | Send a chat message         |
| `Sound`           | `[sound]`          | Play a sound                |
| `Broadcast Sound` | `[broadcastsound]` | Broadcast with a sound      |
| `Take money`      | `[takemoney]`      | Take money from player      |
| `Give money`      | `[givemoney]`      | Give money to player        |
| `Take XP`         | `[takexp]`         | Take XP from player         |
| `Give XP`         | `[givexp]`         | Give XP to player           |
| `Give permission` | `[giveperm]`       | Give permission to player   |
| `Take permission` | `[takeperm]`       | Take permission from player |
| `MiniMessage`     | `[minimessage]`    | Send a MiniMessage          |

:::info

- **Sound and Broadcast Sound:** SoundID|volume|pitch|category

:::

:::info

Feel free to suggest more requirements. Our [Discord](https://minevn.studio/discord)

:::

## Action tag
These tags are applicable for use alongside the action, for example: '[message] example<delay=20>'.

| Type     | Identifiers         | Definitions                                                                                                                                                                           |
|----------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Delay`  | `<delay=<time>>`    | Executes the action after the specified delay (in ticks, 20 ticks = 1 second).`                                                                                                       |
| `Chance` | `<chance=<chance>>` | Specifies the probability of executing the action, ranging from 0 to 100. A value of 0 indicates the action will never execute, while a value of 100 ensures it will always execute.` |

## Syntax

```yaml
open_requirements:
  requirements:
    <name>:
      type: "<"
      input: "%server_online%"
      output: "5"
      deny_commands:
        - '[messages] &cServer must have less than 5 players!'
components:
  test:
   title: "Hello"
   image:
    type: "path"
    data: ""
   click_commands:
    - '[openform] something'
   view_requirements:
    <name>:
      type: ">"
      input: "%server_online%"
      output: "5"
      deny_commands:
        - '[messages] &cServer must have less than 5 players!'
```



