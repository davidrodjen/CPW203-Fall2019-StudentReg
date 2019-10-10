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

    // Add <li> as a child to <ul>
    list.appendChild(newItem);

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