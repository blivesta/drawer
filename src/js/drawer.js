;(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function($) {
  'use strict';
  var namespace = 'drawer';
  var touches = typeof document.ontouchstart != 'undefined';
  var __ = {
    init: function(options) {
      options = $.extend({
        iscroll: {
          mouseWheel: true,
          preventDefault: false
        },
      }, options);

      __.settings = {
        class: {
          nav: 'drawer-nav',
          toggle: 'drawer-toggle',
          upper: 'drawer-overlay',
          open: 'drawer-open',
          close: 'drawer-close',
          dropdown: 'drawer-dropdown'
        },
      };

      return this.each(function() {
        var _this = this;
        var $this = $(this);
        var data = $this.data(namespace);
        var $upper = $('<div>').addClass(options.upperClass+' '+options.toggleClass);

        if (!data) {
          options = $.extend({}, options);
          $this.data(namespace, {
            options: options
          });
        }

        $this.append($upper);
          var iScroll = new IScroll('.' + __.settings.class.nav, options.iscroll);


          $(document).on('click.' + namespace, '.' + __.settings.class.toggle, function() {
            __.toggle.call(_this);
            return iScroll.refresh();
          });

          $(window).resize(function() {
            __.close.call(_this);
            return iScroll.refresh();
          });

          $('.' + __.settings.class.dropdown)
            .on(options.dropdownEvents.opened + ', ' + options.dropdownEvents.closed, function() {
              return iScroll.refresh();
            });
        }

      }); // end each
    },

    toggle: function(options) {
      var _this = this;
      var $this = $(this);
      options = $this.data(namespace).options;
      var open = $this.hasClass(options.openClass);

      if(open){
        __.close.call(_this);
      } else {
        __.open.call(_this);
      }
    },

    open: function(options) {
      var $this = $(this);
      options = $this.data(namespace).options;

      if (touches) {
        $this.on('touchmove.' + namespace, function(event) {
          event.preventDefault();
        });
      }

      return $this
        .removeClass(__.settings.class.close)
        .addClass(__.settings.class.open)
        .drawerCallback(function(){
          $this.css({
            'overflow': 'hidden'
          }).trigger('drawer.opened');
        });
    },

    close: function(options) {
      var $this = $(this);
      options = $this.data(namespace).options;

      if (touches) $this.off('touchmove.' + namespace);

      return $this
        .removeClass(__.settings.class.open)
        .addClass(__.settings.class.close)
        .drawerCallback(function(){
          $this.css({
            'overflow': 'auto'
          }).trigger('drawer.closed');
        });
    },

    destroy: function() {
      return this.each(function() {
        var $this = $(this);
        $(window).unbind('.' + namespace);
        $this.removeData(namespace);
      });
    }

  };

  $.fn.drawerCallback = function(callback){
    var end = 'transitionend webkitTransitionEnd';
    return this.each(function() {
      var $this = $(this);
      $this.on(end, function(){
        $this.off(end);
        return callback.call(this);
      });
    });
  };

  $.fn.drawer = function(method) {
    if (__[method]) {
      return __[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return __.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.' + namespace);
    }
  };

}));
