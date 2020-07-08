$("ul li a").eq(0).html("Nouvel article")

let info="<b>";
    info += "information technique";
    info +="</b>";
$("ul li a").eq(2).html(info);

$("ul li a").eq(7).html("fin");

let peu="<p>";
    peu += "un peu de texte ajouté via le script";
    peu +="</p>";
$(".item").html(peu);
$("#titre").prepend("préfixe-").append("-suffixe");

let hr="<hr></hr>"
$("h1").after(hr)

let pr="<p>ceci est un paragraphe</p>"
$("h1").before(pr)