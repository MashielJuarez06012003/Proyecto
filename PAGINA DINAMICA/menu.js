$(document).ready(function(){
    principal();
});

function principal(){
    $("#menu a").on("click", IrA);
};

function IrA(){
    let seccion=$(this).attr("href");
    $("body,html").animate({
        scrollTop: $(seccion).offset().top -130
    },800);
    return false
}