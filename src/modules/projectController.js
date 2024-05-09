

import ToDo from "./toDo";
import Project from "./project";

export default class ProjectController {

    constructor(){
        this.projects = {}
    }

    addProject(title){
        if(this.getProject(title)){
            console.log("Project with this title already exists.")
            return;
        }
        const project = new Project(title);
        this.projects[title] = project; 
        return project; 
    }
    deleteProject(title){
        const deleteProject = this.getProject(title);
        delete projects[title];
        return deleteProject;
    }

    getProject(title){
        return projects[title];
    }

    getProjectsArray(){
        let projectArray = [] ; 
        for( const projectTitle in this.projects){
            projectArray.push(this.projects[projectTitle]);
        }
        return projectArray;
    }


}