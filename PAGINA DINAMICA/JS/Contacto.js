$(document).on("ready",principal);

function principal(){
    $("#bEnviar").on("click",validarFormulario);
}

function validarFormulario(){
    let nombre=$("#tfNombre").val();
    let correo=$("#tfCorreo").val();
    let asunto=$("#tfAsunto").val();
    let mensaje=$("#tfMensaje").val();

    if(nombre=="") 
    {
        $("#tfNombre").addClass("campo-vacio");
    }
    else
    {
        $("#tfNombre").removeClass("campo-vacio");
    }

    if(correo=="") 
    {
        $("#tfCorreo").addClass("campo-vacio");
    }
    else
    {
        $("#tfCorreo").removeClass("campo-vacio");
    }

    if(asunto=="") 
    {
        $("#tfAsunto").addClass("campo-vacio");
    }
    else
    {
        $("#tfAsunto").removeClass("campo-vacio");
    }

    if(mensaje=="") 
    {
        $("#tfMensaje").addClass("campo-vacio");
    }
    else
    {
        $("#tfMensaje").removeClass("campo-vacio");
    }

    if(nombre=="" || correo=="" || asunto=="" || mensaje=="") 
    {
        $("#errores").fadeIn();
        return false;
    }
    else
    {
        $("#errores").fadeOut();
        return false;
    }

}

