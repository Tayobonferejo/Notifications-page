

const userForm = document.getElementById("userForm");

userForm.addEventListener("submit" , function(event){
    event.preventDefault();
    let notification = document.getElementById("notification");
    let notify = notification.value;

    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    submissions.push({notify});

    window.location.href="notify.html";

    // save back to localStorage

    localStorage.setItem("submissions" , JSON.stringify(submissions));

})