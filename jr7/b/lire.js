let logo= "<img src=\" https://via.placeholder.com/150x150\" alt=\"\" class=\"logo\">";
let nav= "<ul>"
    nav += "<li>Accueil</li>"
    nav += "<li>Présentation</li>"
    nav += "</ul>"

$("header").before(logo, nav);

$(".logo").click(function(e){
    $(e.target).next().toggle(); // $(e.target): l'element lui meme > .next(): l'element suivant/ .next() != .prev()
})


// $("p").eq(1).hide();
// $("p").eq(3).hide();
// $("p").eq(5).hide();

// for (let i = 0; i <=5; i++) {
//     $("p").eq(i+(i+1)).hide();
// }

// $("p:odd").hide(); //selectionner les impaire

for (let i = 1; i <=5; i=i+2) {
    $("p").eq(i).hide();
}

$("button").click(function(e){
    $(e.target).next().toggle()
});

