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



const busqueda = bikinis.find((bikini)=>bikini.nombre===prompt("Ingrese el nombre de la bikini que desea"))

if(busqueda != (bikinis.nombre)){
    alert("La bikini está en stock :)))");
    console.log(busqueda);
}else{
    alert(" Sin stock :(");
}