$(document).ready(function(){
	$("body").addClass("js");
	$("span").addClass("checked").children("input");
	$(".login span").on("click",function(){
		if ($(this).children('input').attr('checked')) {
            $(this).children('input').attr('checked', false);
            $(this).removeClass('checked');
        }
 
        else {
            $(this).children('input').attr('checked', true);
            $(this).addClass('checked');
        }
 
	})
});