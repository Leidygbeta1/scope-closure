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