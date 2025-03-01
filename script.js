// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded ✅");

    // === CHECK LOGIN STATUS ===
    if (localStorage.getItem("loggedInUser")) {
        document.querySelector("#userStatus").innerText = "Welcome, " + localStorage.getItem("loggedInUser") + "!";
        document.querySelector("#loginLink").style.display = "none";
        document.querySelector("#signupLink").style.display = "none";
        document.querySelector("#logoutButton").style.display = "inline-block";
    }

    // === LOGIN FORM HANDLER ===
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            if (email === "" || password === "") {
                showError("All fields are required!");
                return;
            }

            // Simulate login success and save user in local storage
            localStorage.setItem("loggedInUser", email);
            showSuccess("Login Successful ✅ Redirecting...");
            setTimeout(() => {
                window.location.href = "index.html"; // Redirect to homepage
            }, 1500);
        });
    }

    // === SIGNUP FORM HANDLER ===
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("signupName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            if (name === "" || email === "" || password === "") {
                showError("All fields are required!");
                return;
            }

            if (password.length < 6) {
                showError("Password must be at least 6 characters!");
                return;
            }

            // Simulated signup success
            localStorage.setItem("loggedInUser", email);
            showSuccess("Signup Successful 🎉 Redirecting...");
            setTimeout(() => {
                window.location.href = "index.html"; // Redirect to homepage
            }, 2000);
        });
    }

    // === LOGOUT FUNCTION ===
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser");
            showSuccess("Logged out successfully! Redirecting...");
            setTimeout(() => {
                window.location.href = "index.html"; // Reload page
            }, 1000);
        });
    }
});

// === ERROR & SUCCESS MESSAGES ===
function showError(message) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert", "error");
    alertBox.innerText = message;
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 3000);
}

function showSuccess(message) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert", "success");
    alertBox.innerText = message;
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 3000);
}
// Toggle FAQ answers when clicked
document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        let answer = question.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
