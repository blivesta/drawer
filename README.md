drawer
===
Drawer is a jQuery plugin for creating a responsive, touch-enabled and css animated side menu that slides out from the edge of the screen when clicking or touching the trigger.

![drawer](./src/images/drawer-small.gif)
![drawer-image](./src/images/drawer-image-small.jpg)

##example
####Basic
http://blivesta.github.io/drawer/

####Responsive
http://blivesta.github.io/drawer/responsive

##Setup
~~~ go
<!-- vendor CSS -->
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
<!-- drawer css -->
<link rel="stylesheet" href="./dist/css/drawer.min.css">
<!-- Vendor js -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<!-- cooker.drawer -->
<script src="./dist/js/drawer.min.js"></script>

<script type="text/javascript">
$('.drawer').drawer({
  // options
  masta:        "drawer-masta"
  nav:          "drawer-nav",
  navList:      "drawer-nav-list",
  overlay:      "drawer-overlay",
  toggle:       "drawer-toggle",
  body:         "drawer-body",
  openClass:    "drawer-open",
  closeClass:   "drawer-close",
  desktopEvent: "click", // or mouseover
  width:        280
});
</script>

<body class="drawer"> 
  <button class="drawer-toggle btn">
    <i class="glyphicon glyphicon-align-justify"></i>
  </button>
  <div class="drawer-masta drawer-default">
    <nav class="drawer-nav" role="navigation">
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

##API Methods
####Open
~~~ go
$('#element').drawer('open');
~~~

####Close
~~~ go
$('#element').drawer('close');
~~~

####Destroy
~~~ go
$('#element').drawer('destroy');
~~~ 

##Browsers
- IE 10 +
- Firefox
- opera
- Mac safari
- iOS7 safari
- iOS7 chrome

##License
Released under the MIT license.

