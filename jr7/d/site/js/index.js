let container= " ";
for (let i = 0; i < 11; i++) {
    container+= " <div>"; 
    container+= " <h2>Article"+(i+1)+"</h2>";
    container+= " <img src=\"https://via.placeholder.com/300x200\"> ";
    container+= " <p>Lorem ipsum dolor sit amet consectetur.</p>";
    container+= " </div>";
    
   $("section").html(container); 
};

 


 