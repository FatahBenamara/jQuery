let entete= "<img src=\" https://via.placeholder.com/150x50\" alt=\"\" >";
    entete+="<ul>";
    entete+="<li><a href=\"index.html\">Accueil</a></li>";
    entete+="<li><a href=\"presentation.html\">Présentation</a></li>";
    entete+="<li><a href=\"contact.html\">Contact</a></li>";
    entete+="</ul>";

$("header")
    .html(entete);

$("header img")
    .click(function(){
        $("header ul").toggle();
});


// $("header img").mouseenter(function(e){
//     $(e.target).css("transform","scale(1.2) rotateZ(10deg)");
//     $(e.target).addClass("move");
// })
// .mouseout(function (e) { 
//     $(e.target).css("transform","scale(1)");
//     $(e.target).removeClass("move");
// });

$("header img")
    .mouseenter(function(e){
        $(e.target).addClass("move");
})
    .mouseout(function (e) { 
        $(e.target).removeClass("move");
});















let pied ="Fatah "+(new Date()).getFullYear();
$("footer").html(pied);

