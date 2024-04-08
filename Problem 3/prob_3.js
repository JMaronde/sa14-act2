function add_item(event) {
    event.preventDefault();

    try{
        const task = document.getElementById("new_item")
        const todo_list = document.getElementById("todo_list");
        const list_item = document.createElement("li");

        list_item.textContent = task.value;

        // creating the delete button
        const delete_button = document.createElement("button");
        delete_button.textContent = "Delete";
        
        delete_button.onclick = function delete_item(event) {
            event.preventDefault();
            const index = Array.from(todo_list.children).indexOf(list_item); // gets the index of the current list item
            todo_list.removeChild(todo_list.children[index]); // removes the list item
            todo_list.removeChild(delete_button); // removes the delete button
        }

        todo_list.appendChild(list_item);  // adds the new list item to the ordered list
        todo_list.appendChild(delete_button) // adds a delete button next the the new list item


    }
    catch(error) {
        console.log(error);
        console.log(error.status);
    }
}