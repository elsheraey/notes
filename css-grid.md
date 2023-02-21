# css-grid
Some notes and resources around CSS grid.

## Notes:

### The Net Ninja CSS Grid Tutorial:
- You make use of grids with `display: grid`.
- Grids are 2-dimensional and consist of rows and columns.
- `grid-template-columns: 30% 20% 50%` creates 3 columns with the given fractions. 
- You can replace the percentages with `fr` units and use `repeat` as follows: `grid-template-columns: repeat(3, 1fr)`.
- Using `grid-auto-rows` sets the row's height.
- `grid-gap` is used to put spaces between grid elements.
- `grid-column: 1 / 3` determines the column lines at which the element's positioning starts and ends.
- `span` defines how many units should a grid element take.
- Use of `grid-template-area` is the magic behind grids.

## Resources:
- [The Net Ninja CSS Grid Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY)
- [The Net Ninja CSS Grid Tutorial Project](https://github.com/iamshaunjp/css-grid-playlist)