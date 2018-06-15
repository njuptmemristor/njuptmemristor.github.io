$.fn.menu_move = function(options, lockBottom) {
	var $obj = this;
	var parentPaddingTop = parseInt($obj.parent().css('padding-top'));
	var startOffset = $obj.parent().offset().top;
	var opts = $.extend({
		startOffset: startOffset,
		offsetY: parentPaddingTop,
		duration: 200,
		lockBottom:true 
	}, options);
	
	$obj.css({ position: 'absolute' });
		if(opts.lockBottom){
			var bottomPos = $obj.parent().height() - $obj.height() + parentPaddingTop;
			if( bottomPos < 0 )
				bottomPos = 0;
		}
				
	$(window).scroll(function () { 
		$obj.stop(); 

		var pastStartOffset			= $(document).scrollTop() > opts.startOffset;	
		var objFartherThanTopPos	= $obj.offset().top > startOffset;	
		var objBiggerThanWindow 	= $obj.outerHeight() < $(window).height();	

		if( (pastStartOffset || objFartherThanTopPos) && objBiggerThanWindow ){ 
			var newpos = ($(document).scrollTop() -startOffset + opts.offsetY );
			if ( newpos > bottomPos )
				newpos = bottomPos;
			if ( $(document).scrollTop() < opts.startOffset ) 
				newpos = parentPaddingTop;
			$obj.animate({ top: newpos }, opts.duration );
		}
	});
};




/*function changeImg() {
    var $imgs = $("#groupImg li");
    var $nums = $("#groupNum li");

    var isStop = false;
    var index = 0;

    $nums.eq(index).addClass("nums").siblings().removeClass("nums");
    $imgs.eq(index).show();

    $nums.mouseover(function() {
        isStop = true;
        $(this).addClass("nums").siblings().removeClass("nums");

        index = $nums.index(this);
        $imgs.eq(index).show("slow");
        $imgs.eq(index).siblings().hide("slow");
    }).mouseout(function() {
        isStop = false
    });
    setInterval(function() {
        if(isStop) return;
        if(index >= 2) index = -1;
        index++;

        $nums.eq(index).addClass("nums").siblings().removeClass("nums");
        $imgs.eq(index).show("slow").siblings().hide("slow");

    }, 3000);
}

$(document).ready(function function_name() {
    changeImg();
})*/

var imgs=new Array(2);
var i;
for(i = 1;i < 3; i++){
	imgs[i]=new Image();
	imgs[i].src=i+'.gif';
}
var currentImage=1;
var run=true;
var speed=3000;
function change(){
	if(!document.images)
		return;
	if(!run)
		return;
	document.getElementById("imgs").src=imgs[currentImage].src;
	currentImage++;
	if(currentImage>imgs.length-1)
	currentImage=1;
	setTimeout('change()',speed);
}
