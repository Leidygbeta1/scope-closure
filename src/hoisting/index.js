//hoisting eleva las declaraciones 
a = 2;
var a;
console.log(a); //2

//En este nos tira eror por el orden de los declara
console.log(a);
var a = 2;

