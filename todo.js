const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
console.log(input, button, ul);

button.addEventListener("click", () => {
  input.value= input.value.trim();
    if (input.value === "") {
      return;
  }
  const newLi= document.createElement("li");

  const taskText= document.createElement("span");
    taskText.innerText= input.value;
      newLi.appendChild(taskText);

      taskText.addEventListener("click", () => {
    taskText.classList.toggle ("completed");
  });

  const deleteButton = document.createElement("button");
    deleteButton.innerText= "Supprimer";
      newLi.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    newLi.remove();
  });

    ul.appendChild(newLi);
        input.value= "";
          input.focus();
  });