// If window height greater than 568 (iPhone 5/s) and less than or equal to 736 (iPhone 6 Plus) center numbers in menu between header/footer.
// If height resized to greater than 568 and less than or equal to 736 center numbers, otherwise return to top.

$(document).ready(function() {
	if($(window).height() > 568 && $(window).height() <= 736) {
		$("#menu-wrapper-child").removeClass().addClass("menu-wrapper-child-fs");
	}
	window.addEventListener("resize", function() {
		if($(window).height() > 568 && $(window).height() <= 736) {
			$("#menu-wrapper-child").removeClass().addClass("menu-wrapper-child-fs");
		}
		else {
			$("#menu-wrapper-child").removeClass("menu-wrapper-child-fs");
		}
	}, true);
});

// 	$(document).ready(function() {
	// if ($('input:radio[name="status-bar-option"]').val() == 'on'){
		// if($(window).height() > 568 && $(window).height() <= 736) {
			// // $("#menu-wrapper-parent").addClass("menu-wrapper-parent");
			// $("#menu-wrapper-child").removeClass().addClass("menu-wrapper-child-sb");
		// }
		// window.addEventListener("resize", function() {
			// if($(window).height() > 568 && $(window).height() <= 736) {
				// // $("#menu-wrapper-parent").addClass("menu-wrapper-parent");
				// $("#menu-wrapper-child").removeClass().addClass("menu-wrapper-child-sb");
			// }
			// else {
				// // $("#menu-wrapper-parent").removeClass("menu-wrapper-parent");
				// $("#menu-wrapper-child").removeClass("menu-wrapper-child-sb");
			// }
		// }, true);
	// }
	// else {
		// if($(window).height() > 568 && $(window).height() <= 736) {
			// // $("#menu-wrapper-parent").addClass("menu-wrapper-parent");
			// $("#menu-wrapper-child").removeClass().addClass("menu-wrapper-child-fs");
		// }
		// window.addEventListener("resize", function() {
			// if($(window).height() > 568 && $(window).height() <= 736) {
				// // $("#menu-wrapper-parent").addClass("menu-wrapper-parent");
				// $("#menu-wrapper-child").removeClass().addClass("menu-wrapper-child-fs");
			// }
			// else {
				// // $("#menu-wrapper-parent").removeClass("menu-wrapper-parent");
				// $("#menu-wrapper-child").removeClass("menu-wrapper-child-fs");
			// }
		// }, true);
	// }
// });

// If window height greater than 736 (iPhone 6 Plus) hide fixed footer and show floating footer, otherwise show fixed footer and hide floating footer.
// Listen for resize and carry out same function.

$(document).ready(function() {
	if($(window).height() > 736) {
		$('.menu-footer').hide();
		$('.floating-footer').show();
	}
	else {
		$('.menu-footer').show();
		$('.floating-footer').hide();
	}
	window.addEventListener("resize", function() {
		if($(window).height() > 736) {
			$('.menu-footer').hide();
			$('.floating-footer').show();
		}
		else {
			$('.menu-footer').show();
			$('.floating-footer').hide();
		}
	}, true);
});

// If in standalone mode show status bar radio button, otherwise hide.

$(document).ready(function() {
	if (window.navigator.standalone == true) {
		$('#sb-button').show();
	}
	else {
		$('#sb-button').hide();
	}
});

// If in standalone mode, when status bar radio button changed if 'on' selected and device is in portrait mode replace all classes ending in '-fs' suffix with '-sb' suffix and trigger resize to refresh page, otherwise do opposite

$(document).ready(function() {
	if (window.navigator.standalone == true) {
		$('input:radio[name="status-bar-option"]').change(function(){
			if($(this).val() == 'on'){
				if(window.orientation == 0) {
					$(document.body).find('div, a').each(function (i) {
						var c = $(this).attr('class');
						if(c !== undefined){
							c = c.replace(/-fs/g,'-sb')
							$(this).removeClass().addClass(c);
							$(window).trigger('resize')
						}
					});
				}
			}
			else {
				$(document.body).find('div, a').each(function (i) {
					var c = $(this).attr('class');
					if(c !== undefined){
						c = c.replace(/-sb/g,'-fs')
						$(this).removeClass().addClass(c);
						$(window).trigger('resize')
					}
				});
			}
		});
	}
});

