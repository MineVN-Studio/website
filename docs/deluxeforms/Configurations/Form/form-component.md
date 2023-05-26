---
id: form-component
title: Form Component
description: A Form can make from more than one component.
sidebar_position: 2
---
| Form Type   | Component Type                                        |
|-------------|-------------------------------------------------------|
| `Simple`    | `Button`                                              |
| `Modal`     | `Content, Button 1, Button 2`                         |
| `Custom`    | `Label, Input, Slider, Step slider, Toggle, Dropdown` |
## Button

```yaml
<name>:
  title: "Hi"
  image:
    type: "path"
    data: ""
  click_commands:
    - '[player] spawn'
```
:::tip

Image type can be **path **or **url**
- Path is a path to texture in your resource pack.
- Url is the URL to your image (clients may have a delay in seeing it because they need to download it)
:::

## Button 1 & Button 2

```yaml
button-1:
    title: "Yes"
button-2:
    title: "No"
```
:::caution

Modal Form only has 2 buttons like this, so you can't add more.

:::

## Label

```yaml
<name>:
  title: "&fWlecome to DeluxeForms"
  type: LABEL
```

## Input

```yaml
<name>:
  title: "&bPlease enter your review our us"
  type: INPUT
  component:
    placeholder: "Type here"
    default-input: ""
  click_commands:
   - "[chat] Thank you for {0}"
```

## Slider

```yaml
<name>:
  title: "Amount"
  type: SLIDER
  component:
   min: 0
   max: 100
   step: 1
   default-value: 0
  click_commands:
   - "[console] time set day"
   - "[console] say {0}"
```

## Step slider

```yaml
<name>:
  title: "Step slider"
  type: STEP_SLIDER
  component:
   steps:
    - "Option 1"
    - "Option 2"
  click_commands:
   - ""
   - ""
```
:::caution

Step slider behavior is slightly different; it will run the command based on the index step player chooses.

:::

## Toggle

```yaml
<name>:
  title: "label"
  type: TOGGLE
  component:
   default-value: true
  commands:
   #true
   - "[console] day"
   #false
   - "[console] night"
```

## Dropdown

```yaml
<name>:
  title: "Drop down"
  type: DROPDOWN
  component:
   default-element: 0
   elements:
    - "Option 1"
    - "Option 2"
  commands:
   - "[console] say 1"
   - "[console] say 2"
```
:::note

Same behavior as the step slider

:::

