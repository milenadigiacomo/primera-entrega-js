 const bikinis=[
    {
        codigo:"2345123",
        nombre:"mara",
        modelo:"bikini",
        precio:3450
    },
    {
        codigo:"2343456",
        nombre:"raquel",
        modelo:"bikini",
        precio:2700
    },
    {
        codigo:"2348973",
        nombre:"manuela",
        modelo:"enteriza",
        precio:3350
    },
    {
        codigo:"2370915",
        nombre:"nicole",
        modelo:"bikini",
        precio:3800
    }
];



 let encontrado=bikinis.find((bikini)=>bikini.nombre=="mara");
  console.log(encontrado);

 encontrado =bikinis.find((bikini)=>bikini.nombre=="raquel");
 console.log(encontrado);

 encontrado =bikinis.find((bikini)=>bikini.nombre=="nicole");
 console.log(encontrado);

   if(encontrado != undefined){
     console.log("La bikini está en stock :)))");
     console.log(encontrado);
 }else{
     console.log(" Sin stock :(");
 }