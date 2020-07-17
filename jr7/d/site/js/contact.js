let formulaire="";

formulaire+= "<form>";
formulaire+= " <input   class=\"nom\">";
formulaire+= "<textarea   class=\"commentaire\"></textarea> ";
formulaire+= " <input type=\"submit\"   class=\"envoyer\">";
formulaire+= "</form>";
formulaire+= "<p class=\"message\"></p>";



$("section").html(formulaire);
 
$(".envoyer").click(function(e){

    e.preventDefault();
    let nom = $(".nom").val().trim(); 
    let commentaire = $(".commentaire").val().trim(); 
    let reponse ="Resultat: je m'appel " + nom +". "+ "J'ai écris ceci: "+commentaire+".";



    if (nom!="" && commentaire!="") {
        //$(".result").append(reponse); //Ajouter les reponse a la chaine
        $(".message").html(reponse);
        $(".nom").val(" "); //vider le champ quand je fais envoyer
        $(".commentaire").val(" ");
    }else{
        $(".message").html("veuillez saisir les champs non remplis");
    }











});







    
    
    

