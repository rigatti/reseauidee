(function ($) {
  "use strict";
  (function ($) {
    var $event = $.event,
      $special, resizeTimeout;
      $special = $event.special.debouncedresize = {
        setup: function () {
          $(this).on("resize", $special.handler);
        },
        teardown: function () {
          $(this).off("resize", $special.handler);
        },
        handler: function (event, execAsap) {
          var context = this,
            args = arguments,
            dispatch = function () {
              event.type = "debouncedresize";
              $event.dispatch.apply(context, args);
            };

            if (resizeTimeout) {
              clearTimeout(resizeTimeout);
            }

          execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
        },
      threshold: 150
    };
  })(jQuery);

  //------- OWL carousle init  ---------------
  jQuery(document).ready(function(){
    function init_carousel_owl(){
      $('.init-carousel-owl').each(function(){
        var items = $(this).data('items') ? $(this).data('items') : 5;
        var items_lg = $(this).data('items_lg') ? $(this).data('items_lg') : 4;
        var items_md = $(this).data('items_md') ? $(this).data('items_md') : 3;
        var items_sm = $(this).data('items_sm') ? $(this).data('items_sm') : 2;
        var items_xs = $(this).data('items_xs') ? $(this).data('items_xs') : 1;
        var loop = $(this).data('loop') ? $(this).data('loop') : false;
        var speed = $(this).data('speed') ? $(this).data('speed') : 200;
        var auto_play = $(this).data('auto_play') ? $(this).data('auto_play') : false;
        var auto_play_speed = $(this).data('auto_play_speed') ? $(this).data('auto_play_speed') : false;
        var auto_play_timeout = $(this).data('auto_play_timeout') ? $(this).data('auto_play_timeout') : 1000;
        var auto_play_hover = $(this).data('auto_play_hover') ? $(this).data('auto_play_hover') : true;
        var navigation = $(this).data('navigation') ? $(this).data('navigation') : false;
        var rewind_nav = $(this).data('rewind_nav') ? $(this).data('rewind_nav') : true;
        var pagination = $(this).data('pagination') ? $(this).data('pagination') : false;
        var mouse_drag = $(this).data('mouse_drag') ? $(this).data('mouse_drag') : false;
        var touch_drag = $(this).data('touch_drag') ? $(this).data('touch_drag') : false;
        var fade = $(this).data('fade') ? $(this).data('fade') : false;
        $(this).owlCarousel({
            nav: navigation,
            autoplay: auto_play,
            autoplayTimeout: auto_play_timeout,
            autoplaySpeed: auto_play_speed,
            autoplayHoverPause: auto_play_hover,
            navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
            autoHeight: false,
            loop: loop, 
            dots: pagination,
            rewind: rewind_nav,
            smartSpeed: speed,
            mouseDrag: mouse_drag,
            touchDrag: touch_drag,
            responsive : {
                0 : {
                  items: 1,
                  nav: false
                },
                600 : {
                  items : items_xs,
                  nav: false
                },
                768 : {
                  items : items_sm,
                  nav: false
                },
                992: {
                  items : items_md
                },
                1200: {
                  items: items_lg
                },
                1400: {
                  items: items
                }
            }
        });
     }); 
    }  

    init_carousel_owl();

    $('.portfolio-carousel-center').owlCarousel({
      center: true,
      items: 3,
      loop: true,
      margin: 10,
      smartSpeed: 1000,
      autoplayTimeout: 6000,
      autoplaySpeed: 1000,
      autoplay: true, 
      autoplayHoverPause: true,
      responsive : {
        0 : {
          items: 1,
          nav: false
        },
        600 : {
          items : 2,
          nav: false
        },
        768 : {
          items : 2,
          nav: false
        },
        992: {
          items : 2
        },
        1200: {
          items: 4
        },
        1400: {
          items: 4
        }
      }
    });

    $('.testimonail-carousel-center').owlCarousel({
      center: true,
      items: 3,
      loop: true,
      margin: 10,
      smartSpeed: 1000,
      autoplayTimeout: 6000,
      autoplaySpeed: 1000,
      autoplay: true, 
      autoplayHoverPause: true,
      nav: false,
      responsive : {
        0 : {
          items: 1,
        },
        600 : {
          items : 1,
        },
        768 : {
          items : 1,
          center: false,
        },
        992: {
          items : 2
        },
        1200: {
          items: 2
        },
        1400: {
          items: 2
        }
      }
    });

    $('.header-infos-carousel').owlCarousel({
      items: 3,
      loop: true,
      margin: 20,
      smartSpeed: 1000,
      autoplayTimeout: 6000,
      autoplaySpeed: 1000,
      autoplay: true, 
      autoplayHoverPause: true,
      nav: false,
      dots: false, 
      responsive : {
        0 : {
          items: 1,
        },
        600 : {
          items : 1,
        },
        768 : {
          items : 2,
        },
        992: {
          items : 2
        },
        1200: {
          items: 3
        },
        1400: {
          items: 3
        }
      }
    });

    //===== Gallery ============
    $("a[data-rel^='prettyPhoto[g_gal]']").prettyPhoto({
        animation_speed:'normal',
        social_tools: false,
    });

    //===== Popup video ============
    $('.popup-video').magnificPopup({
      type: 'iframe',
      fixedContentPos: false
    });

  });

  //===== AOS ============
  var wow = new WOW({
    boxClass:     'wow',     
    animateClass: 'animated', 
    offset:       0,          
    mobile:       false,      
    live:         false,      
  });
  wow.init();

  $(document).ready(function () {
    if ($(window).width() > 780) {
      if ( $.fn.jpreLoader ) {
        var $preloader = $( '.js-preloader' );
        $preloader.jpreLoader({
          autoClose: true,
        }, function() {
          $preloader.addClass( 'preloader-done' );
          $( 'body' ).trigger( 'preloader-done' );
          $( window ).trigger( 'resize' );
        });
      }
    }else{
      $('body').removeClass('js-preloader');
    };

    var $container = $('.post-masonry-style');
    $container.imagesLoaded( function(){
      $container.masonry({
        itemSelector : '.item-masory',
        gutterWidth: 0,
        columnWidth: 1,
      }); 
    });

    $('.gva-search-region .icon').on('click',function(e){
      if($(this).parent().hasClass('show')){
        $(this).parent().removeClass('show');
      }else{
        $(this).parent().addClass('show');
      }
      e.stopPropagation();
    })

    /*======Offcavas===============*/
    $('#menu-bar').on('click',function(e){
      if($('.gva-offcanvas-mobile').hasClass('show-view')){
        $(this).removeClass('show-view');
        $('.gva-offcanvas-mobile').removeClass('show-view');
      }else{
        $(this).addClass('show-view');
        $('.gva-offcanvas-mobile').addClass('show-view'); 
      }
      e.stopPropagation();
    })
    $('.close-offcanvas').on('click', function(e){
      $('.gva-offcanvas-mobile').removeClass('show-view');
      $('#menu-bar').removeClass('show-view');
    });

    /*========== Click Show Sub Menu ==========*/
    $('.gva-navigation a').on('click','.nav-plus',function(){
      if($(this).hasClass('nav-minus') == false){
        $(this).parent('a').parent('li').find('> ul').slideDown();
        $(this).addClass('nav-minus');
      }else{
        $(this).parent('a').parent('li').find('> ul').slideUp();
        $(this).removeClass('nav-minus');
      }
      return false;
    });

    /* ============ Isotope ==============*/
    if ( $.fn.isotope ) {
      $( '.isotope-items' ).each(function() {
        var _pid = $(this).data('pid');
        var $el = $( this ),
            $filter = $( '.portfolio-filter a.' + _pid ),
            $loop =  $( this );

        $loop.isotope();

        $loop.imagesLoaded(function() {
          $loop.isotope( 'layout' );
        });

        if ( $filter.length > 0 ) {

          $filter.on( 'click', function( e ) {
            e.preventDefault();
            var $a = $(this);
            $filter.removeClass( 'active' );
            $a.addClass( 'active' );
            $loop.isotope({ filter: $a.data( 'filter' ) });
          });
        };
      });
    };

    //==== Customize =====
    $('.gavias-skins-panel .control-panel').click(function(){
        if($(this).parents('.gavias-skins-panel').hasClass('active')){
            $(this).parents('.gavias-skins-panel').removeClass('active');
        }else $(this).parents('.gavias-skins-panel').addClass('active');
    });

    $('.gavias-skins-panel .layout').click(function(){
        $('body').removeClass('wide-layout').removeClass('boxed');
        $('body').addClass($(this).data('layout'));
        $('.gavias-skins-panel .layout').removeClass('active');
        $(this).addClass('active');
        var $container = $('.post-masonry-style');
        $container.imagesLoaded( function(){
            $container.masonry({
                itemSelector : '.item-masory',
                gutterWidth: 0,
                columnWidth: 1,
            }); 
        });
    });

    /*-------------Milestone Counter----------*/
    jQuery('.milestone-block').each(function() {
      jQuery(this).appear(function() {
        var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
        jQuery(this).find('.milestone-number').countTo({
          from: 0,
          to: $endNum,
          speed: 4000,
          refreshInterval: 60,
          formatter: function (value, options) {
            value = value.toFixed(options.decimals);
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return value;
          }
        });
      },{accX: 0, accY: 0});
    });

    /*----------- Animation Progress Bars --------------------*/
    $("[data-progress-animation]").each(function() {
      var $this = $(this);
      $this.appear(function() {
        var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
        if(delay > 1) $this.css("animation-delay", delay + "ms");
        setTimeout(function() { $this.animate({width: $this.attr("data-progress-animation")}, 800);}, delay);
      }, {accX: 0, accY: -50});
    });
  
    /*------------Pie Charts---------------------------*/
    var pieChartClass = 'pieChart',
      pieChartLoadedClass = 'pie-chart-loaded';
    
    function initPieCharts() {
      var chart = $('.' + pieChartClass);
      chart.each(function() {
        $(this).appear(function() {
          var $this = $(this),
            chartBarColor = ($this.data('bar-color')) ? $this.data('bar-color') : "#F54F36",
            chartBarWidth = ($this.data('bar-width')) ? ($this.data('bar-width')) : 150
          if( !$this.hasClass(pieChartLoadedClass) ) {
            $this.easyPieChart({
              animate: 2000,
              size: chartBarWidth,
              lineWidth: 5,
              scaleColor: false,
              trackColor: "#DCDEE0",
              barColor: chartBarColor,
              lineCap: 'square',
            }).addClass(pieChartLoadedClass);
          }
        });
      });
    }
    initPieCharts();

    // ====== mb_YTPlayer video background ==============================
    if (!jQuery.browser.mobile){
      $(".youtube-bg").mb_YTPlayer();
    }

    // ======Fixed top Menu Bar==========================================
    if($('.gv-sticky-menu').length > 0){
      $('.gv-sticky-menu').each(function(){
        var sticky = new Waypoint.Sticky({
          element: $(this)[0]
        });
      })
    }

    //===== Gallery ============
    $(".lightGallery").lightGallery({
      selector: '.image-item .zoomGallery'
    });

    // ======Text Typer=================================================
    $("[data-typer-targets]", ".rotate-text").typer();
  });


  var animationDimensions = function() {
    var gavias_height = $(window).height();
    $('.bb-container.full-screen').each(function(){
      $(this).css('height', gavias_height);
    });
  }

  $(document).ready(function(){
    if($('.full-screen').length > 0){
      animationDimensions();
    }
  })

  $(window).load(function(){
    $('#gva-preloader').remove();
    if($('.full-screen').length > 0){
      animationDimensions();
    }
  });

  $(window).on("debouncedresize", function(event) {
    if($('.full-screen').length > 0){
     setTimeout(function() {
        animationDimensions();
      }, 50);
    }
  });

  $(document).ready(function(){
  
    $('.quick-side-icon a').click(function(e){
      e.preventDefault();
      if($(this).parents('.quick-side-icon').hasClass('open')){
        $(this).parents('.quick-side-icon').removeClass('open');
      }else{
        $(this).parents('.quick-side-icon').addClass('open');
      }
      if($('.gva-quick-side').hasClass('open')){
        $('.gva-quick-side').removeClass('open');
      }else{
        $('.gva-quick-side').addClass('open');
      }
      if($('.gva-body-wrapper').hasClass('blur')){
        $('.gva-body-wrapper').removeClass('blur');
      }else{
        $('.gva-body-wrapper').addClass('blur');
      }
    });

    $('a.quick-side-close').click(function(e){
      e.preventDefault();
      $('.quick-side-icon').removeClass('open');
      $('.gva-quick-side').removeClass('open');
      $('.gva-body-wrapper').removeClass('blur');
    });

    $( '.cbp-qtrotator' ).each(function(){
      $(this).cbpQTRotator();
    })

    $('.gsc-links .box-content a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1500);
          return false;
        }
      }
    });

    function menu_onepage(){
      var e = $(document).scrollTop();
      $('.gsc-links .box-content a[href*="#"]:not([href="#"])').each(function() {
        var t = $(this);
        var target = $(this.hash);
        var o = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        console.log(o.outerHeight() );
        if(o.offset().top <= e + 10 && o.offset().top + o.outerHeight() > e){
          //$('.gsc-links .box-content a[href*="#"]:not([href="#"])').removeClass("o_active");
          t.addClass("o_active");
        }else{ 
          t.removeClass("o_active");
        }
      })
    }

    menu_onepage();
    $(window).scroll(function(){
      menu_onepage();
    })

    $('.gsc-links a.btn-hidden-links').on('click', function(e){
       e.preventDefault();
      if($(this).hasClass('hidden-menu')){
        $(this).removeClass('hidden-menu');
        $(this).parents('.gsc-links').removeClass('hidden-menu');
      }else{
        $(this).addClass('hidden-menu');
        $(this).parents('.gsc-links').addClass('hidden-menu');
      }
    })
  });

  $(window).load(function(){
    if($('.block-gavias-sliderlayer, .before-help-region').length > 0){
      var html_help = $('.gav-help-region').html();
      $('.gav-help-region').remove();
      html_help = '<div class="help gav-help-region">' + html_help + '</div>';
      if($('.before-help-region').length > 0){
        $('.before-help-region').first().append(html_help);
      }else{
        $('.block-gavias-sliderlayer').first().after(html_help);
      }
      $('.gav-help-region').show();
    }else{
      var html_help = $('.gav-help-region').html();
      $('.gav-help-region').remove();
      html_help = '<div class="help gav-help-region">' + html_help + '</div>';
      $('#page-main-content').first().before(html_help);
      $('.gav-help-region').show();
    }
  });

})(jQuery);