var wpAjaxUrl='https://huemor.rocks/wp-admin/admin-ajax.php';var flBuilderUrl='https://huemor.rocks/wp-content/plugins/bb-plugin/';var FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1000,easing:'swing',offset:100},paths:{pluginUrl:'https://huemor.rocks/wp-content/plugins/bb-plugin/',wpAjaxUrl:'https://huemor.rocks/wp-admin/admin-ajax.php'},breakpoints:{small:767,medium:1024,large:1440},waypoint:{offset:80}};(function($){if(typeof FLBuilderLayout!='undefined'){return}
FLBuilderLayout={init:function(){FLBuilderLayout._destroy();FLBuilderLayout._initClasses();FLBuilderLayout._initBackgrounds();FLBuilderLayout._initRowShapeLayerHeight();if(0===$('.fl-builder-edit').length){FLBuilderLayout._initModuleAnimations();FLBuilderLayout._initAnchorLinks();FLBuilderLayout._initHash();FLBuilderLayout._initForms();FLBuilderLayout._reorderMenu()}},refreshGalleries:function(element){var $element='undefined'==typeof element?$('body'):$(element),mfContent=$element.find('.fl-mosaicflow-content'),wmContent=$element.find('.fl-gallery'),mfObject=null;if(mfContent){mfObject=mfContent.data('mosaicflow');if(mfObject){mfObject.columns=$([]);mfObject.columnsHeights=[];mfContent.data('mosaicflow',mfObject);mfContent.mosaicflow('refill')}}
if(wmContent){wmContent.trigger('refreshWookmark')}},refreshGridLayout:function(element){var $element='undefined'==typeof element?$('body'):$(element),msnryContent=$element.find('.masonry');if(msnryContent.length){msnryContent.masonry('layout')}},reloadSlider:function(content){var $content='undefined'==typeof content?$('body'):$(content);if($content.find('.bx-viewport > div').length>0){$.each($content.find('.bx-viewport > div'),function(key,slider){setTimeout(function(){$(slider).data('bxSlider').reloadSlider()},100)})}},resizeAudio:function(element){var $element='undefined'==typeof element?$('body'):$(element),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio'),player=null,mejsPlayer=null,rail=null,railWidth=400;if(audioPlayers.length&&typeof mejs!=='undefined'){audioPlayers.each(function(){player=$(this);mejsPlayer=mejs.players[player.attr('id')];rail=player.find('.mejs-controls .mejs-time-rail');var innerMejs=player.find('.mejs-inner'),total=player.find('.mejs-controls .mejs-time-total');if(typeof mejsPlayer!=='undefined'){railWidth=Math.ceil(player.width()*0.8);if(innerMejs.length){rail.css('width',railWidth+'px!important');mejsPlayer.options.autosizeProgress=!0;setTimeout(function(){mejsPlayer.setControlsSize()},50);player.find('.mejs-inner').css({visibility:'visible',height:'inherit'})}}})}},preloadAudio:function(element){var $element='undefined'==typeof element?$('body'):$(element),contentWrap=$element.closest('.fl-accordion-item'),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio');if(!contentWrap.hasClass('fl-accordion-item-active')&&audioPlayers.find('.mejs-inner').length){audioPlayers.find('.mejs-inner').css({visibility:'hidden',height:0})}},resizeSlideshow:function(){if(typeof YUI!=='undefined'){YUI().use('node-event-simulate',function(Y){Y.one(window).simulate("resize")})}},reloadGoogleMap:function(element){var $element='undefined'==typeof element?$('body'):$(element),googleMap=$element.find('iframe[src*="google.com/maps"]');if(googleMap.length){googleMap.attr('src',function(i,val){return val})}},_destroy:function(){var win=$(window);win.off('scroll.fl-bg-parallax');win.off('resize.fl-bg-video')},_isTouch:function(){if(('ontouchstart' in window)||(window.DocumentTouch&&document instanceof DocumentTouch)){return!0}
return!1},_isMobile:function(){return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent)},_initClasses:function(){var body=$('body'),ua=navigator.userAgent;if(!body.hasClass('archive')&&$('.fl-builder-content-primary').length>0){body.addClass('fl-builder')}
if(FLBuilderLayout._isTouch()){body.addClass('fl-builder-touch')}
if(FLBuilderLayout._isMobile()){body.addClass('fl-builder-mobile')}
if($(window).width()<FLBuilderLayoutConfig.breakpoints.small){body.addClass('fl-builder-breakpoint-small')}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.small&&$(window).width()<FLBuilderLayoutConfig.breakpoints.medium){body.addClass('fl-builder-breakpoint-medium')}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.medium&&$(window).width()<FLBuilderLayoutConfig.breakpoints.large){body.addClass('fl-builder-breakpoint-large')}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.large){body.addClass('fl-builder-breakpoint-default')}
if(ua.indexOf('Trident/7.0')>-1&&ua.indexOf('rv:11.0')>-1){body.addClass('fl-builder-ie-11')}},_initBackgrounds:function(){var win=$(window);if($('.fl-row-bg-parallax').length>0&&!FLBuilderLayout._isMobile()){FLBuilderLayout._scrollParallaxBackgrounds();FLBuilderLayout._initParallaxBackgrounds();win.on('resize.fl-bg-parallax',FLBuilderLayout._initParallaxBackgrounds);win.on('scroll.fl-bg-parallax',FLBuilderLayout._scrollParallaxBackgrounds)}
if($('.fl-bg-video').length>0){FLBuilderLayout._initBgVideos();FLBuilderLayout._resizeBgVideos();var resizeBGTimer=null;win.on('resize.fl-bg-video',function(e){clearTimeout(resizeBGTimer);resizeBGTimer=setTimeout(function(){FLBuilderLayout._resizeBgVideos(e)},100)})}},_initParallaxBackgrounds:function(){$('.fl-row-bg-parallax').each(FLBuilderLayout._initParallaxBackground)},_initParallaxBackground:function(){var row=$(this),content=row.find('> .fl-row-content-wrap'),winWidth=$(window).width(),screenSize='',imageSrc={default:'',medium:'',responsive:'',};imageSrc.default=row.data('parallax-image')||'';imageSrc.medium=row.data('parallax-image-medium')||imageSrc.default;imageSrc.responsive=row.data('parallax-image-responsive')||imageSrc.medium;if(winWidth>FLBuilderLayoutConfig.breakpoints.medium){screenSize='default'}else if(winWidth>FLBuilderLayoutConfig.breakpoints.small&&winWidth<=FLBuilderLayoutConfig.breakpoints.medium){screenSize='medium'}else if(winWidth<=FLBuilderLayoutConfig.breakpoints.small){screenSize='responsive'}
content.css('background-image','url('+imageSrc[screenSize]+')');row.data('current-image-loaded',screenSize)},_scrollParallaxBackgrounds:function(){$('.fl-row-bg-parallax').each(FLBuilderLayout._scrollParallaxBackground)},_scrollParallaxBackground:function(){var win=$(window),row=$(this),content=row.find('> .fl-row-content-wrap'),speed=row.data('parallax-speed'),offset=content.offset(),yPos=-((win.scrollTop()-offset.top)/speed),initialOffset=(row.data('parallax-offset')!=null)?row.data('parallax-offset'):0,totalOffset=yPos-initialOffset;content.css('background-position','center '+totalOffset+'px')},_initBgVideos:function(){$('.fl-bg-video').each(FLBuilderLayout._initBgVideo)},_initBgVideo:function(){var wrap=$(this),width=wrap.data('width'),height=wrap.data('height'),mp4=wrap.data('mp4'),youtube=wrap.data('youtube'),vimeo=wrap.data('vimeo'),mp4Type=wrap.data('mp4-type'),webm=wrap.data('webm'),webmType=wrap.data('webm-type'),fallback=wrap.data('fallback'),loaded=wrap.data('loaded'),videoMobile=wrap.data('video-mobile'),fallbackTag='',videoTag=null,mp4Tag=null,webmTag=null;if(loaded){return}
videoTag=$('<video autoplay loop muted playsinline></video>');if('undefined'!=typeof fallback&&''!=fallback){videoTag.attr('poster','data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
videoTag.css({backgroundImage:'url("'+fallback+'")',backgroundColor:'transparent',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center',})}
if('undefined'!=typeof mp4&&''!=mp4){mp4Tag=$('<source />');mp4Tag.attr('src',mp4);mp4Tag.attr('type',mp4Type);videoTag.append(mp4Tag)}
if('undefined'!=typeof webm&&''!=webm){webmTag=$('<source />');webmTag.attr('src',webm);webmTag.attr('type',webmType);videoTag.append(webmTag)}
if(!FLBuilderLayout._isMobile()||(FLBuilderLayout._isMobile()&&"yes"==videoMobile)){if('undefined'!=typeof youtube){FLBuilderLayout._initYoutubeBgVideo.apply(this)}else if('undefined'!=typeof vimeo){FLBuilderLayout._initVimeoBgVideo.apply(this)}else{wrap.append(videoTag)}}else{videoTag.attr('src','')
wrap.append(videoTag)}
wrap.data('loaded',!0)},_initYoutubeBgVideo:function(){var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),startTime='undefined'!==typeof playerWrap.data('start')?playerWrap.data('start'):0,startTime='undefined'!==typeof playerWrap.data('t')&&startTime===0?playerWrap.data('t'):startTime,endTime='undefined'!==typeof playerWrap.data('end')?playerWrap.data('end'):0,loop='undefined'!==typeof playerWrap.data('loop')?playerWrap.data('loop'):1,stateCount=0,player,fallback_showing;if(videoId){fallback=playerWrap.data('fallback')||!1
if(fallback){playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');fallbackTag.css('background-size','cover');fallbackTag.css('transition','background-image 1s')
playerWrap.append(fallbackTag);fallback_showing=!0}
FLBuilderLayout._onYoutubeApiReady(function(YT){setTimeout(function(){player=new YT.Player(videoPlayer[0],{videoId:videoId,events:{onReady:function(event){if("no"===enableAudio||FLBuilderLayout._isMobile()){event.target.mute()}else if("yes"===enableAudio&&event.target.isMuted){event.target.unMute()}
playerWrap.data('YTPlayer',player);FLBuilderLayout._resizeYoutubeBgVideo.apply(playerWrap);event.target.playVideo();if(audioButton.length>0&&!FLBuilderLayout._isMobile()){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio)}},onStateChange:function(event){if(event.data===1){if(fallback_showing){$('.fl-bg-video-fallback').css('background-image','url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)')}}
if(stateCount<4){stateCount++}
if(stateCount>1&&(-1===event.data||2===event.data)&&"yes"===enableAudio){player.mute();player.playVideo();audioButton.show()}
if(event.data===YT.PlayerState.ENDED&&1===loop){if(startTime>0){player.seekTo(startTime)}else{player.playVideo()}}},onError:function(event){console.info('YT Error: '+event.data)
FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)}},playerVars:{playsinline:FLBuilderLayout._isMobile()?1:0,controls:0,showinfo:0,rel:0,start:startTime,end:endTime,}})},1)})}},_onErrorYoutubeVimeo:function(playerWrap){fallback=playerWrap.data('fallback')||!1
if(!fallback){return!1}
playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');playerWrap.append(fallbackTag)},_onYoutubeApiReady:function(callback){if(window.YT&&YT.loaded){callback(YT)}else{setTimeout(function(){FLBuilderLayout._onYoutubeApiReady(callback)},350)}},_initVimeoBgVideo:function(){var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),player,width=playerWrap.outerWidth(),ua=navigator.userAgent;if(typeof Vimeo!=='undefined'&&videoId){player=new Vimeo.Player(videoPlayer[0],{id:videoId,loop:!0,title:!1,portrait:!1,background:!0,autopause:!1,muted:!0});playerWrap.data('VMPlayer',player);if("no"===enableAudio){player.setVolume(0)}else if("yes"===enableAudio){if(ua.indexOf("Safari")>-1||ua.indexOf("Chrome")>-1||ua.indexOf("Firefox")>-1){player.setVolume(0);audioButton.show()}else{player.setVolume(1)}}
player.play().catch(function(error){FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)});if(audioButton.length>0){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio)}}},_toggleBgVideoAudio:function(e){var player=e.data.player,control=e.data.button.find('.fl-audio-control');if(control.hasClass('fa-volume-off')){control.removeClass('fa-volume-off').addClass('fa-volume-up');e.data.button.find('.fa-times').hide();if('function'===typeof player.unMute){player.unMute()}else{player.setVolume(1)}}else{control.removeClass('fa-volume-up').addClass('fa-volume-off');e.data.button.find('.fa-times').show();if('function'===typeof player.unMute){player.mute()}else{player.setVolume(0)}}},_videoBgSourceError:function(e){var source=$(e.target),wrap=source.closest('.fl-bg-video'),vid=wrap.find('video'),fallback=wrap.data('fallback'),fallbackTag='';source.remove();if(vid.find('source').length){return}else if(''!==fallback){fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+fallback+')');wrap.append(fallbackTag);vid.remove()}},_resizeBgVideos:function(){$('.fl-bg-video').each(function(){FLBuilderLayout._resizeBgVideo.apply(this);if($(this).parent().find('img').length>0){$(this).parent().imagesLoaded($.proxy(FLBuilderLayout._resizeBgVideo,this))}})},_resizeBgVideo:function(){if(0===$(this).find('video').length&&0===$(this).find('iframe').length){return}
var wrap=$(this),wrapHeight=wrap.outerHeight(),wrapWidth=wrap.outerWidth(),vid=wrap.find('video'),vidHeight=wrap.data('height'),vidWidth=wrap.data('width'),newWidth=wrapWidth,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newLeft=0,newTop=0,iframe=wrap.find('iframe'),isRowFullHeight=$(this).closest('.fl-row-bg-video').hasClass('fl-row-full-height'),vidCSS={top:'50%',left:'50%',transform:'translate(-50%,-50%)',};if(vid.length){if(vidHeight===''||typeof vidHeight==='undefined'||vidWidth===''||typeof vidWidth==='undefined'){vid.css({'left':'0px','top':'0px','width':newWidth+'px'});vid.on('loadedmetadata',FLBuilderLayout._resizeOnLoadedMeta);return}
if(!isRowFullHeight){if(newHeight<wrapHeight){newHeight=wrapHeight;newLeft=-((newWidth-wrapWidth)/2);newWidth=vidHeight?Math.round(vidWidth*wrapHeight/vidHeight):newWidth}else{newTop=-((newHeight-wrapHeight)/2)}
vidCSS={left:newLeft+'px',top:newTop+'px',height:newHeight+'px',width:newWidth+'px',}}
vid.css(vidCSS)}else if(iframe.length){if(typeof wrap.data('youtube')!=='undefined'){FLBuilderLayout._resizeYoutubeBgVideo.apply(this)}}},_resizeOnLoadedMeta:function(){var video=$(this),wrapHeight=video.parent().outerHeight(),wrapWidth=video.parent().outerWidth(),vidWidth=video[0].videoWidth,vidHeight=video[0].videoHeight,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newWidth=wrapWidth,newLeft=0,newTop=0;if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2)}else{newTop=-((newHeight-wrapHeight)/2)}
video.parent().data('width',vidWidth);video.parent().data('height',vidHeight);video.css({'left':newLeft+'px','top':newTop+'px','width':newWidth+'px','height':newHeight+'px'})},_resizeYoutubeBgVideo:function(){var wrap=$(this),wrapWidth=wrap.outerWidth(),wrapHeight=wrap.outerHeight(),player=wrap.data('YTPlayer'),video=player?player.getIframe():null,aspectRatioSetting='16:9',aspectRatioArray=aspectRatioSetting.split(':'),aspectRatio=aspectRatioArray[0]/aspectRatioArray[1],ratioWidth=wrapWidth/aspectRatio,ratioHeight=wrapHeight*aspectRatio,isWidthFixed=wrapWidth/wrapHeight>aspectRatio,width=isWidthFixed?wrapWidth:ratioHeight,height=isWidthFixed?ratioWidth:wrapHeight;if(video){$(video).width(width).height(height)}},_initModuleAnimations:function(){if(typeof jQuery.fn.waypoint!=='undefined'){$('.fl-animation').each(function(){var node=$(this),nodeTop=node.offset().top,winHeight=$(window).height(),bodyHeight=$('body').height(),waypoint=FLBuilderLayoutConfig.waypoint,offset='80%';if(typeof waypoint.offset!==undefined){offset=FLBuilderLayoutConfig.waypoint.offset+'%'}
if(bodyHeight-nodeTop<winHeight*0.2){offset='100%'}
node.waypoint({offset:offset,handler:FLBuilderLayout._doModuleAnimation})})}},_doModuleAnimation:function(){var module='undefined'==typeof this.element?$(this):$(this.element),delay=parseFloat(module.data('animation-delay')),duration=parseFloat(module.data('animation-duration'));if(!isNaN(duration)){module.css('animation-duration',duration+'s')}
if(!isNaN(delay)&&delay>0){setTimeout(function(){module.addClass('fl-animated')},delay*1000)}else{setTimeout(function(){module.addClass('fl-animated')},1)}},_initHash:function(){var hash=window.location.hash.replace('#','').split('/').shift(),element=null,tabs=null,responsiveLabel=null,tabIndex=null,label=null;if(''!==hash){try{element=$('#'+hash);if(element.length>0){if(element.hasClass('fl-accordion-item')){setTimeout(function(){element.find('.fl-accordion-button').trigger('click')},100)}
if(element.hasClass('fl-tabs-panel')){setTimeout(function(){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');label[0].click();FLBuilderLayout._scrollToElement(element)},100)}}}catch(e){}}},_initAnchorLinks:function(){$('a').each(FLBuilderLayout._initAnchorLink)},_initAnchorLink:function(){var link=$(this),href=link.attr('href'),loc=window.location,id=null,element=null,flNode=!1;if('undefined'!=typeof href&&href.indexOf('#')>-1&&link.closest('svg').length<1){if(loc.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&loc.hostname==this.hostname){try{id=href.split('#').pop();if(!id){return}
element=$('#'+id);if(element.length>0){flNode=element.hasClass('fl-row')||element.hasClass('fl-col')||element.hasClass('fl-module');if(!element.hasClass('fl-no-scroll')&&(link.hasClass('fl-scroll-link')||flNode)){$(link).on('click',FLBuilderLayout._scrollToElementOnLinkClick)}
if(element.hasClass('fl-accordion-item')){$(link).on('click',FLBuilderLayout._scrollToAccordionOnLinkClick)}
if(element.hasClass('fl-tabs-panel')){$(link).on('click',FLBuilderLayout._scrollToTabOnLinkClick)}}}catch(e){}}}},_scrollToElementOnLinkClick:function(e,callback){var element=$('#'+$(this).attr('href').split('#').pop());FLBuilderLayout._scrollToElement(element,callback);e.preventDefault()},_scrollToElement:function(element,callback){var config=FLBuilderLayoutConfig.anchorLinkAnimations,dest=0,win=$(window),doc=$(document);if(element.length>0){if('fixed'===element.css('position')||'fixed'===element.parent().css('position')){dest=element.position().top}else if(element.offset().top>doc.height()-win.height()){dest=doc.height()-win.height()}else{dest=element.offset().top-config.offset}
$('html, body').animate({scrollTop:dest},config.duration,config.easing,function(){if('undefined'!=typeof callback){callback()}
if(undefined!=element.attr('id')){if(history.pushState){history.pushState(null,null,'#'+element.attr('id'))}else{window.location.hash=element.attr('id')}}})}},_scrollToAccordionOnLinkClick:function(e){var element=$('#'+$(this).attr('href').split('#').pop());if(element.length>0){var callback=function(){if(element){element.find('.fl-accordion-button').trigger('click');element=!1}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback)}},_scrollToTabOnLinkClick:function(e){var element=$('#'+$(this).attr('href').split('#').pop()),tabs=null,label=null,responsiveLabel=null;if(element.length>0){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){var callback=function(){if(element){responsiveLabel.trigger($.Event('click',{which:1}))}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback)}else{label[0].click();FLBuilderLayout._scrollToElement(element)}
e.preventDefault()}},_initForms:function(){if(!FLBuilderLayout._hasPlaceholderSupport){$('.fl-form-field input').each(FLBuilderLayout._initFormFieldPlaceholderFallback)}
$('.fl-form-field input').on('focus',FLBuilderLayout._clearFormFieldError)},_hasPlaceholderSupport:function(){var input=document.createElement('input');return'undefined'!=input.placeholder},_initFormFieldPlaceholderFallback:function(){var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if('undefined'!=placeholder&&''===val){field.val(placeholder);field.on('focus',FLBuilderLayout._hideFormFieldPlaceholderFallback);field.on('blur',FLBuilderLayout._showFormFieldPlaceholderFallback)}},_hideFormFieldPlaceholderFallback:function(){var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(val==placeholder){field.val('')}},_showFormFieldPlaceholderFallback:function(){var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(''===val){field.val(placeholder)}},_clearFormFieldError:function(){var field=$(this);field.removeClass('fl-form-error');field.siblings('.fl-form-error-message').hide()},_initRowShapeLayerHeight:function(){FLBuilderLayout._adjustRowShapeLayerHeight();$(window).on('resize',FLBuilderLayout._adjustRowShapeLayerHeight)},_adjustRowShapeLayerHeight:function(){var rowShapeLayers=$('.fl-builder-shape-layer');$(rowShapeLayers).each(function(index){var rowShapeLayer=$(this),shape=$(rowShapeLayer).find('svg'),height=shape.height(),excludeShapes='.fl-builder-shape-circle, .fl-builder-shape-dot-cluster, .fl-builder-shape-topography, .fl-builder-shape-rect';if(!rowShapeLayer.is(excludeShapes)){$(shape).css('height',Math.ceil(height))}})},_string_to_slug:function(str){str=str.replace(/^\s+|\s+$/g,'');if('undefined'==typeof window._fl_string_to_slug_regex){regex=new RegExp('[^a-zA-Z0-9\'":() !.,-_|]','g')}else{regex=new RegExp('[^'+window._fl_string_to_slug_regex+'\'":\(\) !.,-_|\\\p{Letter}]','ug')}
str=str.replace(regex,'').replace(/\s+/g,' ');return str},_reorderMenu:function(){if($('#wp-admin-bar-fl-builder-frontend-edit-link-default li').length>1){$('#wp-admin-bar-fl-builder-frontend-duplicate-link').appendTo('#wp-admin-bar-fl-builder-frontend-edit-link-default').css('padding-top','5px').css('border-top','2px solid #1D2125').css('margin-top','5px')}}};$(function(){FLBuilderLayout.init()})})(jQuery);jQuery(function($){$(function(){$('.fl-node-u1xvqya0kc4d .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title')}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null)})});window._fl_string_to_slug_regex='a-zA-Z0-9'});(function($,gsap){$(function(){$('#SSCMMarquee-b1l2d0ox43ve .SSCMMarquee-slick').slick({speed:5000,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:0,cssEase:'linear',infinite:!0,focusOnSelect:!1,pauseOnHover:!1,draggable:!1,arrows:!1,buttons:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,}},{breakpoint:767,settings:{slidesToShow:2,}}]});function metrics(obj,initVal,lastVal,duration){var startTime=null;var currentTime=Date.now();var step=(currentTime)=>{if(!startTime){startTime=currentTime}
var progress=Math.min((currentTime-startTime)/duration,1);obj.innerHTML=Math.floor(progress*(lastVal-initVal)+initVal);if(progress<1){window.requestAnimationFrame(step)}else{window.cancelAnimationFrame(window.requestAnimationFrame(step))}};window.requestAnimationFrame(step)}
var numbers=document.querySelectorAll("#SSCMMarquee-b1l2d0ox43ve [data-roll]");var marqueeMetrics=document.querySelectorAll("#SSCMMarquee-b1l2d0ox43ve .SSCMMarquee-metrics");if(marqueeMetrics.length>0){if(!gsap){if(!window.FLBuilder){console.error("Metrics present in marquee but GSAP has not loaded.")}
return}
let metricsTL=gsap.timeline({scrollTrigger:{trigger:marqueeMetrics,start:"top bottom",end:"bottom bottom",markers:!1,once:!0,onEnter:self=>{if(numbers.length>0){numbers.forEach(number=>{var roll=number.dataset.roll;if(roll>0){metrics(number,0,roll,1000)}})}},}})}})})(window.jQuery,window.gsap);jQuery(function($){$(function(){$('.fl-node-230h9jvendlo .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title')}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null)})});window._fl_string_to_slug_regex='a-zA-Z0-9'});jQuery(function($){$(function(){$('.fl-node-l7qt3rhm9dag .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title')}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null)})});window._fl_string_to_slug_regex='a-zA-Z0-9'});(function($){$(function(){let page=1;let id="36x52fquh4zy";let el="#FilteredArticles-"+id;let post_type="news";let style_variant="";let color_variant="";let show_excerpt="1";let layout='list';let grid_columns='col-33';let grid_col_nr='1'
let label_type='none';let show_cats='no';let bordered='yes';let excerpt_mobile='yes';let content_type='content'
let disable_links='yes';let read_more='Read More';let current_cat='';let predefined_cat='';let predefined_tags='';let predefined_posts='';let post_match='1';let cat_match='1';let tag_match='1';let show_thumbnails='no';let paginate='no';let use_placeholders='no';let ajax_started=!1;const queryString=window.location.search;const urlParams=new URLSearchParams(queryString);const get_cat=urlParams.get('category');const predefined={'categories':predefined_cat,'posts':predefined_posts,'tags':predefined_tags,'match_post':post_match,'match_cat':cat_match,'match_tag':tag_match,}
if(!current_cat&&get_cat){current_cat=get_cat;$(el).get(0).scrollIntoView();$('input[value="'+current_cat+'"]').click();$(el+' #category-cat-counter').text(1);$(el+' #filters-counter').text(1);$(el+' #btn-cat-counter').text(1)}
$(el+' #modal-button-show').click(function(){$(el+' .FilteredArticles-intro-filters-modal').addClass('show');$('body').addClass('overflow-h')});$(el+' #modal-button-hide').click(function(){$(el+' .FilteredArticles-intro-filters-modal').removeClass('show');$('body').removeClass('overflow-h')});$(el+' #switch_list').click(function(){layout='list';$(this).addClass('active');$(el+' #switch_default').removeClass('active');$(el+' .cc-article-resource').addClass('cc-article-resource_list');$(el+' .FilteredArticles-main-wrapper-item').removeClass(grid_columns);$(el+' .FilteredArticles-main-wrapper-item').addClass('col-list');$(el+' .FilteredArticles-main-wrapper').addClass('FilteredArticles-main-wrapper_list')})
$(el+' #switch_default').click(function(){layout='grid';$(this).addClass('active');$(el+' #switch_list').removeClass('active');$(el+' .cc-article-resource').removeClass('cc-article-resource_list');$(el+' .FilteredArticles-main-wrapper-item').removeClass('col-list');$(el+' .FilteredArticles-main-wrapper-item').addClass(grid_columns);$(el+' .FilteredArticles-main-wrapper').removeClass('FilteredArticles-main-wrapper_list')})
$(el+' #filter-modal').click(function(e){if(e.target.id==$(this).attr('id')){$(this).removeClass('show');$('body').removeClass('overflow-h')}});$('#search-button-36x52fquh4zy').click(function(e){$(this).toggleClass('opened');$('#search-wrapper-36x52fquh4zy').toggleClass('show')})
$(window).resize(function(){if(window.matchMedia('(max-width: 767px)').matches){layout='grid';$(el+' #switch_default').addClass('active');$(el+' #switch_list').removeClass('active');$(el+' .cc-article-resource').removeClass('cc-article-resource_list');$(el+' .FilteredArticles-main-wrapper-item').removeClass('col-list');$(el+' .FilteredArticles-main-wrapper-item').addClass(grid_columns);$(el+' .FilteredArticles-main-wrapper').removeClass('FilteredArticles-main-wrapper_list')}})
if(window.matchMedia('(max-width: 550px)').matches){$(el+' .filters-modal-content-category-title').append('<span class="dashicons dashicons-arrow-down-alt2"></span>');$(el+' .filters-modal-content-category-title').click(function(e){$(this).siblings('.filters-modal-content-category-terms').toggleClass('show');$(this).toggleClass('opened')})}
$(el+' .filters-modal-content-category-terms-term .filter-input-checkbox').click(function(){let cat_counter=el+' #'+$(this).data('name')+'-cat-counter';let filters_counter=el+' #filters-counter';let btn_cat_counter=el+' #btn-cat-counter';let nr_cat_counter=Number($(cat_counter).text());let nr_filter_counter=Number($(filters_counter).text());let nr_btn_cat_counter=Number($(btn_cat_counter).text());if($(this).is(':checked')){$(cat_counter).text(nr_cat_counter+1);$(filters_counter).text(nr_filter_counter+1);$(btn_cat_counter).text(nr_btn_cat_counter+1)}else{$(cat_counter).text(nr_cat_counter-1);$(filters_counter).text(nr_filter_counter-1);$(btn_cat_counter).text(nr_btn_cat_counter-1)}})
$(el+' #reset-btn').click(function(){$(el+' .filters-btn-counter').each(function(){$(this).text(0)})
let data={'filters':$(this).serializeArray(),'s':$(el+' #FilteredArticles-searchForm').children('input').val()}
page=1;get_results(data,page)});$(el+' #FilteredArticles-filterForm').submit(function(e){e.preventDefault();$(el+' .FilteredArticles-intro-filters-modal').removeClass('show');$('body').removeClass('overflow-h');let data={'filters':$(this).serializeArray(),'s':$(el+' #FilteredArticles-searchForm').children('input').val()}
page=1;get_results(data,page)});$(el+' #FilteredArticles-searchForm').submit(function(e){trigger='search';e.preventDefault();$('body').removeClass('overflow-h');let data={'filters':$(el+' #FilteredArticles-filterForm').serializeArray(),'s':$(this).children('input').val(),'current_category':current_cat}
page=1;get_results(data,page,trigger)});$(document).on('click','#load-more-'+id,function(e){e.preventDefault();page++
let data={'filters':$(el+' #FilteredArticles-filterForm').serializeArray(),'s':$(el+' #FilteredArticles-searchForm').children('input').val(),'current_category':current_cat};get_results(data,page,'click')});$(document).ready(function(){let data={'filters':$(el+' #FilteredArticles-filterForm').serializeArray(),'s':$(el+' #FilteredArticles-searchForm').children('input').val(),'current_category':current_cat};page=1;get_results(data,page,'click')});$(el+' #FilteredArticles-trigger').click(function(){$(this).addClass('shown')})
var timer;$(document).scroll(function(){clearTimeout(timer);timer=setTimeout(function(){if(paginate=='yes'){if($(el+' #FA-Paginate').length>0&&$(el+' #FA-Paginate').isInViewport()){if(!$(el+' #FA-Paginate').hasClass('inViewPort')||!$(el+' #FA-Paginate').hasClass('loading')){$(el+' #load-more-'+id).click()}
$(el+' #FA-Paginate').addClass('inViewPort')}else{$(el+' #FA-Paginate').removeClass('inViewPort')}}
if($(el+' .FilteredArticles-main-wrapper').length&&$(el+' .FilteredArticles-main-wrapper').isInViewport()){$(el+' .FilteredArticles-main-wrapper-item').each(function(){let transform=parseInt($(this).css('transform').split(',')[5]);if(transform!=NaN){if(transform<0){transform+=5;$(this).css('transform','translateY('+transform+'px)')}else{$(this).css('transform','translateY(0px)')}}})}},300)})
function get_results(data,page,trigger='filter'){let action='filter_articles';let filter_data=data.filters;let search_str=data.s;let current_category=data.current_category;let filters=filter_data.reduce(function(r,a){r[a.name]=r[a.name]||[];r[a.name].push(a.value);return r},Object.create(null));let per_page;if(grid_col_nr>1){per_page='12'}else{per_page='6'}
if(ajax_started==!1){$.ajax({type:"post",dataType:"json",url:"https://huemor.rocks/wp-admin/admin-ajax.php",data:{filters,current_category,page,s:search_str,action,post_type,show_excerpt,per_page,label_type,predefined,content_type,use_placeholders},beforeSend:function(){ajax_started=!0;if(trigger!='click'){$(el+' #loader').addClass('searching');$(el+' #FA-Content').addClass('opacity-half')}
$(el+' #loader').css('display','block');$(el+' #FA-Paginate').addClass('loading')},success:function(response){$(el+' #loader').css('display','none');if(trigger!='click'){$(el+' #loader').removeClass('searching');$(el+' #FA-Content').removeClass('opacity-half')}
if(response.posts.length>0&&response.type!='failed'){html_data=article_wrapper(response.posts);next_page_button=`<button class="FilteredArticles-loadMore hidden" id="load-more-${id}">Load More</button>`;if(trigger=='filter'||trigger=='search'){$(el+' #FA-Content').html(html_data)}else{$(el+' #FA-Content').append(html_data)}
if(response.next_page==!1){$(el+' #FA-Paginate #load-more-'+id).remove()}else{$(el+' #FA-Paginate').html(next_page_button)}}else{$(el+' #FA-Content').html('<p class="filter-error">No results</p>');$(el+' #FA-Paginate #load-more-'+id).remove()}},complete:function(){ajax_started=!1;if($(el+' #FA-Paginate').length>0&&$(el+' #FA-Paginate').hasClass('loading')){$(el+' #FA-Paginate').removeClass('loading')}}})}}
function article_wrapper(articles){let article_wrapper=`
                        <div class="FilteredArticles-main-wrapper ${layout == 'list' ? 'FilteredArticles-main-wrapper_list' : ''}">
                            ${articles.map(p => 
                                `<div
class="FilteredArticles-main-wrapper-item 
                                        ${bordered == 'yes' ? 'FilteredArticles-main-wrapper-item_borderd' : '' } 
                                        ${layout == 'grid' ? grid_columns : 'col-list'} 
                                        ${style_variant}">${article_card(p,read_more,color_variant)}</div>`
                            ).join('')}
                        </div>`;return article_wrapper}
function article_card(item,readmore_text='Read More',variant='',class_name=''){article=`
                <article class="cc-article-resource ${layout == 'list' ? 'cc-article-resource_list' : ''} ${grid_columns == 'col-33' ? 'text-medium' : ''} ${class_name} ${variant} ${item.hoverImage != '' ? 'hover-image' : ''}">
                    <div class="cc-article-resource-inner">
                        ${show_thumbnails == 'yes' || item.featuredImage != '' ? 
                        `<a class="cc-article-resource-image ${ item.featuredImage == '' ? '' : 'no-image'}" ${disable_links=="no"?`href="${item.permalink}"`:``}>${item.featuredImage?`
                                <img src="${item.featuredImage}" alt="${item.title}" />
                                `:''}
${item.hoverImage?`<div class="cc-article-resource-image-hover">
                                    <img src="${item.hoverImage}" >
                                </div>`:''}
${label_type!='none'?`<div class="cc-article-resource-image-label ${ label_type == 'read_time' ? 'cc-article-resource-image-label-bottom' : ''} ">
                                    ${ label_type != 'read_time' ? 
                                        `<span>${item.date}</span>` :
                                        `<span>${item.read_time}MIN</span>` }
                                </div>`:``}</a>` : ''}
                        <div class="cc-article-resource-content-wrapper">
                            <div class="cc-article-resource-content">
                                ${item.categories.length > 0 && show_cats == 'yes' ? article_categories(item.categories) : article_date(item.full_date)}
                                <h6>
                                    ${disable_links == "no" 
                                    ? `<a href="${item.permalink}">${item.title}</a>` 
                                    : item.title }
                                </h6>
                                ${item.excerpt != '' ? article_excerpt(item.excerpt, item.permalink) : ''}
                            </div>
                            ${disable_links == "no" ? `<a class="cc-article-link cc-article-link-primary cc-article-link-arrow-right" href="${item.permalink}"><span>${readmore_text}</span><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="harticlep://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.50005C0 5.30943 0.0790178 5.12661 0.21967 4.99182C0.360322 4.85703 0.551088 4.7813 0.75 4.7813H9.4395L6.219 1.69643C6.07817 1.56147 5.99905 1.37842 5.99905 1.18755C5.99905 0.996689 6.07817 0.813641 6.219 0.678679C6.35983 0.543717 6.55084 0.467896 6.75 0.467896C6.94916 0.467896 7.14017 0.543717 7.281 0.678679L11.781 4.99118C11.8508 5.05794 11.9063 5.13726 11.9441 5.22458C11.9819 5.3119 12.0013 5.40551 12.0013 5.50005C12.0013 5.59459 11.9819 5.68821 11.9441 5.77553C11.9063 5.86285 11.8508 5.94216 11.781 6.00893L7.281 10.3214C7.14017 10.4564 6.94916 10.5322 6.75 10.5322C6.55084 10.5322 6.35983 10.4564 6.219 10.3214C6.07817 10.1865 5.99905 10.0034 5.99905 9.81255C5.99905 9.62169 6.07817 9.43864 6.219 9.30368L9.4395 6.2188H0.75C0.551088 6.2188 0.360322 6.14308 0.21967 6.00829C0.0790178 5.8735 0 5.69068 0 5.50005Z" fill="#0E61FE"/></svg></a>` : ``}
                        </div>
                    </div>
                </article>`;return article}
function article_excerpt(excerpt,permalink){let excerpt_wrapper='';if(post_type!='news'){excerpt_wrapper=`<a ${disable_links == "no" ? `href="${permalink}"` : ``}>
                        <div class="cc-article-resource-content-excerpt ${excerpt_mobile == 'yes' ? 'cc-article-resource-content-excerpt-shown' : ''}">
                            
                            ${excerpt}
                            
                        </div>
                    </a>`}else{excerpt_wrapper=`<div class="cc-article-resource-content-excerpt ${excerpt_mobile == 'yes' ? 'cc-article-resource-content-excerpt-shown' : ''}">      
                                        ${excerpt}
                                    </div>`}
return excerpt_wrapper}
function article_categories(cats){let count=1;let cat_items='';cats.map((c)=>{if(post_type=='work'){if(c.length>0){c.map((i)=>{if(cats.length>count){cat_items+=`<div class="cc-article-resource-category-item">
                                                            ${i.name}
                                                        </div><span class="cc-article-resource-category-separator">/</span>`}else{cat_items+=`<div class="cc-article-resource-category-item">
                                                            ${i.name}
                                                        </div>`}
count++})}}else{if(cats.length>count){cat_items+=`<div class="cc-article-resource-category-item">
                                                    ${c.name}
                                                </div><span class="cc-article-resource-category-separator">/</span>`}else{cat_items+=`<div class="cc-article-resource-category-item">
                                                    ${c.name}
                                                </div>`}
count++}}).join('');let cat_part=`<div class="cc-article-resource-category">
                            ${cat_items}
                        </div>`;return cat_part}
function article_date(date){return `<div class="cc-article-resource-category">
                            <div class="cc-article-resource-category-item">
                            ${date}
                            </div>
                        </div>`}
$.fn.isInViewport=function(){var elementTop=$(this).offset().top;var elementBottom=elementTop+$(this).outerHeight();var viewportTop=$(window).scrollTop();var viewportBottom=viewportTop+$(window).height();return elementBottom>viewportTop&&elementTop<viewportBottom}})})(jQuery)