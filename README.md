drawer
===
Drawer is a jQuery plugin for displaying the drawer menu using CSS animations in the event of a trigger. Setting the position can be selected either the right or left. And also supports Responsive design.

![drawer](./src/images/drawer-sample.gif)
![drawer-image](./src/images/drawer-image.jpg)

##example
####Left drawer
http://blivesta.github.io/drawer/

####Left drawer for responsive design
http://blivesta.github.io/drawer/responsive

####Right drawer
http://blivesta.github.io/drawer/right

####Right drawer for responsive design
http://blivesta.github.io/drawer/right-responsive

##Setup
~~~ go
<!-- vendor css -->
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
<!-- drawer css -->
<link rel="stylesheet" href="./dist/css/drawer.min.css">
<!-- Vendor js -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<!-- drawer js -->
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

<body class="drawer drawer-left"> 
  <button class="drawer-toggle btn">
    <i class="glyphicon glyphicon-align-justify"></i>
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
- chrome
- Firefox
- opera
- Mac safari
- iOS7 safari
- iOS7 chrome

##License
Released under the MIT license.