// If in standalone mode and status bar option checked, when rotated to landscape hide status bar and replace when rotated to portrait

$(document).ready(function() {
	if (window.navigator.standalone == true) {
		$(window).on("orientationchange",function(){
			 if ($('input[name=status-bar-option]:checked').val() == "on"){
				if(window.orientation == 90 || window.orientation == -90) {
					$(document.body).find('div, a').each(function (i) {
						var c = $(this).attr('class');
						if(c !== undefined){
							c = c.replace(/-sb/g,'-fs')
							$(this).removeClass().addClass(c);
							$(window).trigger('resize')
						}
					});
				}
				else {
					$(document.body).find('div, a').each(function (i) {
						var c = $(this).attr('class');
						if(c !== undefined){
							c = c.replace(/-fs/g,'-sb')
							$(this).removeClass().addClass(c);
							$(window).trigger('resize')
						}
					});
				}
			}
		});
	}
});

// When status bar option changed save value to local storage

$(document).ready( function(event){
	$('input:radio[name=status-bar-option]').change(function(){
		localStorage.statusbar = $('input[name=status-bar-option]:checked').val()
	});
});

// If in standalone mode and status bar option saved to local storage is 'on' restore option on restart

$(document).ready( function(event){
	if (window.navigator.standalone == true) {
		if (localStorage.statusbar  == "on") {
			$('#status-bar-option-a').prop('checked',true);
			// $('#status-bar-option-a').attr("checked", "checked");
			// $('#status-bar-option-b').removeAttr("checked");
			// $('#status-bar-option-a').next('label').addClass("checked");
			// $('#status-bar-option-a').next('label').addClass("active");
			// $('#status-bar-option-a-label').addClass("checked");
			// $('#status-bar-option-a-label').addClass("active");
			// $('#status-bar-option-b').prop('checked',false);
			// $('#status-bar-option-b').next('label').removeClass("checked");
			// $('#status-bar-option-b').next('label').addClass("active");
			// $('#status-bar-option-b-label').removeClass("checked");
			// $('#status-bar-option-b-label').removeClass("active");
			if(window.orientation == 0) {
				$(document.body).find('div, a').each(function (i) {
					var c = $(this).attr('class');
					if(c !== undefined){
						c = c.replace(/-fs/g,'-sb')
						$(this).removeClass().addClass(c);
						$(window).trigger('resize')
					}
				});
			}
		}
		else {
			$('#status-bar-option-b').prop('checked',true);
			// $('#status-bar-option-b').attr("checked", "checked");
		}
	}
});

// Hide all book titles by default. 
// When number clicked if title hidden show title and hide any others, otherwise open book page. 
// When title clicked hide all titles.

