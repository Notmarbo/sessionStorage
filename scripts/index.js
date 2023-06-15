"use strict";


let userName = document.getElementById("userName");
const studentRad = document.getElementById("studentRad");
const instructorRad = document.getElementById("instructorRad");
const submitBtn = document.getElementById("submitBtn");


window.onload = () => {
    submitBtn.onclick = onSubmitBtnClicked;

}


function onSubmitBtnClicked() {
    if (studentRad.checked) {
        localStorage.setItem("userType", "student");   
    } else if (instructorRad.checked) {
        localStorage.setItem("userType", "instructor");
    }
    location.href = "info.html";
}
