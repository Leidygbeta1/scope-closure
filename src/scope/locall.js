const helloworld = ()=>{
    const hello = 'hello world';
    console.log(hello);
}

helloworld();
console.log(hello);

var scope = 'i am global';

const functionScope = () =>{
    var scope ='i am just a local';
    const func = () =>{
        return scope
    }
    console.log(func());
};

functionScope();

nameOfDog("Elmo"); 

function nameOfDog(name) 

{ console.log(name); };