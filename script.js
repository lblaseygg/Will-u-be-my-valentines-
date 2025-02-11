document.getElementById("openEnvelope").addEventListener("click", function() {
    document.getElementById("envelope").classList.add("open");
    document.getElementById("envelope").classList.remove("close");
});

document.getElementById("closeEnvelope").addEventListener("click", function() {
    document.getElementById("envelope").classList.add("close");
    document.getElementById("envelope").classList.remove("open");
});

document.getElementById("yes").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent any default form behavior (especially on mobile)
    event.stopPropagation();
    sendResponse("Yes", "yes.html");  // Redirect to yes.html after sending response
});

document.getElementById("no").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent any default form behavior (especially on mobile)
    event.stopPropagation();
    sendResponse("No", "no.html");  // Redirect to no.html after sending response
});

function sendResponse(answer, redirectPage) {
    console.log("Sending response:", answer);
    fetch("https://formspree.io/f/mjkgodye", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ answer: answer }),
        mode: 'cors'
    })
    .then(response => {
        console.log("Response status:", response.status);
        if (response.ok) {
            alert("Your response has been sent!");
            // After sending the response, redirect to the specified page
            window.location.href = redirectPage;
        } else {
            throw new Error("Form submission failed.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    });
}
