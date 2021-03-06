# Fadable
Fade in elements as they move into view, at both the bottom and top of the viewport.

## Demo
https://theoutfit-fadable.netlify.app/

## How to Implement
1. Install it: `npm i @theoutfit/fadable --save`
2. Import it: <code>import fadable from '@theoutfit/fadable'</code>
3. Call it: `fadable()`
4. Class it: add a class of `fadable` to any element

## Configuration
Property | Type | Default | Description
-------- | ---- | ------- | -----------
`initialScale` | number | 0.95 | Initial scale (from 0 - 1)
`transitionDuration` | number | 0.75 | Transition speed (in seconds)
`edgeDistance` | number | 40 | Transition runs at this distance from viewport edges (in pixels)

For example:
```js
fadable({
  initialScale: 0.50,
  transitionDuration: 1.5,
  edgeDistance: 80
})
```

## License
Fadable is available under the [MIT license](https://github.com/fromtheoutfit/fadable/blob/master/LICENSE).