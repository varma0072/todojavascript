const todoInput = document.querySelector('.to-do-input');
const todoButton =document.querySelector('.to-do-button');
const todoList = document.querySelector('.to-do-list');


todoButton.addEventListener("click", addTodo );
todoList.addEventListener("click", deleteitem );

function addTodo(event){
   event.preventDefault();
   
   //creating of elements of div 
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');               // div class name

   // creating of element fo list 
   const newtodo = document.createElement('li');
   newtodo.classList.add('todo-list');
   newtodo.innerText=todoInput.value;
   todoDiv.appendChild(newtodo);

   // creating mark button 
   const todoComplete = document.createElement('button');
   todoComplete.classList.add('complete-btn');
   todoComplete.innerHTML='<i class="fas fa-check"></i>';
   todoDiv.appendChild(todoComplete)

   //creating trash button
   const todoTrash = document.createElement('button');
   todoTrash.classList.add('trash-btn');
   todoTrash.innerHTML='<i class="fas fa-trash "></i>';
   todoDiv.appendChild(todoTrash);

   //append the div to list
   todoList.appendChild(todoDiv)
   //to clear the field after entry
   todoInput.value="";
   
}

function deleteitem(e){
   const item=e.target;
   
   
   // deleting button 
   if (item.classList.value === "trash-btn"){
      const todol = item.parentElement;
      todol.remove();

      
   }     
   // complete the button
   if(item.classList.value === "complete-btn"){
      const todole = item.parentElement;
      todole.classList.toggle('completed');
      
   }
}
