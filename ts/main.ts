/**
 * Represents a college student
 */
class Student{
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
    /**
     * The full address of the student.
     * Street, City, State Zip
     */
    address:string;

    /**
     * The program of study
     */
    program:string;

    /* constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    } */
}

// THIS IS TEST CODE
let stu:Student = new Student(); //This is a student object
stu.firstName = "Joe"; //SET
let fName = stu.firstName; //GET
stu.address = "123 fake street";

// Constants
const programAttr = "data-program";

window.onload = main;

function main(){
    let regBtn = document.querySelector("button") //Search for the button element
    regBtn.onclick = processForm;
}

function processForm(){
    let nextStu:Student = getStudentFromForm(); //Method should return entire student object
    displayStudent(nextStu);
    clearForm();

}

function displayStudent(s:Student):void{ //doesn't display anything void
    // Create <li>
    let newItem = document.createElement("li");
    // Adds content to list item
    newItem.innerText =
        newItem.innerText = s.firstName + " " + s.lastName;
    let displaySection =
        document.querySelector("#student-list"); //Find the child element of student-list
    let list = displaySection.querySelector("#student-list>ul");

    // Embed student data in <li>
    newItem.setAttribute(programAttr, s.program);
    newItem.setAttribute("data-address", s.address);
    newItem.setAttribute("data-birthdate", s.dateOfBirth.toString());

    console.log(newItem); //needs to be after set the attributes

    // Call showStudentData when the <li> is clicked
    newItem.onclick = showStudentData;

    // Add <li> as a child to <ul>
    list.appendChild(newItem);

}
/**
 * Shows individual student data when
 * a student <li> is clicked
 */
function showStudentData(){
    // console.log(this);
    let currListItem = <HTMLLIElement>this;
    let name = currListItem.innerText; //name was set into the currentlistitem
    let program = currListItem.getAttribute(programAttr);
    
    // alert(name + " is studying " + program);
    // Display the student name in the <h2> under the <div id="#display > h2"
    let h2 = document.querySelector("#display > h2");
    h2.innerHTML = name;

    let p = document.querySelector("#display > p");
    p.innerHTML = name + " is studying " + program;
}


function getStudentFromForm():Student{
    let tempStu = new Student();
    tempStu.firstName = getInputValue("first-name"); //this format makes it so you don't have to write more to get information repeatedly
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob")) //Because of conflicting types, wrap it in a new date function
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu);
    return tempStu;
}

function getInputValue(id:string):string{
    let elem = (<HTMLInputElement>
        document.getElementById(id)) //forcing casting to happen
    return elem.value;
}