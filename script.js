//darkmode
let themeBtn = document.getElementById("themeBtn");
themeBtn.onclick = function() {
    document.body.classList.toggle("dark-mode");
};

//edit job title
let editJobBtn = document.getElementById("editJobBtn");
let jobTitle = document.getElementById("jobTitle");
editJobBtn.onclick = function() {
    let newTitle = prompt("Enter new job title:");
    if (newTitle !== null && newTitle !== "") {
        jobTitle.textContent = newTitle;
    }
};

//show/hide skills
let toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
let skillsSection = document.getElementById("skillsSection");
toggleSkillsBtn.onclick = function() {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
};

//show/hide languages
let toggleLanguagesBtn = document.getElementById("toggleLanguagesBtn");
let languagesSection = document.getElementById("languagesSection");
toggleLanguagesBtn.onclick = function() {
    if (languagesSection.style.display === "none") {
        languagesSection.style.display = "block";
        toggleLanguagesBtn.textContent = "Hide Languages";
    } else {
        languagesSection.style.display = "none";
        toggleLanguagesBtn.textContent = "Show Languages";
    }
};

//live character counter
let msgBox = document.getElementById("msgBox");
let counter = document.getElementById("counter");
msgBox.onkeyup = function() {
    let remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
};

//form validation
function validateForm() {
    let name = document.getElementById("nameField").value;
    let email = document.getElementById("emailField").value;
    if (name === "" || email === "") {
        alert("Input is required.");
        return false;
    }

    return true;
}

//display today's date
let dateDisplay = document.getElementById("dateDisplay");
dateDisplay.textContent = new Date().toDateString();

//greeting based on time (extra feature)
function showGreeting() {
    let greeting = "";
    let hour = new Date().getHours();
    let greetText = document.getElementById("greetingMessage");

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    greetText.textContent = greeting;
}

showGreeting();