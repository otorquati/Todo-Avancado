// Seleção de Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelInput = document.querySelector("#cancel-edit-btn");

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
  todoInput.value="";

};
// Eventos
todoForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  const inputValue = todoInput.value;
  if (inputValue) {
    // Salva a atividade
    saveTodo(inputValue)
  };
});