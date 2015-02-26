## What's your menu

Drawer markup can be used in various ways such as lovely sites: 

- [Awwwards](http://www.awwwards.com/)
- [HTML5 Doctor](http://html5doctor.com/)
- [A List Apart](http://alistapart.com/) 

## Step 1: Link required files

``` html
<!-- drawer css -->
<link rel="stylesheet" href="../css/drawer.min.css">

<!-- jquery & iscroll & dropdown -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/iScroll/5.1.1/iscroll-min.js"></script>
<script src="//cdn.rawgit.com/ungki/bootstrap.dropdown/3.3.1/dropdown.min.js"></script>

<!-- drawer js -->
<script src="../dist/js/jquery.drawer.min.js"></script>
```

## Step 2: HTML markup

``` html
<body class="drawer drawer-right">

  <header role="banner">
  <div class="drawer-header">
    <button type="button" class="drawer-toggle drawer-hamburger">
      <span class="sr-only">toggle navigation</span> 
      <span class="drawer-hamburger-icon"></span>
    </button>
  </div>

  <div class="drawer-main drawer-default">
    <nav class="drawer-nav" role="navigation">
      <div class="drawer-brand"><a href="./">drawer</a></div>

      <ul class="drawer-menu">
        <li class="drawer-menu-item"><a href="./base">base</a></li>
      </ul>

      <div class="drawer-footer"><span></span></div>
    </nav>
  </div>
  </header>

  <div class="drawer-overlay">
  <!-- content -->
  </div>

</body>
```

**Responsive markup**

- Left position

  ``` html
  <body class="drawer drawer-left drawer-responsive">
  ```

- Right position

  ``` html
  <body class="drawer drawer-right drawer-responsive">
  ```

**Navbar markup**

- basic

  ``` html
  <!-- relative navbar -->
  <body class="drawer drawer-left drawer-navbar">

  <!-- static navbar -->
  <body class="drawer drawer-left drawer-navbar drawer-static">

  <!-- fixed navbar -->
  <body class="drawer drawer-left drawer-navbar drawer-fixed">
  ```

### Example 

Fixed navbar & dropdown menu

``` html
<body class="drawer drawer-left drawer-navbar drawer-fixed">

  <header role="banner">
  <div class="drawer-header">
    ...
  </div>
  <div class="drawer-main drawer-navbar-default">
    <nav class="drawer-nav" role="navigation">
      <div class="drawer-brand"><a href="./">drawer</a></div>

      <ul class="drawer-menu">
        <li class="drawer-menu-item dropdown drawer-dropdown">
          <a href="#" data-toggle="dropdown" role="button" aria-expanded="false">Demo <span class="caret"></span></a>
          <ul class="drawer-submenu dropdown-menu" role="menu">
          <li class="drawer-submenu-item"><a href="./">About</a></li>
        </ul>
        </li>
        <li class="drawer-menu-item dropdown drawer-dropdown-hover">
          ...
      </ul>

    ...
</body>
```

## Step 3: Call the Drawer

``` javascript
$(document).ready(function() {
  $(".drawer").drawer();
});
```

### Using lists tag

**default**

``` html
<ul class="drawer-menu">
  <li class="drawer-menu-item">Item
    <ul class="drawer-submenu">
      <li class="drawer-submenu-item">
        <a href="./">Sub Item</a>
      </li>
    </ul>
  </li>
</ul>
```

**level 1**

``` html
<ul class="drawer-menu">
  <li class="drawer-menu-item"><a href="./">Item</a></li>
</ul>
```

**level 2**

``` html
<ul class="drawer-menu">
  <li class="drawer-menu-item"><a href="./">Item</a>
    <ul class="drawer-submenu">
      <li class="drawer-submenu-item"><a href="./">Sub Item</a></li>
    </ul>
  </li>
</ul>
```

### Using dropdown

**Click & Touch**

``` html
<ul class="drawer-menu">
  <li class="drawer-menu-item dropdown drawer-dropdown"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false">Item <span class="caret"></span></a>
    <ul class="drawer-submenu dropdown-menu" role="menu">
      <li class="drawer-submenu-item"><a href="./">Sub Item</a></li>
    </ul>
  </li>
</ul>
```

**Click & Touch & hover for desktop**

``` html
<ul class="drawer-menu">
  <li class="drawer-menu-item dropdown drawer-dropdown-hover"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false">Item <span class="caret"></span></a>
    <ul class="drawer-submenu dropdown-menu" role="menu">
      <li class="drawer-submenu-item"><a href="./">Sub Item</a></li>
    </ul>
  </li>
</ul>
```

**hover javascript in your html footer**

``` javascript
$('.drawer-dropdown-hover').hover(function(){ 
  $('[data-toggle="dropdown"]', this).trigger('click'); 
});
```

**Seletor**

``` css
.drawer-dropdown
.drawer-dropdown-hover

  or custom class of your platform menu
```

### Floating navbar

``` html
<ul class="drawer-menu drawer-navbar-right">
  <li class="drawer-menu-item dropdown drawer-dropdown"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false">Item <span class="caret"></span></a>
    <ul class="drawer-submenu dropdown-menu" role="menu">
      <li class="drawer-submenu-item"><a href="./">Sub Item</a></li>
    </ul>
  </li>
</ul>
```

**Seletor**

``` css
.drawer-navbar-right
```

### Using form tag

If you want to add `<form>` tag for search. Follow code.

![drawer form](https://lh5.googleusercontent.com/-NwCOXQ-8J2A/VJlWPLrPnAI/AAAAAAAABck/D5gAT9lZljs/w714-h397-no/drawer-from.gif)

**Add HTML**

In `<nav>` tag

``` html
<form class="drawer-form drawer-form-right" role="search">
  <label class="sr-only">search</label>
  <div class="drawer-input-group">
  <input type="text" class="drawer-input" placeholder="Search">
  </div>
  <button type="submit" class="drawer-form-btn">Submit</button>
</form>
```

**Add CSS** 

`navbar.less`

``` css
.drawer-navbar-default {

  ... 

  .drawer-form {
    display: inline-block;
    float: none;
    margin: 10px 0;
    padding: 15px;
    border: 0;
    background-color: #ddd;
    &.drawer-form-right {
      float: none;
    }
    .drawer-input-group {
      float: left;
      .drawer-input {
        height:25px;
        width: auto;
        padding: 0 10px;
        border: 0;
      }
    }
    .drawer-form-btn {
      float: left;
      padding: 0 12px;
      height: 25px;
      font-weight: normal;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      border: 0;
      background-color: #d5d5d5;
    }
  }
}
```

`responsive.less`

``` css
@media (min-width: 768px) {
  .drawer-navbar-default {

  ...

    .drawer-form {
    float: left;
    margin: 0;
    padding: 10px 15px;
    background-color: #ddd;
      &.drawer-form-right {
        float: right;
      }
      .drawer-input-group {
         .drawer-input {
          height: 30px;
          width: 100px;
        }
      }
      .drawer-form-btn {
        height: 30px;
      }
    }
  }
}
```
