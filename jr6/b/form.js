// Afficher le resultat (suffixe) d'une reponse (valeur stocké):


$("button").click(function(){

    let nom = $(".nom").val(); //val() => value="":recuperer la valeur des balises input /textarea/ select
    let age = $(".age").val();
    let reponse ="Resultat: je m'appel " + nom +" "+ "j'ai "+age+".";

    //$(".result").append(reponse); //Ajouter les reponse a la chaine
    $(".result").html(reponse);
});