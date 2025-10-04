
window.addEventListener("DOMContentLoaded", function(){
    let submissions = JSON.parse(this.localStorage.getItem("submissions")) || [];

    let displayDiv = document.getElementById("display");

    submissions.forEach(item => {
        let p = document.createElement("p");
        p.textContent = item.notify;
        displayDiv.appendChild(p);
    })
})