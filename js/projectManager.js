//Projects
let project1 = document.getElementById("project-1");
let project2 = document.getElementById("project-2");

//Buttons
let btnProject1 = document.getElementById("btn-project-1");
let btnProject2 = document.getElementById("btn-project-2");

//Form create project
let formCreateProject = document.getElementById("form-create-project");
let inputProjectName = document.getElementById("inputProjectName");
let errorProjectName = document.getElementById("errorProjectName");

//Form create project icon
formCreateProject.addEventListener("submit", (e) => {
    e.preventDefault();
    let projectName = inputProjectName.value;
    let banner = true;

    if (projectName == ""){
        errorProjectName.classList.add("si-visible");
        errorProjectName.classList.remove("no-visible");

        inputProjectName.style.boxShadow = "inset 0 0 0 2px #4111CA";
        banner = false;
    }
    if (banner){
        formCreateProject.submit();
    }
});
inputProjectName.addEventListener("click", () => {
    errorProjectName.classList.remove("si-visible");
    errorProjectName.classList.add("no-visible");
    inputProjectName.style.boxShadow = "none";
});

//Button events
btnProject1.addEventListener("click", () => {
    if (project1.className.includes("no-visible")){
        project1.classList.add("si-visible-project");
        project1.classList.remove("no-visible");
        
        project2.classList.add("no-visible");
        project2.classList.remove("si-visible-project");

        btnProject1.classList.add("selected");
        btnProject2.classList.remove("selected");
    }
});
btnProject2.addEventListener("click", () => {
    if (project2.className.includes("no-visible")){
        project2.classList.add("si-visible-project");
        project2.classList.remove("no-visible");

        project1.classList.add("no-visible");
        project1.classList.remove("si-visible-project");

        btnProject2.classList.add("selected");
        btnProject1.classList.remove("selected");
    }
});
