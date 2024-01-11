$(document).on("ready",principal);

function principal(){
    $(".item").on("click",AbrirAcordeon);
}

function AbrirAcordeon(){
    $(".acordeonActivado").children().eq(1).hide();
    $(".acordeonActivado").removeClass("acordeonActivado");

    $(this).children().eq(1).fadeIn();
    $(this).addClass("acordeonActivado");
}

$(document).on("ready",principal);

function principal(){
    $(".item").on("click",AbrirAcordeon);
}

function AbrirAcordeon(){
    $(".acordeonActivado").children().eq(1).hide();
    $(".acordeonActivado").removeClass("acordeonActivado");

    $(this).children().eq(1).fadeIn();
    $(this).addClass("acordeonActivado");
}