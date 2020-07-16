$("header li").eq(1).after("<li> Nous contacter </li>");
$("header li").eq(2).after("<img src=\" https://via.placeholder.com/150x50\" alt=\"\" >");

$("section h1").after("<hr>");

$(".envoyer").click(function(e){
     e.preventDefault(); 
   
    let email = $(".email").val().trim();
    let reponse ="Votre email est: " + email +" merci pour votre réponse";

    if (email!="") {
        
        $(".message").html(reponse);
        $(".email").removeClass("error").val(""); //.val("") vider le champ mail

    }else{
       $(".message").html("veuillez saisir votre email");
       $(".email").addClass("error").val("");
    }

});

