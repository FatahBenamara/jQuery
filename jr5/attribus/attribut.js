$("h1").attr("id","presentation")

$("img").attr("src","https://via.placeholder.com/150x150");
// css objet et jquery
let stylep ={
    "color": "red",
    "font-size" : "1.2em", 
    "letter-spacing":20,
    "font-family" : "arial",
    "margin": 0,
};

$("p").eq(0).attr("class","intro2").css(stylep);

$("p").eq(2).attr("id","section");
$("#section").after("<hr>")

