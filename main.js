// Séléctionne les éléments 

let cit = document.querySelector('.div2');
let cit2 = document.querySelector('.div2');
let button = document.querySelector('button');
let radioAffirmation = document.getElementById('affirmation');
let radioMantra = document.getElementById('mantra');
let reload = document.getElementById('reload');
let buttonAjout = document.getElementById('add');


let dernier = -1;
let nombreAleatoire = 0;


// Tableau affirmation

let affirmation = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre."],
    ["Le plus grand risque est de ne prendre aucun risque."],
    ["Méritez votre statut de leader chaque jour."],
    ["Soyez le changement que vous voulez voir dans le monde.",],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir."],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller."],
    ["Le succès c’est tomber sept fois, se relever huit."],
    ["La vie est belle pas moche."],
    ["Le mal c'est pas bien."]
  ];

// Tableau mantra

  let mantra = [
    ["Lala."],
    ["Bébé."],
    ["Respire pour ne pas suffoquer."],
    ["Zen."]
  ];


function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

reload.addEventListener('click', () =>{
  window.location.reload();
})

button.addEventListener('click', () =>{
  if(radioAffirmation.checked){
  do{
    nombreAleatoire = genererNombreEntier(affirmation.length)
  }while(nombreAleatoire == dernier)
  cit.textContent = affirmation [nombreAleatoire];
  cit.style.color = "blue";
} else if(radioMantra.checked){
  do{
    nombreAleatoire = genererNombreEntier(mantra.length)
  }while(nombreAleatoire == dernier)
  cit2.textContent = mantra [nombreAleatoire];
  cit2.style.color = "green";
} else {
  alert('Vous devez cocher un boutton !!!')
}
})

buttonAjout.addEventListener('click', () =>{
  if(radioAffirmation.checked){
    let nouvelleCitations = prompt("Veuillez entrer une nouvelle citation.")
    affirmation.push(nouvelleCitations)
  }else if(radioMantra.checked){
    let nouvelleCitations = prompt("Veuillez entrer une nouvelle citation.")
    mantra.push(nouvelleCitations)
  }else {
    alert('Vous devez cocher un boutton !!!')
  }
})


