$(".p1").html("Modifier le premier paragraphe");

// AddParagraphe a la fin:append
$(".p2").append(" Cette phrase est ajouter à la fin avec APPEND");

// AddParagraphe au début:prepend
$(".p3").prepend("Cette phrase est ajouter au début avec PREPEND. ");

//Before, after
let logo = " <img src=\" https://via.placeholder.com/200x80\" alt=\"\">" ;
$(".menu").before(logo);

$(".p5").after("ce paragraphe est ajouter apres .p5");

//ajouter autour: emballage
$(".p6").wrap()