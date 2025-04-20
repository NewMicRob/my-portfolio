const project1btn = document.getElementById("project1");
project1btn.addEventListener("click", function() {
    window.open("https://newmicrob.github.io/Lab-7-JavaScript-Events/", "_blank");
});

const project2btn = document.getElementById("project2");
project2btn.addEventListener("click", function() {
    window.open("https://newmicrob.github.io/accessible-registration/", "_blank");
});

const project3btn = document.getElementById("project3");
project3btn.addEventListener("click", function() {
    window.open("https://newmicrob.github.io/Assignment-2-Build-a-Web-Page-Using-the-HTML5-Web-Storage-API/", "_blank");
});

const project4btn = document.getElementById("project4");
project4btn.addEventListener("click", function() {
    window.open("https://newmicrob.github.io/Group-Recipe-Project/", "_blank");
});

function validateForm() {
    alert("Validating form...");
    let fName = form["fName"].value;
    let lName = form["lName"].value;
    let email = form["email"].value;
    let tel = form["tel"].value;
    let honorifics = document.querySelectorAll('input[name="honorific"]:checked');
    if (honorifics.length === 0) {
        alert("Please select an honorific.");
        return false;
    }

    if (fName === "" || lName === "") {
        alert("Please fill in the * fields");
        return false;
    }

    if (email == "" || !validateEmail(email)) {
        alert("Please use standard email format i.e. example@email.com");
        return false;
    }

    if (tel == "" || !validatePhone(tel)) { 
        alert("Please enter phone number in the format i.e. 123-123-1234");
        return false;
    }
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(tel) {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(String(tel));
}

function openNav() {
    document.getElementById('navBar').style.width = "250px"
}

function closeNav() {
    document.getElementById('navBar').style.width = "0";
}

function toggleSwitch() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}