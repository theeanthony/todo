
//add nutton is temporary placeholder for add button
export default class DOM {

    createProjectHeader(id = 'project-header'){

        const projectHeader = document.createElement('h2');
        projectHeader.id = id;
        projectHeader.classList.add('option-container');
        projectHeader.innerHTML = `
        <span> Projects </span>
        <ul class = "options"> 
        
            <li class = "option" id = "addProjectButton"> Add </li>
        </ul>
        `;
        return projectHeader;

    }

    createProjectListItems(){

    }
    createToDoCard(){

    }

}