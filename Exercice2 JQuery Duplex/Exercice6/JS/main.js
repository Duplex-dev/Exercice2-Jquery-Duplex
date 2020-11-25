$("#Désactiver").click(function(){
    jQuerry.fx.off = true;
});
$("#Activer").click(function(){
    jQuerry.fx.off = false;
});
$("#toggle").click(function(){
    $("div").toggle(2000);
});
