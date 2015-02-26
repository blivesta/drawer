## Compatible Browsers

Drawer is designed to support the cross-browser. Compatible with IE7+ including old mobile browsers.
Global Web Browser stats by [Browser market share](http://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0).

- Chrome
- Firefox
- Safari
- Opera
- IE

 > - mode: navbar IE7+
 > - mode: responsive IE7+
 > - mode: default IE9+

## Conditional comment

``` javascript
<!--[if lt IE 9]>
<script async src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="//cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
<![endif]-->
```

To consider [screen readers don’t use JavaScript](http://a11yproject.com/posts/myth-screen-readers-dont-use-javascript/). You can add the CSS, modernizr.js for dropdown menu.

**drawer-navbar.less**

``` css
.no-js .drawer-navbar-default li:hover .dropdown-menu {
  display: block;
}
```

If you want touch event on mobile browsers. You can add the mordernizr.js.

**footer.html**

``` html
<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>

<script>
$(document).ready(function(){
  if( !modernizr.touch){
    $('.drawer-dropdown-hover').hover(function(){ 
      $('[data-toggle="dropdown"]', this).trigger('click'); 
    });
  };
});     
</script> 
```

## Accessibility

### 1st tab + Enter key

**Skip to main content** via [bootstrap](http://getbootstrap.com/getting-started/#accessibility)

``` html
<body class="drawer drawer-right site-home">
  <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>

  <header>
    <nav>
      navigation
    </nav>
  </header>

  <main id="content">
    content
  </main>
</body>
```

### 2nd tab + Enter key

**toggle navigation**

``` html
<div class="drawer-header">
  <button type="button" class="drawer-toggle drawer-hamburger">
    <span class="sr-only">toggle navigation</span> 
    <span class="drawer-hamburger-icon"></span>
  </button>
</div>
```

#### dropdown **Enter** or **keyDown**

Toggle dropdown menu

``` html
<ul class="drawer-menu">
  <li class="drawer-menu-item dropdown drawer-dropdown"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false">Item <span class="caret"></span></a>
    <ul class="drawer-submenu dropdown-menu" role="menu">
    <li class="drawer-submenu-item"><a href="./">Sub Item</a></li>
    </ul>
  </li>
</ul>
```