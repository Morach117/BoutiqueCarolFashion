$(document).ready(function() {
    var id, opcion;
    opcion = 4;

    tablaEmpleados = $('#tablaEmpleados').DataTable({
        "ajax": {
            "url": "../db/empleados.php",
            "method": 'POST', //usamos el metodo POST
            "data": { opcion: opcion }, //enviamos opcion 4 para que haga un SELECT
            "dataSrc": ""
        },
        "columns": [
            { "data": "id" },
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "direccion" },
            { "data": "telefono" },
            { "data": "email" },
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button></div></div>" }
        ]
    });

    var fila; //captura la fila, para editar o eliminar
    //submit para el Alta y Actualización
    $('#formEmpleados').submit(function(e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        nombre = $.trim($('#nombre').val());
        apellido = $.trim($('#apellido').val());
        direccion = $.trim($('#direccion').val());
        telefono = $.trim($('#telefono').val());
        email = $.trim($('#email').val());
        $.ajax({
            url: "../db/empleados.php",
            type: "POST",
            datatype: "json",
            data: { id: id, nombre: nombre, apellido: apellido, direccion: direccion, telefono: telefono, email: email, opcion: opcion },
            success: function(data) {
                tablaEmpleados.ajax.reload(null, false);
            }
        });
        $('#modalCRUD').modal('hide');
    });



    //para limpiar los campos antes de dar de Alta una Persona
    $("#btnNuevo").click(function() {
        opcion = 1; //alta           
        id = null;
        $("#formEmpleados").trigger("reset");
        $(".modal-header").css("background-color", "#17a2b8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Alta de Empleados ");
        $('#modalCRUD').modal('show');
    });

    //Editar        
    $(document).on("click", ".btnEditar", function() {
        opcion = 2; //editar
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
        nombre = fila.find('td:eq(1)').text();
        apellido = fila.find('td:eq(2)').text();
        direccion = fila.find('td:eq(3)').text();
        telefono = fila.find('td:eq(4)').text();
        email = fila.find('td:eq(5)').text();
        $("#nombre").val(nombre);
        $("#apellido").val(apellido);
        $("#direccion").val(direccion);
        $("#telefono").val(telefono);
        $("#email").val(email);
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Datos Empleados");
        $('#modalCRUD').modal('show');
    });

    //Borrar
    $(document).on("click", ".btnBorrar", function() {
        fila = $(this);
        id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        opcion = 3; //eliminar        
        var respuesta = confirm("¿Está seguro de borrar el registro " + id + "?");
        if (respuesta) {
            $.ajax({
                url: "../db/empleados.php",
                type: "POST",
                datatype: "json",
                data: { opcion: opcion, id: id },
                success: function() {
                    tablaEmpleados.row(fila.parents('tr')).remove().draw();
                }
            });
        }
    });

});