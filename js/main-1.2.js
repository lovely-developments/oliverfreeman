

  // TILT

  $('.of-logo').tilt({
  	maxTilt: 20,
  	perspective: 1500,
  	speed: 2000,
  	reset: true
  });

  $('a.back-home span').tilt({
    maxTilt: 20,
    perspective: 1500,
    speed: 2000,
    reset: true
  });



  // NAV

  $(document).ready(function() {
  	$('nav button').click(function() {
  		$('body').toggleClass('open');
  	});
  	$('.clickself, nav a').click(function() {
  		$('body').removeClass('open');
  	});
  });

  // WAYPOINTS 

  var waypoints = $('section.of--welcome').waypoint({
      handler: function(direction) {
        $('nav ul li a').removeClass('highlight');
      },
      offset: '50%' 
  })
  var waypoints = $('section.of--welcome').waypoint({
    handler: function(direction) {
      $(this.element).addClass('open');
    },
    offset: '20%'
  })
  var waypoints = $('section.of--recent').waypoint({
      handler: function(direction) {
        $('nav ul li:nth-child(3) a').addClass('highlight');
        $('nav ul li a').not('nav ul li:nth-child(3) a').removeClass('highlight');
        $(this.element).toggleClass('open');
      },
      offset: '50%' 
  })
  var waypoints = $('section.of--featured').waypoint({
      handler: function(direction) {
        $('nav ul li:nth-child(2) a').addClass('highlight');
        $('nav ul li a').not('nav ul li:nth-child(2) a').removeClass('highlight');
        $(this.element).toggleClass('open');
      },
      offset: '50%' 
  })
  var waypoints = $('section.of--skills').waypoint({
      handler: function(direction) {
        $('nav ul li:nth-child(4) a').addClass('highlight');
        $('nav ul li a').not('nav ul li:nth-child(4) a').removeClass('highlight');
      },
      offset: '50%' 
  })
  var waypoints = $('section.of--lovely').waypoint({
      handler: function(direction) {
        $('nav ul li:nth-child(1) a').addClass('highlight');
        $('nav ul li a').not('nav ul li:nth-child(1) a').removeClass('highlight');
        $(this.element).toggleClass('open');
      },
      offset: '50%' 
  })
  var waypoints = $('section.of--more').waypoint({
      handler: function(direction) {
        $('nav ul li:nth-child(5) a').toggleClass('highlight');
        $('nav ul li a').not('nav ul li:nth-child(5) a').removeClass('highlight');
        $(this.element).toggleClass('open');
        $('.more-balloon-text').addClass('open');
      },
      offset: '50%' 
  })
  var waypoints = $('section.of--about').waypoint({
      handler: function(direction) {
        $('nav ul li:nth-child(6) a').addClass('highlight');
        $('nav ul li a').not('nav ul li:nth-child(6) a').removeClass('highlight');
      },
      offset: '50%' 
  })


  var waypoints = $('.skills').waypoint({
    handler: function(direction) {
      $('.skills').toggleClass('open');
      $('.wireframes').toggleClass('open');
      $('.code').toggleClass('open');
      $('.seo').toggleClass('open');
    },
    offset: '50%' 
  })

var waypoints = $('.breaker').waypoint({
    handler: function(direction) {
      $('.screen').toggleClass('scrollable');
    },
    offset: '30%' 
})


// DIRECTIONAL 

var $things = $('.skills');

$things.waypoint(function(direction) {
  if (direction === 'down') {
    $('.design').removeClass('close').addClass('open');
    $('.code').removeClass('close').addClass('open');
    $('.publishing').removeClass('close').addClass('open');
    $('.seo').removeClass('close').addClass('open');
  }
}, {
  offset: '50%'
});

$things.waypoint(function(direction) {
  if (direction === 'up') {
    $('.design').removeClass('open').addClass('close');
    $('.code').removeClass('open').addClass('close');
    $('.publishing').removeClass('open').addClass('close');
    $('.seo').removeClass('open').addClass('close');
  }
}, {
  offset: '50%'
});


// MORE TILES ON MOBILE 

// MORE TILES

var waypoints = $('.more-1').waypoint({
  handler: function(direction) {
    $('.more-1').toggleClass('active');
  },
  offset: '50%' 
})
var waypoints = $('.more-2').waypoint({
  handler: function(direction) {
    $('.more-2').toggleClass('active');
  },
  offset: '50%' 
})
var waypoints = $('.more-3').waypoint({
  handler: function(direction) {
    $('.more-3').toggleClass('active');
  },
  offset: '50%' 
})
var waypoints = $('.more-4').waypoint({
  handler: function(direction) {
    $('.more-4').toggleClass('active');
  },
  offset: '50%' 
})

if ($(window).width() <= 640) {
$('.bg .inner').click(function() {
  $(this).toggleClass('mobUnveil');
});
}


  skrollr.init({forceHeight: false});
    if ($(window).width() <= 640) {
      skrollr.init().destroy();
    }

  var scroll = new SmoothScroll('a[href*="#"]');
