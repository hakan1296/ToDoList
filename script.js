let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearTodo = document.getElementById('clearTodo');


addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p'); 
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);//appendChild bir alt elemente ekleme işi yapar
    paragraph.innerHTML = inputText.value;    //text kutusunun id'sinin sonuna "value" yazarak kutnun içeriğini alıp prgfa ekle
    inputText.value="";


    paragraph.addEventListener('click', function(){     //yapılan görevin click ile üstünü çizme
        paragraph.style.textDecoration = 'line-through';

    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })

    clearTodo.addEventListener('click', function(){
        paragraph.remove();
    })

})



































