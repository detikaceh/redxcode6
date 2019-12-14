// Menu
$(document).ready(function(){var e=$("#resp-menu"),n=$(".menu");$(e).on("click",function(e){e.preventDefault(),n.slideToggle()}),$(window).resize(function(){var e=$(window).width();e>767&&n.is(":hidden")&&n.removeAttr("style")})});
// Default Nivo Slider
$(window).load(function(){$("#slider").nivoSlider({effect:"fade",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3e3,startSlide:0,directionNav:!0,controlNav:!0,controlNavThumbs:!1,pauseOnHover:!0,manualAdvance:true,prevText:"Prev",nextText:"Next",randomStart:!1,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}})}),$(window).load(function(){$("#slider").nivoSlider()});
// Scrolltimer
var scrollTimer=null;$(window).scroll(function(){var l=$(this).height(),o=l/$(document).height()*l,t=$(this).scrollTop()/($(document).height()-l),e=t*(l-o)+o/2-$("#scroll").height()/2;$("#scroll").css("top",e).text(" ("+Math.round(100*t)+"%)").fadeIn(100),null!==scrollTimer&&clearTimeout(scrollTimer),scrollTimer=setTimeout(function(){$("#scroll").fadeOut()},1500)});
