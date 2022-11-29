const inputItem = document.querySelector("#inputItem");
const toDoBox = document.querySelector(".todos");

document.getElementById("btn").onclick = function () {
    if (inputItem.value == "") {
        alert("Please insert a task")
    }
    else {
        addToDo(inputItem.value)
        inputItem.value = ""
    }

}

const addToDo = function (inputItem) {
    const toDoItem = document.createElement("p");

    toDoItem.innerHTML = `
            ${inputItem}
            <button class="del">x</button>
            `

    toDoBox.appendChild(toDoItem)

    toDoItem.querySelector('.del').addEventListener('click', function () {
        toDoItem.remove()
    }
    )


}