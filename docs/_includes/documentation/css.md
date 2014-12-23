
## CSS

Drawer uses only fixed position in especial. Not used absolute. It's a very useful.
 
- Theme

``` css
.drawer-defult
.drawer-navbar-default
```

## LESS

drawer uses [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer). 

> [Autoprefixer](https://github.com/postcss/autoprefixer) parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.

## Deprecated off screen

If you want `off screen` or called `off canvas`, Do not use minus left value of property. You need to be very careful with it. There is a fixed position issue in safari on iOS8. 

