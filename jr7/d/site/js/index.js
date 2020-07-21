let json=[
    
    {
        titre:"Photographie paysage",
        contenu:"lorem ipsum....",
        url:"https://via.placeholder.com/300x200\">"
    },
    {
        titre:"photographie portrait",
        contenu:"lorem ipsum....",
        url:"https://via.placeholder.com/300x200\">"
    }
];

let container= " ";
for (let i = 0; i < json.length; i++) {
    container+= " <div>"; 
    container+= " <h2>"+json[i].titre+"</h2>";
    container+= " <img src=\""+json[i].url +" ";
    container+= " <p>"+json[i].contenu+"</p>";
    container+= " </div>";
    
   $("section").html(container).addClass("home"); 
};



// let container= " ";
// for (let i = 0; i < 11; i++) {
//     container+= " <div>"; 
//     container+= " <h2>Article"+(i+1)+"</h2>";
//     container+= " <img src=\"https://via.placeholder.com/300x200\"> ";
//     container+= " <p>Lorem ipsum dolor sit amet consectetur.</p>";
//     container+= " </div>";
    
//    $("section").html(container).addClass("home"); 
// };
 