$(document).ready(function() {
    var id, opcion;
    opcion = 4;

    tablaProductos = $('#tablaProductos').DataTable({
        "ajax": {
            "url": "../db/productos.php",
            "method": 'POST', //usamos el metodo POST
            "data": { opcion: opcion }, //enviamos opcion 4 para que haga un SELECT
            "dataSrc": ""
        },
        "columns": [
            { "data": "id" },
            { "data": "nombre" },
            { "data": "precioCompra" },
            { "data": "precioVenta" },
            { "data": "categoria" },
            { "data": "existencia" },
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button></div></div>" }
        ]
    });

    var fila; //captura la fila, para editar o eliminar
    //submit para el Alta y Actualización
    $('#formProductos').submit(function(e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        nombre = $.trim($('#nombre').val());
        precioCompra = $.trim($('#precioCompra').val());
        precioVenta = $.trim($('#precioVenta').val());
        categoria = $.trim($('#categoria').val());
        existencia = $.trim($('#existencia').val());
        $.ajax({
            url: "../db/productos.php",
            type: "POST",
            datatype: "json",
            data: { id: id, nombre: nombre, precioCompra: precioCompra, precioVenta: precioVenta, categoria: categoria, existencia: existencia, opcion: opcion },
            success: function(data) {
                tablaProductos.ajax.reload(null, false);
            }
        });
        $('#modalCRUD').modal('hide');
    });



    //para limpiar los campos antes de dar de Alta una Persona
    $("#btnNuevo").click(function() {
        opcion = 1; //alta           
        id = null;
        $("#formProductos").trigger("reset");
        $(".modal-header").css("background-color", "#17a2b8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Alta de Productos ");
        $('#modalCRUD').modal('show');
    });

    //Editar        
    $(document).on("click", ".btnEditar", function() {
        opcion = 2; //editar
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
        nombre = fila.find('td:eq(1)').text();
        precioCompra = fila.find('td:eq(2)').text();
        precioVenta = fila.find('td:eq(3)').text();
        categoria = fila.find('td:eq(4)').text();
        existencia = fila.find('td:eq(4)').text();
        $("#nombre").val(nombre);
        $("#precioCompra").val(precioCompra);
        $("#precioVenta").val(precioVenta);
        $("#categoria").val(categoria);
        $("#existencia").val(existencia);
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Datos de los productos");
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
                url: "../db/productos.php",
                type: "POST",
                datatype: "json",
                data: { opcion: opcion, id: id },
                success: function() {
                    tablaProductos.row(fila.parents('tr')).remove().draw();
                }
            });
        }
    });

});