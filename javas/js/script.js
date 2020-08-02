let contactos = []

$(document).ready(function(){

    cargarContactos();
    
    $('#agregarContacto').on('click',function(){
        
        let formulario = $(this).parent().parent();
        incluirContacto(formulario.find('#txtNombre').val(), formulario.find('#txtTelefono').val(), formulario.find('#txtEmail').val
        ());
     
    });

});



function cargarContactos(){
    $.ajax({
         type: "get",
         url: 'contactos.json',
         success: function(data){
             for(let i=0; i<data.length; i++){
                 incluirContacto(data[i].nombre, data[i].telefono, data[i].email);
             }  
         }
     });
 }



function incluirContacto(nombre, telefono, email){

    const contacto = new Contacto(nombre, telefono, email);
    contactos.push(contacto);
 

    let row = $('<div class="row " ></div>');
    row.prepend('<div class="col-12 justify-content-center "></div>')
    row.find('.col-12').prepend('<div class="card mb-3" style="max-width: 500px;"></div>');
    row.find('.card').prepend('<div class="row no-gutters"></div>');
    row.find('.row ').prepend('<div class="col-md-4"></div>');
    var foto = "https://avatars.dicebear.com/api/bottts/"+ contacto.nombre + ".svg" 
    row.find('.col-md-4').prepend('<img src="' + foto + '".svg" class="img-fluid" alt="Responsive image" id="foto">');
    row.find('.row').append('<div class="col-md-8"></>');
    row.find('.col-md-8').prepend('<div class="card-body"></>');
    row.find('.card-body').append('<h5 class="card-title">' + contacto.nombre +'</h5>');
    row.find('.card-body').append('<p class="card-text">' + contacto.telefono + '</p>');
    row.find('.card-body').append('<p class="card-text">' + contacto.email + '</p>');
    $('#listaContactos').find('#titulo2').after(row);
}

class Contacto{

    constructor(nombre, telefono, email){
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
}