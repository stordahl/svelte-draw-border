# svelte-draw-border

<a href="https://www.npmjs.com/package/svelte-draw-border">
  <img src="https://img.shields.io/npm/dm/svelte-draw-border.svg" alt="Downloads">
</a>

Draw smooth borders around any element, with Svelte

[Docs/ Demo](https://svelte-draw-border.vercel.app/)

## Installation

```shell
npm i svelte-draw-border
```

## Usage

Currently the animation is only triggered on hover.

```svelte
<script>
  import DrawBorder from 'svelte-draw-border';
</script>

<DrawBorder initialColor="green" endColor="white">
  <button>Submit</button>
</DrawBorder>
```

### Props

| Name         | Type   | Default       | Description                                  |
|--------------|--------|---------------|----------------------------------------------|
| borderRadius | string | '0px'         | Works with any valid CSS border-radius value |
| borderWidth  | string | '2px'         | Use px, ems, or rems                         |
| initialColor | string | 'transparent' | Works with any valid CSS color value         |
| endColor     | string | 'green        | Works with any valid CSS color value         |
| startingDeg  | number | 90            | The position of the animation start, 0 being the middle & top of the target element |
| direction    | 'clockwise', 'counter-clockwise'| 'clockwise' | The direction of the animation |