$(document).ready(function() {
	$('.book-1-title-wrapper').hide();
	$('.book-1-number-wrapper').click(function() {
		if($('.book-1-title-wrapper').is(':hidden')){
			$('.book-1-title-wrapper').fadeToggle("linear");
			$('.book-2-title-wrapper').hide();
			$('.book-3-title-wrapper').hide();
			$('.book-4-title-wrapper').hide();
			$('.book-5-title-wrapper').hide();
			$('.book-6-title-wrapper').hide();
			$('.book-7-title-wrapper').hide();
		}
		else {
			location.href='#book1';
			$('.book-1-title-wrapper').fadeToggle("linear");
		}
	});
	$('.book-2-title-wrapper').hide();
	$('.book-2-number-wrapper').click(function() {
		if($('.book-2-title-wrapper').is(':hidden')){
			$('.book-2-title-wrapper').fadeToggle("linear");
			$('.book-1-title-wrapper').hide();
			$('.book-3-title-wrapper').hide();
			$('.book-4-title-wrapper').hide();
			$('.book-5-title-wrapper').hide();
			$('.book-6-title-wrapper').hide();
			$('.book-7-title-wrapper').hide();
		}
		else {
			location.href='#book2';
			$('.book-2-title-wrapper').fadeToggle("linear");
		}
	}); 
	$('.book-3-title-wrapper').hide();
	$('.book-3-number-wrapper').click(function() {
		if($('.book-3-title-wrapper').is(':hidden')){
			$('.book-3-title-wrapper').fadeToggle("linear");
			$('.book-1-title-wrapper').hide();
			$('.book-2-title-wrapper').hide();
			$('.book-4-title-wrapper').hide();
			$('.book-5-title-wrapper').hide();
			$('.book-6-title-wrapper').hide();
			$('.book-7-title-wrapper').hide();
		}
		else {
			location.href='#book3';
			$('.book-3-title-wrapper').fadeToggle("linear");
		}
	}); 
	$('.book-4-title-wrapper').hide();
	$('.book-4-number-wrapper').click(function() {
		if($('.book-4-title-wrapper').is(':hidden')){
			$('.book-4-title-wrapper').fadeToggle("linear");
			$('.book-1-title-wrapper').hide();
			$('.book-2-title-wrapper').hide();
			$('.book-3-title-wrapper').hide();
			$('.book-5-title-wrapper').hide();
			$('.book-6-title-wrapper').hide();
			$('.book-7-title-wrapper').hide();
		}
		else {
			location.href='#book4';
			$('.book-4-title-wrapper').fadeToggle("linear");
		}
	}); 
	$('.book-5-title-wrapper').hide();
	$('.book-5-number-wrapper').click(function() {
		if($('.book-5-title-wrapper').is(':hidden')){
			$('.book-5-title-wrapper').fadeToggle("linear");
			$('.book-1-title-wrapper').hide();
			$('.book-2-title-wrapper').hide();
			$('.book-3-title-wrapper').hide();
			$('.book-4-title-wrapper').hide();
			$('.book-6-title-wrapper').hide();
			$('.book-7-title-wrapper').hide();
		}
		else {
			location.href='#book5';
			$('.book-5-title-wrapper').fadeToggle("linear");
		}
	}); 
	$('.book-6-title-wrapper').hide();
	$('.book-6-number-wrapper').click(function() {
		if($('.book-6-title-wrapper').is(':hidden')){
			$('.book-6-title-wrapper').fadeToggle("linear");
			$('.book-1-title-wrapper').hide();
			$('.book-2-title-wrapper').hide();
			$('.book-3-title-wrapper').hide();
			$('.book-4-title-wrapper').hide();
			$('.book-5-title-wrapper').hide();
			$('.book-7-title-wrapper').hide();
		}
		else {
			location.href='#book6';
			$('.book-6-title-wrapper').fadeToggle("linear");
		}
	}); 
	$('.book-7-title-wrapper').hide();
	$('.book-7-number-wrapper').click(function() {
		if($('.book-7-title-wrapper').is(':hidden')){
			$('.book-7-title-wrapper').fadeToggle("linear");
			$('.book-1-title-wrapper').hide();
			$('.book-2-title-wrapper').hide();
			$('.book-3-title-wrapper').hide();
			$('.book-4-title-wrapper').hide();
			$('.book-5-title-wrapper').hide();
			$('.book-6-title-wrapper').hide();
		}
		else {
			location.href='#book7';
			$('.book-7-title-wrapper').fadeToggle("linear");
		}
	}); 
	$('.book-title').click(function() {
		$('.book-1-title-wrapper').hide("slow");
		$('.book-2-title-wrapper').hide("slow");
		$('.book-3-title-wrapper').hide("slow");
		$('.book-4-title-wrapper').hide("slow");
		$('.book-5-title-wrapper').hide("slow");
		$('.book-6-title-wrapper').hide("slow");
		$('.book-7-title-wrapper').hide("slow");
	});
});

// If passage/resource page clicked below header and above footer toggle header/footer elements. (Working on b1q1 only, disabled)

/* $(document).ready(function() {
	$('.passage-page').click(function(e) {
		var headerOffset = $('.passage-header').offset();
		var footerOffset = $('.passage-footer').offset();
		if ((e.pageY - headerOffset.top) > 50 && (e.pageY - footerOffset.top) < 0) {
			$($(this).children('.passage-header').children('a')).fadeToggle();
			$($(this).children('.passage-header').children('.section-number')).fadeToggle();
			$($(this).children('.passage-footer').children('a')).fadeToggle();
		}
	});
	$('.resource-page').click(function(e) {
		var headerOffset = $('.passage-header').offset();
		var footerOffset = $('.passage-footer').offset();
		if ((e.pageY - headerOffset.top) > 50 && (e.pageY - footerOffset.top) < 0) {
			$($(this).children('.passage-header').children('a')).fadeToggle();
			$($(this).children('.passage-header').children('.resource-heading')).fadeToggle();
			$($(this).children('.passage-footer').children('a')).fadeToggle();
			$($(this).children('.passage-footer').children('.resource-heading')).fadeToggle();
		}
	});
}); */

