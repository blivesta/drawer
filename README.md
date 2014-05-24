drawer
===
Drawer is a jQuery plugin for displaying the drawer menu using CSS animations in the event of a trigger. Setting the position can be selected either the right or left. And also supports Responsive design.

![drawer](./src/images/drawer-sample.gif)
![drawer-image](./src/images/drawer-image.jpg)

##example
http://git.blivesta.com/drawer/

##Setup
~~~ go
<!-- drawer css -->
<link rel="stylesheet" href="./dist/css/drawer.min.css">
<!-- Vendor js -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<!-- drawer js -->
<script src="./dist/js/drawer.min.js"></script>

<script type="text/javascript">
$('.drawer').drawer({
  // options
  mastaClass:        "drawer-masta",
  navClass:          "drawer-nav",
  navListClass:      "drawer-nav-list",
  overlayClass:      "drawer-overlay",
  toggleClass:       "drawer-toggle",
  upperClass:        "drawer-overlay-upper",
  openClass:         "drawer-open",
  closeClass:        "drawer-close",
  responsiveClass:   "drawer-responsive",
  desktopEvent:      "click",  // or mouseover 
  drawerWidth:       280
});
</script>

<body class="drawer drawer-left"> 
  <button class="drawer-toggle">
    drawer toggle...
  </button>
  <div class="drawer-masta drawer-default">
    <nav class="drawer-nav">
      <div class="drawer-brand">
        <a href="#">Drawer</a>
      </div>
      <ul class="nav drawer-nav-list">
        <li>
          <a href="#">...</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="drawer-overlay">
    contents...
  </div>
</body>
~~~


##Setup Responsive drawer
####Left
~~~ go
<body id="drawer" class="drawer-left drawer-responsive">
...
</body>
~~~

####Right
~~~ go
<body id="drawer" class="drawer-right drawer-responsive">
...
</body>
~~~


##API Methods
####Open
~~~ go
$('#element').drawer('open');
~~~

####Close
~~~ go
$('#element').drawer('close');
~~~

####Toggle
~~~ go
$('#element').drawer('toggle');
~~~

####Destroy
~~~ go
$('#element').drawer('destroy');
~~~ 

##Browsers
- IE 10 +
- chrome
- Firefox
- opera
- Mac safari
- iOS7 safari
- iOS7 chrome

##License
Released under the MIT license.

