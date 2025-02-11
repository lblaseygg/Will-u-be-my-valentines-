document.getElementById("openEnvelope").addEventListener("click", function() {
    document.getElementById("envelope").classList.add("open");
    document.getElementById("envelope").classList.remove("close");
});

document.getElementById("closeEnvelope").addEventListener("click", function() {
    document.getElementById("envelope").classList.add("close");
    document.getElementById("envelope").classList.remove("open");
});

document.getElementById("yes").addEventListener("click", function(event) {
    event.stopPropagation();
    sendResponse("Yes", "yes.html");  // Redirect to yes.html after sending response
});

document.getElementById("no").addEventListener("click", function(event) {
    event.stopPropagation();
    sendResponse("No", "no.html");  // Redirect to no.html after sending response
});

function sendResponse(answer, redirectPage) {
    fetch("https://formspree.io/f/mjkgodye", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ answer: answer })
    }).then(response => {
        alert("Your response has been sent!");
        // After sending the response, redirect to the specified page
        window.location.href = redirectPage;
    }).catch(error => {
        console.error("Error:", error);
    });
}
