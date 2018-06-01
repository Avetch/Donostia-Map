 $(document).ready(function() {
 	
 	$("#socio1").click(function() {
 		$("#imagencentral").append();

    $("#socio2").click(function() {
 		$("#imagencentral").append();

 	$("#socio3").dblclick(function() {
 		$("#imagencentral").append();

 	$("#socio4").dblclick(function() {
 		$("#imagencentral").append();

 	});

 	$("#pequeño").click(function(){
 		$("#logo").css({ 'width':'20%', 'height':'20%'};
 			   $("#pequeño").blend();

 
 	$("#grande").click(function(){
 		$("#logo").css({'width':'120%', 'height':'120%'};
 		$("button").css({'width':'5%', 'height':'5%'};
 		$("#grande").blend();

	
	$("#ocultar").click(function(){
		$("#logo").blend();
		$("#ocultar").blend();

	$("#mostrar").click(function(){
		$("#mostrar").blend();

	})

	$("#ocultar").click(function(){
		$(this).hide();

	$("#mostrar").click(function(){
		$(this).show();

 	});

});