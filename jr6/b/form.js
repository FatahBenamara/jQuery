// Afficher le resultat (suffixe) d'une reponse (valeur stocké):


$("button").click(function(e){
    // e.preventDefault(); //bloquer le rechargement de input submit
    // $(e.target).val();
    let nom = $(".nom").val().trim(); //val() => value="":recuperer la valeur des balises input /textarea/ select
    let age = $(".age").val().trim(); //.trim: enlever les espaces
    let reponse ="Resultat: je m'appel " + nom +" "+ "j'ai "+age+".";

    //verifier que les champs sont remplis
    if (nom!="" && age!="") {
        //$(".result").append(reponse); //Ajouter les reponse a la chaine
        $(".result").html(reponse);
        $(".nom").val(":)"); //vider le champ quand je fais envoyer
        $(".age").val(":)");
    }else{
       alert("veuillez saisir votre nom et votre age");
    }

    
});

//les evenement (e)
$(".result").click(function(e){
    console.log(e);
    $(e.target).html("je suis cliqué"); //$(e.target) = $(this)
});


