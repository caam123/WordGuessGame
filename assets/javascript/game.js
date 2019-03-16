
//=== V A R I A B L E S  G L O B A L E S ====

// Lista de las razas
var dogsArray = ["bulldog","corgi","dalmata","chihuahua","salchicha","boxer","labrador"];

var randomNumber = Math.random();
// Esta nos devuelve el index de uno de las razas dentro del array previamente creado
var dogsIndex = Math.floor(randomNumber*dogsArray.length);
// Este nos devuelve el "index" random que es de una raza dentro del array dogs
// la ponemos vacia para que existe, pero sui valor sera dado en setUp
var dogsRaza = "";
var underscore = [];





// Marcador
var wins = 0;
//Aqui se guarda el valor inicial de oportunidades de adivinar, disminuye 1 sino le atinas
var guessesLeft = 9;

// Letras ya adivinadas
var lettersGuessed = [];
    document.onkeypress = function (event){
    lettersGuessed.push(event.key);
    document.getElementById("lettersGuessed").textContent = lettersGuessed;
    console.log("array de guessed", lettersGuessed);
};



//===== F U N C I O N ==============

setUp()

    document.onkeyup = function StartGame (event){
        //No se porque pero tuve que repetirlo aqui. Ya no entendi porque si la declare global vacia, no deberia tomar el valor de la que esta en setUp? Preguntar
        var dogsRaza = dogsArray[dogsIndex];
        // Es igual a la tecla que se oprime
        var letter=event.key;
        // Lo que hace el index es verificar si la letter (tecla presionada) existe dentro de la palabra random dogsRaza
        var index=dogsRaza.indexOf(letter);
        //console.log("fuck you" + dogsRaza);
    
         if(index!=-1){
            for(var i=0; i<dogsRaza.length; i++){
                if (dogsRaza[i]===letter){
                    //console.log("se encontro letra",underscore)
                    underscore[i]=letter;
                    // console.log("se modifco underscore",underscore,letter)
                }
            }
            // console.log(underscore); imprime de nuevo el underscore con el index cambiado por letra 
            document.getElementById("underscore").textContent=underscore.join("");
        }else{
            //Si no encuentra match entonces disminuye los guesses en -1
            guessesLeft--;
             //Imprime los guesses left
            document.getElementById("guesses").textContent=guessesLeft;
            //alerta que no es la letra
            alert("Nope! Try again");
        }

        check();
    };        



 //Declaro funcion pero no la llamo aqui, sino dentro de la otra funcion   

    function setUp(){
        
    var dogsRaza = dogsArray[dogsIndex];
    //console.log("setup " + dogsRaza)
    // Se crea un array del largo de la raza a buscar, pero se sustiye cada index [i] con "_" y con join (despues) imprimimos sin comas. 
    for(var i=0; i<dogsRaza.length; i++){
    underscore[i] = "_";
    }    
    // Esta linea imprime las rayitas
    document.getElementById("underscore").textContent = underscore.join("");
    // Esta linea imprime los guesses que te quedan
    document.getElementById("guesses").textContent = guessesLeft;
    // Pa saber que palabra magica es
    console.log(dogsRaza)
    };




    function check(){
        var check = "_";
        var indexCheck = underscore.indexOf(check);
        //console.log(indexCheck+ "Probando check");
        if (indexCheck<0){
            wins++;
            document.getElementById("wins").textContent = wins;
            document.getElementById("underscore").textContent = underscore.join("");
            alert("You have won");
            //setUp();
         };

         if (guessesLeft<0){
             alert("You lost");
             //setUp();
         };
        
    };


    function clear(){
        
    }

//Seguro hay una manera mas eficiente de hacer esto pero no se


/*     var lettersGuessed=[];
        lettersGuessed.push(event.key);
        document.getElementById("lettersGuessed").textContent=lettersGuessed;        
        console.log(lettersGuessed); */


//====== OPCION TROPICALIZADA FUERA DE LA FUNCION GENERAL ¿? NO SE PORQUE =======/





// ======================================== OPCION DE WINDOW ADD EVENT LISTENER ==========================================
/*     var lettersGuessed = [];

        window.addEventListener('keypress', function (event){
            lettersGuessed.push(event.key);
            document.getElementById("lettersGuessed").textContent = lettersGuessed.join("");
        })
 */

//====================================================================================================================================================




/* var listLetters=document.createElement("li");
listLetters.appendChild(document.createTextNode(letter));

document.getElementById("lettersGuessed").appendChild=listLetters;
console.log(listLetters);*/


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