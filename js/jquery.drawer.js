/*!
 * drawer v2.0.0
 * 
 * Licensed under MIT
 * Author : blivesta
 * 
 */
(function($) {
  var namespace = "drawer";
  var touches = window.ontouchstart === null;
  var methods = {
    init: function(options) {
      options = $.extend({
        mastaClass: "drawer-masta",
        navClass: "drawer-nav",
        navListClass: "drawer-nav-list",
        overlayClass: "drawer-overlay",
        toggleClass: "drawer-toggle",
        upperClass: "drawer-overlay-upper",
        openClass: "drawer-open",
        closeClass: "drawer-close",
        responsiveClass: "drawer-responsive",
        desktopEvent: "click",
        drawerWidth: 280
      }, options);
      return this.each(function() {
        var _this = this;
        var $this = $(this);
        var data = $this.data(namespace);
        var $toggle = $("." + options.toggleClass);
        var $upper = $("<div>").addClass(options.upperClass);
        if (!data) {
          options = $.extend({}, options);
          $this.data(namespace, {
            options: options
          });
        }
        $this.append($upper);
        methods.resize.call(_this);
        $(window).resize(function() {
          methods.resize.call(_this);
        });
        if (touches) {
          $toggle.bind("touchend." + namespace, function() {
            methods.toggle.apply(_this);
          });
          $upper.bind("touchend." + namespace, function(event) {
            event.preventDefault();
            methods.close.apply(_this);
          });
          $(window).on("scroll." + namespace, function() {
            methods.close.apply(_this);
          });
        } else {
          $toggle.off(options.desktopEvent + "." + namespace).on(options.desktopEvent + "." + namespace, function() {
            methods.toggle.apply(_this);
          });
          $upper.off("click." + namespace).on("click." + namespace, function() {
            methods.close.apply(_this);
          });
        }
      });
    },
    resize: function(options) {
      var _this = this;
      var $this = $(this);
      options = $this.data(namespace).options;
      var windowHeight = $(window).height();
      var $masta = $("." + options.mastaClass);
      var $overlay = $("." + options.overlayClass);
      var overlayHeight = $overlay.height();
      methods.close.call(_this, options);
      $overlay.css({
        "min-height": windowHeight
      });
      if (!touches && $this.hasClass(options.responsiveClass)) {
        $masta.css({
          height: overlayHeight
        });
      }
    },
    toggle: function(options) {
      var _this = this;
      var $this = $(this);
      options = $this.data(namespace).options;
      var open = $this.hasClass(options.openClass);
      if (open) {
        methods.close.call(_this);
      } else {
        methods.open.call(_this);
      }
    },
    open: function(options) {
      var $this = $(this);
      options = $this.data(namespace).options;
      if (touches) {
        event.preventDefault();
      }
      $this.removeClass(options.closeClass).addClass(options.openClass);
      var duration = $("." + options.overlayClass).css("transition-duration").replace(/s/g, "") * 1e3;
      setTimeout(function() {
        $this.css({
          overflow: "hidden"
        });
        var windowWidth = $(window).width();
        var upperWidth = windowWidth - options.drawerWidth;
        $("." + options.upperClass).css({
          width: upperWidth,
          display: "block"
        });
      }, duration);
    },
    close: function(options) {
      var $this = $(this);
      options = $this.data(namespace).options;
      $this.removeClass(options.openClass).addClass(options.closeClass);
      var duration = $("." + options.overlayClass).css("transition-duration").replace(/s/g, "") * 1e3;
      setTimeout(function() {
        $this.css({
          overflow: "auto"
        });
        $("." + options.upperClass).css({
          display: "none"
        });
      }, duration);
    },
    destroy: function() {
      return this.each(function() {
        var $this = $(this);
        $(window).unbind("." + namespace);
        $this.removeData(namespace);
      });
    }
  };
  $.fn.drawer = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error("Method " + method + " does not exist on jQuery." + namespace);
    }
  };
})(jQuery);