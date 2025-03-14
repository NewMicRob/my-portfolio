const project1btn = document.getElementById("project1");
const project1div = document.getElementById("p1info");
project1btn.addEventListener("click", function() {
    p1info.style.display = (p1info.style.display === "none") ? "block" : "none";
});

const project2btn = document.getElementById("project2");
const project2div = document.getElementById("p2info");
project2btn.addEventListener("click", function() {
    p2info.style.display = (p2info.style.display === "none") ? "block" : "none";
});

const project3btn = document.getElementById("project3");
const project3div = document.getElementById("p3info");
project3btn.addEventListener("click", function() {
    p3info.style.display = (p3info.style.display === "none") ? "block" : "none";
});

const project4btn = document.getElementById("project4");
const project4div = document.getElementById("p4info");
project4btn.addEventListener("click", function() {
    p4info.style.display = (p4info.style.display === "none") ? "block" : "none";
});

function validateForm() {
    let form = document.forms["form"];
    let fName = form["fName"].value;
    let lName = form["lName"].value;
    let email = form["email"].value;
    let tel = form["tel"].value;
    if (fName === "" || lName === "") {
        alert("Please fill in the * fields");
        return false;
    } else if(email === "") {
        alert("Please use standard email format i.e. example@email.com");
    return false;
    } else if(tel === "") {
        alert("Please enter numbers i.e. 123-123-1234");
    }
    return true;
}