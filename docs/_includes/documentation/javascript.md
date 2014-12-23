
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
  apiClass: "element"
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

## Dropdown seletor

`dropdown.js`

``` javascript
var nav = '.drawer-nav'
```

## Dropdown hover

`HTML footer`

``` javascript
$('.drawer-dropdown-hover').hover(function(){ 
  $('[data-toggle="dropdown"]', this).trigger('click'); 
});
```