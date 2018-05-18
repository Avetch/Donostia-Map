function ObjetoAjax () {
    var nuevoajax=creaObjetoAjax()
    this.objeto=nuevoajax;
    this.pedirTexto=pedirTextoAjax;
    this.cargaXML=cargarXML
    }	

    /*función del método cargaXML: devuelve el DOM del XML	
como parámetro de la función que le pasamos*/
function cargarXML(url,funcion) {
    var nuevoajax=this.objeto; //crear objeto XMLHttpRequest
    var funcionXML=funcion //recoger función
    nuevoajax.open("GET",url,true); //preparar el envio
    nuevoajax.onreadystatechange=function() { //al cargarse el archivo...
       if (nuevoajax.readyState==4) {
          propiedad=nuevoajax.responseXML; //recoger el DOM
          funcionXML(propiedad); //devolverlo como parámetro.
          }
       }	
    nuevoajax.send();envio
    }
