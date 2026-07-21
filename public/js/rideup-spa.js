(function () {
  "use strict";

  window.RideupSPA = window.RideupSPA || {};

  window.RideupSPA.cleanup = function () {
    try {
      // Destroy Swiper instances
      document.querySelectorAll(".swiper").forEach(function (el) {
        if (el && el.swiper && typeof el.swiper.destroy === "function") {
          el.swiper.destroy(true, true);
        }
      });
    } catch (e) {}

    try {
      // Kill GSAP ScrollTriggers
      if (window.ScrollTrigger && typeof window.ScrollTrigger.getAll === "function") {
        window.ScrollTrigger.getAll().forEach(function (t) { t.kill(); });
      }
    } catch (e) {}

    try {
      // Remove SlickNav menus created previously
      var $ = window.jQuery;
      if ($) {
        $(".slicknav_menu").remove();
      }
    } catch (e) {}

    try {
      // Close any magnific popups
      var $ = window.jQuery;
      if ($ && $.magnificPopup) {
        $.magnificPopup.close();
      }
    } catch (e) {}
  };

  window.RideupSPA.init = function ($) {

    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$(".preloader").fadeOut(600);
	$window.off('load.rideup').on('load.rideup', function () { $(".preloader").fadeOut(600); });

	/* Sticky Header */	
	if($('.active-sticky-header').length){
		$window.off('resize.rideup').on('resize.rideup', function(){
			setHeaderHeight();
		});

		function setHeaderHeight(){
	 		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
		}	
	
		$window.on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header .header-sticky').outerHeight()
			$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}	
	
	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});

	if($("a[href='#top']").length){
		$(document).off('click.rideupTop').on('click.rideupTop', "a[href='#top']", function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}

	/* Hero Slider Layout JS */
	const hero_slider_layout = new Swiper('.hero-slider-layout .swiper', {
		effect: 'fade',
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: '.hero-pagination',
			clickable: true,
		},
	});

	/* Services Slider JS — replaced by pure-CSS marquee (old Swiper build's autoplay never chains) */
	if ($('.company-supports-slider').length) {
		$('.company-supports-slider .swiper').addClass('cs-marquee');
	}

	/* testimonial Slider JS */
	if ($('.testimonial-slider').length) {
		const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.testimonial-button-next',
				prevEl: '.testimonial-button-prev',
			},
			breakpoints: {
				768:{
					slidesPerView: 1,
				},
				991:{
					slidesPerView: 1,
				}
			}
		});
	}

	/* Skill Bar */
	if ($('.skills-progress-bar').length) {
		$('.skills-progress-bar').waypoint(function() {
			$('.skillbar').each(function() {
				$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '70%'
		});
	}

	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}

	/* Init Counter (guard against double-binding, which crashes counterup) */
	var $counters = $('.counter').not('[data-counted]');
	if ($counters.length) {
		$counters.attr('data-counted', '1').counterUp({ delay: 6, time: 3000 });
	}

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	if ($('.text-anime-style-1').length) {
		let staggerAmount 	= 0.05,
			translateXValue = 0,
			delayValue 		= 0.5,
		   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
				duration: 1,
				delay: delayValue,
				x: 20,
				autoAlpha: 0,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
				});
		});		
	}
	
	if ($('.text-anime-style-2').length) {				
		let	 staggerAmount 		= 0.03,
			 translateXValue	= 20,
			 delayValue 		= 0.1,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});		
	}
	
	if ($('.text-anime-style-3').length) {		
		let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
		
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 90%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 991))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* Zoom Gallery screenshot */
	$('.gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Contact form validation */
	var $contactform = $("#contactForm");
	$contactform.validator({focus: false}).off('submit.rideup').on('submit.rideup', function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Ajax call to submit form */
		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: $contactform.serialize(),
			success : function(text){
				if (text === "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h4 text-success";
		} else {
			var msgClasses = "h4 text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */

	/* Animated Wow Js */	
	try {
		new WOW({ live: false, offset: 0, mobile: true }).init();
	} catch (e) {}
	/* Failsafe: never leave .wow content permanently hidden (below-fold / init race) */
	(function () {
		var reveal = function () {
			document.querySelectorAll('.wow').forEach(function (el) {
				var s = el.style;
				if (s.visibility === 'hidden' || getComputedStyle(el).visibility === 'hidden') {
					s.visibility = 'visible';
					s.animationName = s.animationName || 'none';
					s.opacity = '1';
				}
			});
		};
		setTimeout(reveal, 1500);
		window.addEventListener('load', function () { setTimeout(reveal, 800); });
	})();

	/* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}
	

  };

  window.RideupSPA.run = function () {
    try {
      var $ = window.jQuery;
      if (!$) return;
      window.RideupSPA.cleanup();
      window.RideupSPA.init($);
    } catch (e) {
      try { console.warn(e); } catch (_) {}
    }
  };
})();


/* KF redesigned header */
(function kfHeaderInit() {
  function init() {
    var header = document.getElementById('kfHeader');
    if (!header || header.dataset.kfInit) return;
    header.dataset.kfInit = '1';
    var burger = document.getElementById('kfBurger');
    var nav = document.getElementById('kfNav');
    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = nav.classList.toggle('kf-open');
        burger.classList.toggle('kf-open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
    }
    header.querySelectorAll('.kf-sub-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var sub = btn.parentElement.querySelector('.kf-sub');
        if (!sub) return;
        var open = sub.classList.toggle('kf-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    // active link
    var page = (location.pathname.split('/').pop() || 'index.html');
    header.querySelectorAll('.kf-menu a').forEach(function (a) {
      if (a.getAttribute('href') === page) a.classList.add('kf-active');
    });
    // scroll shadow
    var onScroll = function () { header.classList.toggle('kf-scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


/* KF mobile menu (Greenlands-style full-screen overlay) */
(function kfMobileMenuInit() {
  function build() {
    if (document.querySelector('.kfm-overlay')) return;
    var menu = document.getElementById('menu');
    var navbar = document.querySelector('.main-header .navbar .container');
    if (!menu || !navbar) return;

    var burger = document.createElement('button');
    burger.className = 'kfm-burger';
    burger.setAttribute('aria-label', 'Open menu');
    burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    navbar.appendChild(burger);

    var overlay = document.createElement('div');
    overlay.className = 'kfm-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Mobile navigation');

    var links = '';
    menu.querySelectorAll(':scope > li').forEach(function (li) {
      var a = li.querySelector(':scope > a');
      var sub = li.querySelector(':scope > ul');
      links += '<li><div class="kfm-row"><a href="' + a.getAttribute('href') + '">' + a.textContent.trim() + '</a>';
      if (sub) links += '<button class="kfm-subtoggle" aria-expanded="false" aria-label="Toggle submenu"><i class="fa-solid fa-chevron-down"></i></button>';
      links += '</div>';
      if (sub) {
        links += '<ul class="kfm-sub">';
        sub.querySelectorAll('a').forEach(function (sa) {
          links += '<li><a href="' + sa.getAttribute('href') + '">' + sa.textContent.trim() + '</a></li>';
        });
        links += '</ul>';
      }
      links += '</li>';
    });

    overlay.innerHTML =
      '<div class="kfm-top">' +
        '<img alt="Kings Farm Equestrian" src="images/kings_farm/14.png" />' +
        '<button class="kfm-close" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>' +
      '</div>' +
      '<div class="kfm-body">' +
        '<ul class="kfm-links">' + links + '</ul>' +
        '<div class="kfm-ctas">' +
          '<a class="kfm-btn kfm-btn-primary" href="contact.html">Book a Ride <i class="fa-solid fa-arrow-right"></i></a>' +
          '<a class="kfm-btn kfm-btn-ghost" href="tel:+919980551098"><i class="fa-solid fa-phone"></i> Call +91-9980551098</a>' +
        '</div>' +
        '<div class="kfm-contact">' +
          '<a href="tel:+919980551098">+91-9980551098</a>' +
          '<a href="mailto:kfkingsfarm@gmail.com">kfkingsfarm@gmail.com</a>' +
          '<span>151 - 155, Kodiyalam Rd, Sokkarasanapalli, Tamil Nadu 635103, India</span>' +
        '</div>' +
        '<div class="kfm-social">' +
          '<a aria-label="Instagram" href="https://www.instagram.com/equinekings/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>' +
          '<a aria-label="Facebook" href="https://www.facebook.com/equinekings/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a>' +
          '<a aria-label="YouTube" href="https://www.youtube.com/channel/UC5xEJd5DLwyW42yQNbDwubQ" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    function setOpen(open) {
      overlay.classList.toggle('kfm-open', open);
      document.body.classList.toggle('kfm-locked', open);
    }
    burger.addEventListener('click', function () { setOpen(true); });
    overlay.querySelector('.kfm-close').addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    overlay.querySelectorAll('.kfm-subtoggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sub = btn.closest('li').querySelector('.kfm-sub');
        var open = sub.classList.toggle('kfm-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    var page = (location.pathname.split('/').pop() || 'index.html');
    overlay.querySelectorAll('.kfm-links a').forEach(function (a) {
      if (a.getAttribute('href') === page) a.classList.add('kfm-active');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
  // SPA page swaps: rebuild if header re-rendered
  document.addEventListener('kf:pageload', build);
})();


/* KF photo slider */
(function kfPhotoSliderInit() {
  function init() {
    var el = document.querySelector('.kf-photo-slider .swiper');
    if (!el || el.kfSwiper || typeof Swiper === 'undefined') return;
    el.kfSwiper = new Swiper(el, {
      loop: true,
      speed: 800,
      autoplay: { delay: 2800, disableOnInteraction: false },
      spaceBetween: 24,
      slidesPerView: 1,
      breakpoints: { 576: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
      pagination: { el: '.kf-photo-slider .swiper-pagination', clickable: true },
      navigation: { nextEl: '.kf-photo-next', prevEl: '.kf-photo-prev' }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  document.addEventListener('kf:pageload', init);
  window.addEventListener('load', init);
})();





/* KF affiliations marquee (rAF, seamless loop, pause on hover, drag/swipe) */
(function kfAffMarqueeInit() {
  function setup(mq) {
    if (mq.dataset.kfInit) return;
    mq.dataset.kfInit = '1';
    var track = mq.querySelector('.kf-aff-track');
    if (!track) return;
    var originals = Array.prototype.slice.call(track.children);
    function widthOfSet() {
      var last = originals[originals.length - 1];
      return last.offsetLeft + last.offsetWidth - originals[0].offsetLeft + parseFloat(getComputedStyle(track).gap || 0);
    }
    // duplicate until at least 2x viewport width
    var guard = 0;
    while (track.scrollWidth < mq.offsetWidth * 2 + widthOfSet() && guard++ < 6) {
      originals.forEach(function (n) { track.appendChild(n.cloneNode(true)); });
    }
    var setW = widthOfSet();
    var offset = 0, paused = false, dragging = false, startX = 0, startOffset = 0;
    var SPEED = 0.6; // px per frame ~36px/s
    function frame() {
      if (!paused && !dragging) {
        offset += SPEED;
        if (offset >= setW) offset -= setW;
        track.style.transform = 'translateX(' + (-offset) + 'px)';
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
    mq.addEventListener('mouseenter', function () { paused = true; });
    mq.addEventListener('mouseleave', function () { paused = false; });
    mq.addEventListener('pointerdown', function (e) {
      dragging = true; startX = e.clientX; startOffset = offset;
      mq.classList.add('kf-dragging');
      mq.setPointerCapture(e.pointerId);
    });
    mq.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      offset = startOffset - (e.clientX - startX);
      while (offset < 0) offset += setW;
      while (offset >= setW) offset -= setW;
      track.style.transform = 'translateX(' + (-offset) + 'px)';
    });
    function endDrag() { dragging = false; mq.classList.remove('kf-dragging'); }
    mq.addEventListener('pointerup', endDrag);
    mq.addEventListener('pointercancel', endDrag);
  }
  function init() { document.querySelectorAll('.kf-aff-marquee').forEach(setup); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.addEventListener('load', init);
  document.addEventListener('kf:pageload', init);
})();

/* wf-reveal-timer: ultimate visibility guarantee */
setTimeout(function(){ document.documentElement.classList.add('wf-reveal'); }, 2500);
