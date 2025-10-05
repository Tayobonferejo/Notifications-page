
window.addEventListener("DOMContentLoaded", function() {
    // Get all saved submissions
    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    let displayDiv = document.getElementById("display");

    if (submissions.length === 0) {
        displayDiv.textContent = "No notifications found.";
        return;
    }

    // Loop through and display clickable notifications
    submissions.forEach((item, index) => {
        let p = document.createElement("p");
        p.textContent = item.notify;
        p.style.cursor = "pointer";          // makes it look clickable
        p.style.background = "#f0f0f0";
        p.style.padding = "8px";
        p.style.borderRadius = "2px";
        p.style.marginBottom = "8px";

        // when clicked
        p.addEventListener("click", function() {
            // alert("You clicked: " + item.notify);

            p.style.background = "#943636ff";
            p.style.color = "#ffffffff";

            // or you can redirect or do something else here
            // e.g. window.location.href = "details.html?msg=" + encodeURIComponent(item.notify);
        });

        displayDiv.appendChild(p);
    });
});