// Toggle header/footer elements on click on passage text

$(document).ready(function() {
	$('.passage').click(function() {
		$($(this).siblings('.passage-header-fs').children('a')).fadeToggle();
		$($(this).siblings('.passage-header-fs').children('.section-number-fs')).fadeToggle();
		$($(this).siblings('.passage-footer').children('a')).fadeToggle();
		$($(this).siblings('.passage-header-fs').children('.resource-heading-fs')).fadeToggle();
		$($(this).siblings('.passage-footer').children('.resource-heading-bottom')).fadeToggle();
		$($(this).siblings('.passage-header-sb').children('a')).fadeToggle();
		$($(this).siblings('.passage-header-sb').children('.section-number-sb')).fadeToggle();
		$($(this).siblings('.passage-header-sb').children('.resource-heading-sb')).fadeToggle();
	});
});

// Open next/previous passage when right/left arrow buttons clicked

$(document).ready( function(event){
	$(".next-passage").click(function(){
		$.mobile.pageContainer.pagecontainer("change", $(this).closest('[data-role="page"]').next('[data-role="page"]'), {transition:"slide"});
	});  
	$(".previous-passage").click(function(){
		$.mobile.pageContainer.pagecontainer("change", $(this).closest('[data-role="page"]').prev('[data-role="page"]'), {transition:"slide", reverse:true,});
	}); 
});

// If in standalone mode, when navigation buttons clicked save current location to local storage

$(document).ready( function(event){
	if (window.navigator.standalone == true) {	
		$('.book-1-number-wrapper').on('click', function(){          
			localStorage.lastlocation = location.href
		});
		$('.book-2-number-wrapper').on('click', function(){          
			localStorage.lastlocation = location.href
		});
		$('.book-3-number-wrapper').on('click', function(){          
			localStorage.lastlocation = location.href
		});
		$('.book-4-number-wrapper').on('click', function(){          
			localStorage.lastlocation = location.href
		});
		$('.book-5-number-wrapper').on('click', function(){          
			localStorage.lastlocation = location.href
		});
		$('.book-6-number-wrapper').on('click', function(){          
			localStorage.lastlocation = location.href
		});
		$('.book-7-number-wrapper').on('click', function(){          
			localStorage.lastlocation = location.href
		});
		$('.link').on('click', function(){          
			localStorage.lastlocation = this.href
		});
		$('.menu-icon-left-fs').on('click', function(){          
			localStorage.lastlocation = this.href
		});
		$('.menu-icon-left-sb').on('click', function(){          
			localStorage.lastlocation = this.href
		});
		$('.book-title').on('click', function(){          
			localStorage.lastlocation = this.href
		});
		$('.passage-menu-icon-left-fs').on('click', function(){          
			localStorage.lastlocation = this.href
		});
		$('.passage-menu-icon-left-sb').on('click', function(){          
			localStorage.lastlocation = this.href
		});
		$('.pdf').on('click', function(){          
			localStorage.lastlocation = location.href
		});
		$('.passage-icon-left-fs').on('click', function(){          
			localStorage.lastlocation = this.href
		});
		$('.passage-icon-left-sb').on('click', function(){          
			localStorage.lastlocation = this.href
		});
		$('.next-passage').on('click', function(){          
			localStorage.lastlocation = location.href
		});
		$('.previous-passage').on('click', function(){          
			localStorage.lastlocation = location.href
		});
	}
});

// If in standalone mode and last location saved in local storage is not same as current location go to saved location on restart

if (window.navigator.standalone == true) {	
	if (localStorage.lastlocation && location.currentURL != location.href) {
		window.location = localStorage.lastlocation;
	}
}

// If in standalone mode and panel is not open go back in history with reverse slide transition on right swipe from edge of screen (disabled)
/* 
$(document).bind('swiperight', function (event) {
	if (window.navigator.standalone == true) {
		if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
			if ( event.swipestart.coords[0] <10) {
				history.back({transition:"slide", reverse:true,});
			}
		}
	}
});
*/
// Go forward in history on left swipe (disabled)
/* 
$(document).bind('swipeleft', function () {
	history.forward({transition:"slide"});
});
*/
