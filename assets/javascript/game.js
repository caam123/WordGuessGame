
//=== V A R I A B L E S  G L O B A L E S ====

// Lista de las razas
var dogsArray = ["bulldog","corgi","dalmata","chihuahua","salchicha","boxer","labrador"];


// la ponemos vacia para que existe, pero sui valor sera dado en setUp
var dogsRaza = "";
//var dogsRaza = dogsArray[dogsIndex];
var underscore = [];
//index testing
var index = "";

var perrito = document.getElementById("dogDisplay");





// Marcador
var wins = 0;
//Aqui se guarda el valor inicial de oportunidades de adivinar, disminuye 1 sino le atinas
var guessesLeft = 9;

// Letras ya adivinadas
var lettersGuessed = [];
    document.onkeypress = function (event){
    lettersGuessed.push(event.key);
    document.getElementById("lettersGuessed").textContent = lettersGuessed.join(" - ");
    console.log("array de guessed", lettersGuessed);
};



//===== F U N C I O N ==============

setUp()

    document.onkeyup = function StartGame (event){
        var letter=event.key;
        // Lo que hace el index es verificar si la letter (tecla presionada) existe dentro de la palabra random dogsRaza
        var index=dogsRaza.indexOf(letter);

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

        setTimeout(check,50);

    };        




 // FUNCIONES DECLARADAS POR A PARTE
 //Declaro funcion pero no la llamo aqui, sino dentro de la otra funcion   

    function setUp(){
    //Esta es la manera CORRECTA de hacerlo sino se repite siempre la misma palabra
     dogsRaza = dogsArray[Math.floor(Math.random()*dogsArray.length)];   
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
    perrito.src = "assets/img/cual.jpg"
    };




    function check(){
        var check = "_";
        var indexCheck = underscore.indexOf(check);
        //console.log(indexCheck+ "Probando check");
        if(underscore.join("")==dogsRaza){
            document.getElementById("underscore").textContent = underscore.join("");
            displayDog();
            alert("win win win winneeeer!");
            wins++;
            document.getElementById("wins").textContent = wins;
            setTimeout(clear,3000);
        }

         if (guessesLeft<0){
            alert("You lost! The word was "+ dogsRaza.toUpperCase());
            setTimeout(clear,3000);
         };
        
    };


    function displayDog(){  


        switch(dogsRaza){
            case "bulldog":
            perrito.src = "assets/img/bulldog.jpg"
            break;

            case "corgi":
            perrito.src = "assets/img/corgi.jpg"
            break;

            case "dalmata":
            perrito.src = "assets/img/dalmata.jpg"
            break;

            case "chihuahua":
            perrito.src = "assets/img/chihuahua.jpg"
            break;

            case "salchicha":
            perrito.src = "assets/img/salchicha.jpg"
            break;

            case "boxer":
            perrito.src = "assets/img/boxer.jpg"
            break;

            case "labrador":
            perrito.src = "assets/img/labrador.jpg"
            break;
        }

    }

    function clear(){
        guessesLeft = 9;
        lettersGuessed = [];
        //Este resetea a quelas rayitas queden cortas porque si despues de chihuahua seguia corgi, se veian las ultimas letras 
        underscore =["_"]
        setUp();
    }
