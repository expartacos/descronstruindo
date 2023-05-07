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


//Operador Spread 

function novaInfo(inf){
    let nova = {
        ...inf,
        status: 0,
        id: 10, 
        token: 'L'
    }
    return nova;
}

console.log(novaInfo({nome:'Rafae', sobrenome:'Pereira'}));