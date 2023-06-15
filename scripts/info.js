"use strict";


window.onload = () => {
    const userType = localStorage.getItem("userType");
    const userName = localStorage.getItem("userName")

    if (userType == "student") {
        console.log(userType);
     
    } else if (userType == "instructor") {
        console.log(userType)
   
       
    }


    localStorage.removeItem("userType");
}
