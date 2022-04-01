const person =() =>{
    var savename= "Name";
    return{
        getname: ()=>{
            return savename;

        },
        setname: (name) =>{
            savename = name;
        
        },

    };
};

newperson = person();
console.log(newperson.getname());
newperson.setname('Leidy');
console.log(newperson.getname());