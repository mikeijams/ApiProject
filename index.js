const baseurl = "https://pokeapi.co/api/v2/pokemon/";
var results = document.getElementById('results');
var search = document.getElementById('search');
var div = document.getElementById('container');
var abilty = document.getElementById('ability')

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', getResults)

function getResults(e){
    e.preventDefault();
    url = baseurl + `${search.value}`


fetch (url)
.then(function(response){
    return response.json();
})
.then(function(json){
    console.log(json)
    displayResults(json)

})
.catch(function(err){
    console.log(err)
    catchUrl(err);
});


}

function displayResults(json){

    console.log(json);


    
    //  moves = json.moves
    //  console.log(moves);
    //  for (m of moves){
     
    //   console.log(m.move.name)
    //   movesName = m.move.name
        

    pokemon = json.abilities

    for (p of pokemon){
        console.log(p)

    
         results.innerText = `${search.value} chose ${p.ability.name}` 


      }

    }






function catchUrl(err){

    results.innerText = "Sorry No Pokemon :("
 
}

