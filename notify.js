window.addEventListener("DOMContentLoaded", function() {
    // Get all saved submissions
    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    const displayDiv = document.getElementById("display");
    const countDiv = document.getElementById("unread"); 

    // Total unread notifications initially
    let unreadCount = submissions.length;
    countDiv.textContent = unreadCount;

    if (submissions.length === 0) {
        displayDiv.textContent = "No notifications found.";
        return;
    }

    // Loop through and display clickable notifications
    submissions.forEach((item, index) => {
        const p = document.createElement("p");
        p.textContent = item.notify;
        p.style.cursor = "pointer";          
        p.style.background = "#f0f0f0";
        p.style.padding = "8px";
        p.style.borderRadius = "4px";
        p.style.marginBottom = "8px";
        p.style.transition = "0.3s";

        let isRead = false; // track if this one is read

        // When clicked
        p.addEventListener("click", function() {
            if (!isRead) { // only update if it's unread
                p.style.background = "#943636ff";
                p.style.color = "#ffffff";
                isRead = true;

                unreadCount -= 1; // reduce unread count by 1
                countDiv.textContent = unreadCount;
            }

            // Example: redirect or open details
            // window.location.href = "details.html?msg=" + encodeURIComponent(item.notify);
        });

        displayDiv.appendChild(p);
    });
});
