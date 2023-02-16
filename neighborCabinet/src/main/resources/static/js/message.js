/**
 * message.js
 */

$(document).ready(function(){
	
	$(".requestInfo").on("click", function(){

		var resNo = $(this).attr('id');
 		$.ajax({
 			type:"post",
 			url:"/message/requestInfo/" + resNo,
 			success:function(result){
 				$('#infoResult').html(result);
 			},
 			error:function(){
 				alert("실패");
 			},
 		});
	});
});