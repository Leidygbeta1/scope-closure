const moneybox = (coins) =>{
    var savecoins = 0;
    savecoins += coins;
    console.log('moneybox: $${savecoins}');
}

moneybox(5);
moneybox(10);

// ahora se hara con la estructura de un closure

const moneyBox = () =>{
    var saveCoins = 0;
    const countCoins = (Coins) =>{
        saveCoins += Coins; 
        console.log (`Money box: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);//4
myMoneyBox(56);//SUMA 4+ 56
  
