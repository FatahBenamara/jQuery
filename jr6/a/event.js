
$(".img1").attr("src", "https://via.placeholder.com/150x150");
$(".img2").attr("src", "https://via.placeholder.com/300x300");



// CLICK

$("button").click(function(){
    alert("azul");
});

//afficher dans la console un texte en cliquant sur limage
$(".img1").click(function(){
    console.log("j'ai cliqué sur l'image 01")
});

// MOUSEOVER MOUSELEAVE
$(".p1").mouseover(function(){
    $(this).css("font-size","1.3em")
});

$(".p1").mouseleave(function(){
    $(this).css("font-size","1em");
});

$(".img2").mouseover(function(){
    $(this).css("border",("1px solid red"))
});
$(".img2").mouseleave(function(){
    $(this).css("border",(""))
});


