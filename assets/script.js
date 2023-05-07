//Desconstruindo array

let list = ['Rafael Pereira', 'Rafael', 'Pereira', '@rafaelpersan'];

let [nomeCompleto, , , rede ] = list;

console.log(nomeCompleto, rede);


//Arrow functions 

/*function somar(x, y){
    return x + y; 
}*/

/*let somar = function(x, y){
    return x + y;
}*/

let somar = (x, y) => x + y;

console.log(somar(10, 20));