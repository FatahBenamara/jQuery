let entete= "<img src=\" https://via.placeholder.com/150x50\" alt=\"\" >";
    entete+="<ul>";
    entete+="<li><a href=\"index.html\">Accueil</a></li>";
    entete+="<li><a href=\"presentation.html\">Présentation</a></li>";
    entete+="<li><a href=\"contact.html\">Contact</a></li>";
    entete+="</ul>";
$("header").html(entete);

let pied ="Fatah "+(new Date()).getFullYear();
$("footer").html(pied);