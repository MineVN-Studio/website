---
id: form-requirements
title: Requirements
description: The requirement will be applied when the player opens the Form
sidebar_position: 3
---
:::note

You can have more than one requirement

:::

## Requirement type

| Type                  | Identifiers                                                       | Options          |
|-----------------------|-------------------------------------------------------------------|------------------|
| `Have permission`     | `has permission` `has perm` `haspermission` `hasperm` `perm`      | `permission`     |
| `Not have permission` | `!has permission` `!has perm` `!haspermission` `!hasperm` `!perm` | `permission`     | 
| `String equals`       | `string equals` `stringequals`                                    | `input` `output` |
| `String not equals`   | `string not equal` `!stringequals`                                | `input` `output` |
| `String contains`     | `string cointains` `stringcontains` `contains`                    | `input` `output` |
| `String not contains` | `!string contains` `!stringcontains` `!contains`                  | `input` `output` |
| `Greater than`        | `>` `greater than` `greaterthan`                                  | `input` `output` |
| `Greater than equal`  | `>=` `greater than or equal to` `greaterthanorequalto`            | `input` `output` |
| `Equal`               | `==` `equal to` `equalto`                                         | `input` `output` |
| `Less than equal`     | `=<` `less than or equal to` `lessthanorequalto `                 | `input` `output` |
| `Less than`           | `string equals` `stringequals`                                    | `input` `output` |
| `String equals`       | `<` `less than` `lessthan`                                        | `input` `output` |
| `String equals`       | `string equals` `stringequals`                                    | `input` `output` |
| `String equals`       | `string equals` `stringequals`                                    | `input` `output` |

:::info

Feel free to suggest more requirements. Our [Discord](https://minevn.studio/discord)

:::

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



