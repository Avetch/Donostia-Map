 $(document).ready(
 	function() {

 	 	$("#socio1").click(
 	 		function() {
 		$("#imagencentral").attr("src", "imagenes/socio1.jpg");

 		 	$("#socio2").click(
 		 		function() {
 		$("#imagencentral").attr("src", "imagenes/socio2.jpg");
 		

 		 	$("#socio3").dbclick(
 		 		function() {
 		$("#imagencentral").attr("src", "imagenes/socio3.jpg");

 		 	$("#socio4").dbclick(
 		 		function() {
 		$("#imagencentral").attr("src", "imagenes/socio4.jpg");

});

$("#pequeño").click(function(){
 		$("#logo").attr('width':'20%', 'height':'20%';
 		$("#pequeño").css("opacity",1);

 $("#grande").click(function(){
 		$("#logo").attr('width':'120%', 'height':'120%');
 		$("grande").css("opacity",0.3);
 		$("#pequeño").css("opacity",1);
 });

 $("#mostrar").click(function(){
 		$("#logo").css("opacity",1);
		$("#mostrar").css("opacity", 0.3);
		$("#ocultar").css("opacity,1");

 });

$("#ocultar").click(function(){
		$("#logo").css("opacity",0.3);
		$("#ocultar").css("opacity", 0.3);
		$("#mostrar").css("opacity", 1);

 });

