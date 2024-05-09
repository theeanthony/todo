
import DOM from "./DOM";
import ProjectController from "./projectController";


export default class App {

    #projectController = new ProjectController();
    #domController = new DOM(); 
    #specialProjects = document.querySelector('#specialProjects');
    #projects = document.querySelector('#projectsContainer');
    #todoContainer = document.querySelector('#todoContainer');
    #selectedProject = null; 

    loadSpecials(){

    }
    loadProjects(){
        const projectHeader = this.#domController.createProjectHeader();
        this.#projects.appendChild(projectHeader);
    }

    intializeApp(){

        this.loadSpecials();

        this.loadProjects();

    }

  
}