

import ToDo from "./toDo";

export default class Project {
    constructor(name){
        this.name = name; 
        this.todoList = {};
    }
    addTodo(title,
        description,
        dueDate,
        priority,
        note){

            if (this.getToDo(title)){
                console.log("Todo with this title already exists");
            }
            const toDo = new ToDo(title,description,dueDate,priority,note);
            toDo.parentProject = this.name; 
            this.todoList[title] = toDo; 
            return toDo;

        
    }
    deleteTodo(title){

        const deleteTodo = this.getToDo(title);
        delete this.todoList[title];
        return deleteTodo;

    }
    editTodo(){

    }
    getToDo(titleOfToDo){
        return todoList[titleOfToDo];
    }
       
}