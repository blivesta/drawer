
## Call the Drawer

``` javascript
$(document).ready(function() {
  $(".drawer").drawer();
});
```

## API Methods

``` javascript
// Option
$(".drawer").drawer({
  apiToggleClass: "element"
});

// Open
$('.element').on(function)() {
  $('.drawer').drawer('open');
});

// close
$('.element').on(function)() {
  $('.drawer').drawer('close');
});

// toggle
$('.element').on(function)() {
  $('.drawer').drawer('toggle');
});

// destroy
$('.element').on(function)() {
  $('.drawer').drawer('destroy');
});
```

## Events

``` javascript
// Opened
$('#element').on('drawer.opened');

// Closed
$('#element').on('drawer.closed');
```

### Configuring the iScroll

Do not use `click: true`, `preventDefault: true` options in order to improve cross browser and web accessibility. If you want to use [iscroll](https://github.com/cubiq/iscroll) lite version, can build with Wheel. It's a lightweight custom [iscroll](https://github.com/ungki/iscroll.lite).

`drawer.js`

``` javascript
var drawerScroll = new IScroll("."+options.mastaClass, {
  mouseWheel:true,
  preventDefault: false
});
```

### Dropdown seletor

`dropdown.js`

``` javascript
var nav = '.drawer-nav'
```

### Dropdown hover

`HTML footer`

``` javascript
$('.drawer-dropdown-hover').hover(function(){ 
  $('[data-toggle="dropdown"]', this).trigger('click'); 
});
```