function add_item(event) {
    event.preventDefault();

    try{
        const task = document.getElementById("new_item")
        const todo_list = document.getElementById("todo_list");
        const list_item = document.createElement("li");

        list_item.textContent = task.value;
        todo_list.appendChild(list_item);  // adds the new list item to the ordered list

    }
    catch(error) {
        console.log(error);
        console.log(error.status);
    }
}