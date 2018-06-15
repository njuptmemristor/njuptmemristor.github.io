function footer(){
	var _ch = $("#bio-container").height();
	var _wh = $(window).height();
	if(_wh - _ch > 60){
	    $("#bio-container").css("min-height",(_wh-60)+"px");
	}
}