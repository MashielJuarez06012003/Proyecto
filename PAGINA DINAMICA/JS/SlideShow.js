$(document).ready(function(){
    inicio();
});

function inicio(){
    $("body").append("<div id='previewSlideShow'> <div id='imagen'>  <img src='' width='700' height='350'> <div id='descripcion'></div>  <div id='cerrar'>Cerrar</div> </div></div>");
    $("#SlideShow img").on("click",abrirImagen);
    $("#previewSlideShow #cerrar").on("click",cerrarImagen);
    $("#previewSlideShow img").on("click",cerrarImagen);
}

function abrirImagen(){
    $("#previewSlideShow").fadeIn();
    $("#previewSlideShow img").attr("src","img/SlideShow0"+($(this).index()+1)+".jpg"); 
    $("#previewSlideShow #descripcion").text($(this).attr("title"));
}

function cerrarImagen(){
    $("#previewSlideShow").fadeOut();
}