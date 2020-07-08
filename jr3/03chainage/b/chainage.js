
/* HEADER */
$("header").html("<img src=\" https://via.placeholder.com/200x80\" alt=\"\">")

for (let i = 0; i < 4; i++) {
    $("li").eq(i).html("élèment"+(i+1));
}

/* SECTION */
let image ="";
for (let i = 0; i < 10; i++) {
    
    image += "<img src=\" https://via.placeholder.com/350x200\" alt=\"\">";
}

$("section").html(image)
            .css("display","grid")
            .css("grid-template-columns","repeat(4,1fr)")
            .css("grid-gap",10)
            

/* FOOTER */
$("footer").html("Benamara Fatah -"+(new Date()).getFullYear())
            .css("text-align", "center")
            .css("text-shadow","2px 2px 2px grey")