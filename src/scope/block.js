const fruits = () =>{
    if(true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi';

    }
    console.log (fruits1);
    console.log(fruits2);
    console.log(fruits3);

}

fruits();

//Para let y const debe de estar dentro del bloque para que funcine
const fruits12 = () =>{
    if(true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';

        console.log(fruits2);
        console.log(fruits3);

    }
    console.log (fruits1);


}

fruits12();

//coloca 10 veces el numero 10 (con var)
const anotherfunction2= () =>{
    for( var i=0; i< 10; i ++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherfunction2();

// coloca desde 0 hastas 9 (con let)
const anotherfunction= () =>{
    for( let i=0; i< 10; i ++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherfunction();

