
//=====================================
var dogsArray=["bulldog","corgi","dalmata","chihuahua","salchicha","boxer","labrador"];

var randomNumber=Math.random();
//Esta nos devuelve el index de uno de los keys dentro del array previamente creado
var dogsIndex=Math.floor(randomNumber*dogsArray.length);
//Este nos devuelve el "index" random dentro del array dogs
var dogsRaza=dogsArray[dogsIndex];
//Y en realidad lo que necesitamos imprimir es el _ _ _ que corresponde al key.

var underscore=[]

for(var i=0; i<dogsRaza.length;i++){
    underscore[i]="_";
}

//Esta linea imprime las rayitas
document.getElementById("underscore").textContent=underscore.join("");
//Pa saber que palabra magica es
console.log(dogsRaza)



document.onkeyup= function(event){
    var letter=event.key;
    var index=dogsRaza.indexOf(letter);
    console.log("dogsRaza",dogsRaza);
     if(index!=-1){
        for(var i=0; i<dogsRaza.length;i++){
            if (dogsRaza[i]===letter){
                // console.log("se encontro letra",underscore)
                underscore[i]=letter;
                // console.log("se modifco underscore",underscore,letter)
            }
        }
        // console.log(underscore);
        document.getElementById("underscore").textContent=underscore.join("");
    }else{
        alert("Nope! Try again");
    }

    var guesses=9;
    for(i=9,)


    // console.log(letter);
    // console.log(index);    
 
};


//====================================================================================================================================================

 // Option push underscore into a new array
/*var dogs=[
    "corgi",
    "boxer",
    "bulldog"
];

var dogsRaza = dogs[Math.floor(Math.random()*dogs.length)];

var underscore=[]

for(var i=0; i<dogsRaza.length;i++){
    underscore[i]="_";
}

document.onkeyup= function(event){
    var letter=event.key;
    var index=dogsRaza.indexOf(letter);

    if (index>0){
            for(var i=0; i<dogsRaza.length;i++){
                if(dogsRaza[i]===letter){
                    underscore[i]=letter;
                }
            }
        }        
}
*/

//====================================================================================================================================================