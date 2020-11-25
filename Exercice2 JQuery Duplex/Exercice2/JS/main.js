// $('button').click(function(){
//     $('#div1').slideToggle(10000);
//     $('#div2').slideToggle(10000);

// });

$('button').click(function(){
    $("#div1,#div2").toggleClass("red");
});