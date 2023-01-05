// Seleção de Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
let oldInputValue;
var arr = [];

// Funções

// Salvar atividades
const saveTodo = (text) => {
  // Cria os elementos div e h3 da lista de atividades
  const todo = document.createElement("div");
  todo.classList.add("todo");
  const todoTitle = document.createElement("h3");
  todoTitle.innerText= text;
  todo.appendChild(todoTitle);
  // Cria os botões da Lista 
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML='<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);
  
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML='<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);
  
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);
  // adiciona os elementos na Lista de Atividades
  todoList.appendChild(todo);
  // limpa a variável
  localStorage.meuArr=JSON.stringify(arr);
  todoInput.value="";
  todoInput.focus();
};
const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo")
  
  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");
    
    console.log(todoTitle, text);
    
    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text
    }
  });
}


// Eventos
todoForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  const inputValue = todoInput.value;
  // Array para salvar dados no local Storage
  arr=[];
  if (inputValue) {
    if (localStorage.meuArr){
      arr=JSON.parse(localStorage.getItem('meuArr'));
    }
    arr.push(inputValue)
    arr.push("none");
    // Salva a atividade
    saveTodo(inputValue)
  
  };
});

// Adicionando os eventos dos botões da Lista de atividades
document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;
  // Ler os dados da LocalStorage
  if (localStorage.meuArr){
    arr=JSON.parse(localStorage.getItem('meuArr'));
  }
    
  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText;
    // Localizar o item na Array
    pos=arr.indexOf(todoTitle);
    if (pos==-1) {
      alert("Dado não existe!");
    } 

  }

  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");
    arr[pos+1]=arr[pos+1]=="none"?"done":"none";
  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();
    arr.splice(pos,2);
  }

  if (targetEl.classList.contains("edit-todo")) {
    toggleForms()
    // Salvando os valores 
    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }
  localStorage.meuArr=JSON.stringify(arr);
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if(editInputValue) {
    // atualizar
    updateTodo(editInputValue)
  }
   toggleForms()

});


