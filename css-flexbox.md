# css-flexbox
Some notes and resources around CSS flexbox.

## Notes:

### The Net Ninja CSS Flexbox Tutorial Notes:
- Easier than playing with floats and doing a clear fix.
- Flex boxes are uni-directional and work over one dimension.
- Flex items default behavior is stacking left to right.
- `flex-grow` sets the growth rate for each flex item.
- `flex-shrink` sets the shrinking rate for each flex item.
- `flex-wrap` is for when you reach a minimum width and want to move to another line.
- `flex-basis` is similar to `min-width` and `min-height` as it's direction dependent and would shrink in case there is no longer a space in the window.
- `flex: 1 0 200px` would set `flex-grow`, `flex-shrink`, and `flex-basis` in the same order.
- `flex-flow` is a shorthand for `flex-direction` and `flex-wrap`.
- `justify-content` always works on the main axis defined by `flex-direction`.
- `align-items` always works on the cross axis.
- `order` is a nice property through which you can easily reorder flex items.

## Resources:
- [The Net Ninja CSS Flexbox Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG)
- [The Net Ninja CSS Flexbox Tutorial Project](https://github.com/iamshaunjp/css-flexbox-playlist)
- [W3Schools CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
