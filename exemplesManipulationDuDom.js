//Mets en majuscule tous le contenu des éléemnts <li>
const list = document.querySelectorAll('li');

for (let i=0; i < list.length; i++){
    console.log(list[i].textContent);
    list[i].textContent = list[i].textContent.toUpperCase();
}