var nombre= document.getElementById('nombre');
var email= document.getElementById('email');
var comentario= document.getElementById('comentario');
var boton= document.getElementById('boton');

var comentarioSection= document.getElementById('comments');

boton.addEventListener('click', function(){
   
    var item= document.createElement('div');
    var nombreSpan= document.createElement('span');
    nombreSpan.innerHTML= '<br>'+ 'Nombre:   '+ nombre.value  + '<br>';

    var emailSpan= document.createElement('span');
    emailSpan.innerHTML= 'Email:   '+email.value + '<br>';

    var comentarioSpan= document.createElement('span');
    comentarioSpan.innerHTML= 'Comentario:   '+ comentario.value  + '<br>';

    item.appendChild(nombreSpan);
    item.appendChild(emailSpan);
    item.appendChild(comentarioSpan);

    item.className= "estilosComentario";    
    comentarioSection.appendChild(item);

    nombre.value=" ";
    email.value=" ";
    comentario.value=" ";

    
});

