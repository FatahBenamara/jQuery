let nav = "<ul>"
    nav+= "<li>Accueil</li>"
    nav+= "<li>Contact</li>"
    nav+= "</ul>"

$("header").html(nav);
$("header ul").before("<img src=\" https://via.placeholder.com/200x80\" alt=\"\">")

let nouveau="<h1>Les nouveautés</h1>"
$(".news").html(nouveau);

let information = "<h1>Liste des informations</h1>";
$(".infos").html(information);
$(".infos").attr("class", "homepage");