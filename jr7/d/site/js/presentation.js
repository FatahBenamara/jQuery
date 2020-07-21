let present= " ";
for (let i = 0; i < 11; i++) {
     
    present+= " <div>"; 
    present+= " <img src=\"https://via.placeholder.com/400x200\"> ";
    present+= " <p> Projet"+(i+1)+"</p>";
    present+= " </div>";
    
   $("section").html(present).addClass("presentation"); 
};
