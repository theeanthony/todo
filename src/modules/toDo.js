

export default class ToDo {

    constructor(
        title,
        description,
        dueDate,
        priority,
        note,
        completed = false,
        completionDate = null

    ){

        this.title = title;
        this.description = description; 
        this.dueDate = dueDate;
        this.priority = priority;
        this.note = note; 

        this.completed = completed ? true : false; 

        if (Object.prototype.toString.call(completionDate) === '[object Date]'){
            this.completionDate = completionDate; 
        }
    }
    toggleCompletion(){
            
        if (completed){
            this.completed = false ; 
            this.completionDate = null; 
        }else{
            this.completed = true ; 
            this.completionDate = new Date();  
        }
    }
}