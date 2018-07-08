(function() {

	'use strict';

	var shareMenu = function() {
		$(".Share").click(function() {
			$(".share-wrap").fadeToggle("slow");
		});

		$(".Donate").click(function() {
			$(".panel-reward").fadeToggle("slow");
		});
		
		$('.qrcode').each(function(index, el) {
			var url = $(this).data('url');
			if ($.fn.qrcode) {
				$(this).qrcode({
					text: url,
					width: 150,
					height: 150,
				});
			}
		});
	}
	
	var topStart = function() {
		$('#top-Start').click(function() {
			$('html,body').animate({
				scrollTop: $('#kratos-blog').offset().top
			}, 1000);
		});
	};

	var toSearch = function(){
        $('.search-box').on("click",function(e){
            $("#searchform").animate({width:"200px"},200),
            $("#searchform input").css('display','block');
            $(document).one("click", function(){
                $("#searchform").animate({width:"0"},100),
                $("#searchform input").hide();
            });
            e.stopPropagation();
        });
        $('#searchform').on("click",function(e){e.stopPropagation();})
    }
	
	var OwOcfg = function(){
        if($("#comment-form").height()){
            var OwO_demo = new OwO({
                logo:'OωO表情',
                container:document.getElementsByClassName('OwO')[0],
                target:document.getElementsByClassName('OwO')[0],
                api:xb.thome+'/static/js/OwO.json',
                position:'down',
                width:'90%',
                maxHeight:'250px'
            });
        }
    }
	
	var isiPad = function() {
		return (navigator.platform.indexOf("iPad") != -1);
	};
	var isiPhone = function() {
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};

	var mainMenu = function() {
		$('#kratos-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});
	};

	var parallax = function() {
		$(window).stellar();
	};

	var offcanvas = function() {
		var $clone = $('#kratos-menu-wrap').clone();
		$clone.attr({
			'id': 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class': '',
			'id': ''
		});
		$('#kratos-page').prepend($clone);
		$('.js-kratos-nav-toggle').on('click', function() {
			if ($('body').hasClass('kratos-offcanvas')) {
				$('body').removeClass('kratos-offcanvas');
			} else {
				$('body').addClass('kratos-offcanvas');
			}
		});
		$('#offcanvas-menu').css('height', $(window).height());
		$(window).resize(function() {
			var w = $(window);
			$('#offcanvas-menu').css('height', w.height());
			if (w.width() > 769) {
				if ($('body').hasClass('kratos-offcanvas')) {
					$('body').removeClass('kratos-offcanvas');
				}
			}
		});
	}

	var sidebaraffix = function() {
		if ($("#main").height() > $("#sidebar").height()) {
			var footerHeight = 0;
			if ($('#page-footer').length > 0) {
				footerHeight = $('#page-footer').outerHeight(true);
			}
			$('#sidebar').affix({
				offset: {
					top: $('#sidebar').offset().top - 30,
					bottom: $('#footer').outerHeight(true) + footerHeight + 6
				}
			});
		}
	}

	var mobileMenuOutsideClick = function() {
		$(document).click(function(e) {
			var container = $("#offcanvas-menu, .js-kratos-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('kratos-offcanvas')) {
					$('body').removeClass('kratos-offcanvas');
				}
			}
		});
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint(function(direction) {
			if (direction === 'down' && !$(this.element).hasClass('animated')) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function() {
					$('body .animate-box.item-animate').each(function(k) {
						var el = $(this);
						setTimeout(function() {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});
				}, 100);
			}
		}, {
			offset: '85%'
		});
	};

	var showThumb = function(){
		(function ($) {
			$.extend({
				tipsBox: function (options) {
					options = $.extend({
						obj: null,
						str: "+1",
						startSize: "10px",
						endSize: "25px",
						interval: 800,
						color: "red",
						callback: function () { }
					}, options);
					$("body").append("<span class='num'>" + options.str + "</span>");
					var box = $(".num");
					var left = options.obj.offset().left + options.obj.width() / 2;
					var top = options.obj.offset().top - options.obj.height();
					box.css({
						"position": "absolute",
						"left": left - 12 + "px",
						"top": top + 9 + "px",
						"z-index": 9999,
						"font-size": options.startSize,
						"line-height": options.endSize,
						"color": options.color
					});
					box.animate({
						"font-size": options.endSize,
						"opacity": "0",
						"top": top - parseInt(options.endSize) + "px"
					}, options.interval, function () {
						box.remove();
						options.callback();
					});
				}
			});
		})(jQuery);

	}

	var showlove = function() {
			$.fn.postLike = function() {
				if ($(this).hasClass('done')) {
					layer.msg('感谢您的支持');
					return false;
				}
			};
			$(document).on("click", ".Love", function() {
				$(this).postLike();
			});
		}

	var gotop = function(){
        $('.gotop-box').on('click',function(event){
            event.preventDefault();
            $('html, body').animate({
                scrollTop:$('html').offset().top
            },500);
            return false;
        });
        $(window).scroll(function(){
            var $win = $(window);
            if ($win.scrollTop()>200){
                $('.gotop-box').addClass('active');
            }else{
                $('.gotop-box').removeClass('active');
            }
        });
    }
	
	var weixinpic = function() {
		$("#weixin-img").mouseout(function(){
	        $("#weixin-pic")[0].style.display = 'none';
	    })
		$("#weixin-img").mouseover(function(){
	        $("#weixin-pic")[0].style.display = 'block';
	    })
	}

	var showPhotos = function(){
        layer.photos({
          photos:'.kratos-post-content',
          anim: 0
        });
    }
	
	var copyright = function() {
		console.log("╔╦╗┬ ┬┌─┐┌┬┐┌─┐  ╦╔═┬─┐┌─┐┌┬┐┌─┐┌─┐  ╔╦╗┌─┐┌┬┐┌─┐  ╔╗ ┬ ┬  ╦  ╦┌┬┐┬─┐┌─┐┬┌─┐\n ║ ├─┤├┤ │││├┤   ╠╩╗├┬┘├─┤ │ │ │└─┐  ║║║├─┤ ││├┤   ╠╩╗└┬┘  ╚╗╔╝ │ ├┬┘│ ││└─┐\n ╩ ┴ ┴└─┘┴ ┴└─┘  ╩ ╩┴└─┴ ┴ ┴ └─┘└─┘  ╩ ╩┴ ┴─┴┘└─┘  ╚═╝ ┴    ╚╝  ┴ ┴└─└─┘┴└─┘\n");
		console.log("Tale-Kratos 主题下载：https://github.com/zoujiayu/tale-theme-Kratos");
		console.log("--------THEME KRATOS MADE BY VTROIS TRANSPLANT BY MOONRIVER--------");
	}

	$(function() {
		topStart();
		gotop();
		showPhotos();
		mainMenu();
		shareMenu();
		parallax();
		offcanvas();
		showThumb();
		showlove();
		toSearch();
		OwOcfg();
		weixinpic();
		mobileMenuOutsideClick();
		contentWayPoint();
		copyright();
	});
}());