const namesParagraphs = [...document.querySelectorAll(".label")];

let names=[]; //Definindo um array com os nomes dos personagens.
for (i=0;i<namesParagraphs.length;i++){
  console.log(namesParagraphs[i].textContent);
  names.push(namesParagraphs[i].textContent);
}
console.log(names);


let searchInput;
let searchValue;



const searchButton = document.querySelector(".button");

function search(){
  searchInput = document.querySelector(".filter-input");
  searchValue = searchInput.value;
  console.log(searchValue);
  //Agora: só exibe itens que tiverem o searchValue no texto do título (label)
};


searchButton.addEventListener("click",search);