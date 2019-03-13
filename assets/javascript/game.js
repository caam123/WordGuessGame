
//===== V A R I A B L E S  G L O B A L E S ====

//Lista de las razas
var dogsArray=["bulldog","corgi","dalmata","chihuahua","salchicha","boxer","labrador"];
//Numero random solo porque luego lo escribo mal
var randomNumber=Math.random();
//Esta nos devuelve el index de uno de las razas dentro del array previamente creado
var dogsIndex=Math.floor(randomNumber*dogsArray.length);
//Este nos devuelve el "index" random que es de una raza dentro del array dogs
var dogsRaza=dogsArray[dogsIndex];
//Aqui se guarda el valor inicial de oportunidades de adivinar, disminuye 1 sino le atinas
var guessesLeft=9;
// Se crea un array del largo de la raza a buscar, pero se sustiye cada index [i] con "_" y con join (despues) imprimimos sin comas. 
var underscore=[]
for(var i=0; i<dogsRaza.length;i++){
    underscore[i]="_";
}

//Esta linea imprime las rayitas
document.getElementById("underscore").textContent=underscore.join("");
//Esta linea imprime los wins
document.getElementById("guesses").textContent=guessesLeft;

//Pa saber que palabra magica es
console.log(dogsRaza)



document.onkeyup= function(event){
    // Es igual a la tecla que se oprime
    var letter=event.key;
    // Lo que hace el index es verificar si la letter (tecla presionada) existe dentro de la palabra random dogsRaza
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
        guessesLeft--;
        document.getElementById("guesses").textContent=guessesLeft;
        alert("Nope! Try again");

    }
    var lettersGuessed = [""];
        lettersGuessed.push(letter);
        document.getElementById("lettersGuessed").textContent=lettersGuessed;
        console.log(lettersGuessed);
 

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