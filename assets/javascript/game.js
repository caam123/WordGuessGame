/* var dogs={
    "boxer":"_____",
    "bulldog":"_______",
    "corgi":"_____"
};
//Object.key(dogs) crea un array de las keys del objeto, aqui despliega las razas en array
var dogsArray=Object.keys(dogs);
//esta la puse porque no la escribia bien y me desespere
var randomNumber=Math.random();
//Esta nos devuelve el index de uno de los keys dentro del array previamente creado
var dogsIndex=Math.floor(randomNumber*dogsArray.length);
//Este nos devuelve el "key" random dentro del objeto dogs
var dogsKey=dogsArray[dogsIndex];
//Y en realidad lo que necesitamos imprimir es el _ _ _ que corresponde al key.
var underscore=dogs[dogsKey]; */


var dogs=[
    "corgi",
    "boxer",
    "bulldog"
];

var dogsKey = dogs[Math.floor(Math.random()*dogs.length)];

var underscore=[]

for(var i=0; i<dogsKey.length;i++){
    underscore[i]="_";
}



//Esta funcion imprime las rayitas al cargar la pagina
function myValue(){
    document.getElementById("underscore").innerHTML=underscore;
    console.log(dogsKey);

}


// Esta es la funcion que displayea los _ _ _ de una key random. 
document.onkeyup= function(event){
    var letter=event.key;
    var index=dogsKey.indexOf(letter);

    if (index>0){
            for(var i=0; i<dogsKey.length;i++){
                if(dogsKey[i]===letter){
                    underscore[i]=letter;
                }
            }
        }        
}


/*     if(dogsKey.indexOf(letter)!=-1){
        for(var i=0; i<dogsKey.length;i++){
            if (dogsKey[i]===letter)
            underscore[i]=dogsKey[i];
            document.getElementById("underscore").innerHTML=underscore;
            console.log(index);
        }
    }else{
        alert("wrong");
    }
 */

