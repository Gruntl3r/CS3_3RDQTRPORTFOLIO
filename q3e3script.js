const form = document.getElementById("dForm");

// Load existing signups or initialize
let signups = JSON.parse(localStorage.getItem("signups")) || [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!confirm("Confirm submission?")) return;

    const signup = {
        club: document.getElementById("club").value,
        id: document.getElementById("studentId").value,
        fullname: document.getElementById("fullname").value,
        grade: document.getElementById("grade").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        type: document.querySelector("input[name='type']:checked").value
    };

    signups.push(signup);
    localStorage.setItem("signups", JSON.stringify(signups));

    alert("Signup saved successfully!");
    form.reset();
});

document.getElementById("viewSignupsBtn").addEventListener("click", function () {
    window.location.href = "viewSignups.html";
});

function validateField(input) {
    if (input.value.trim() === "") {
        input.style.backgroundColor = "#ffa640";
        input.style.borderColor = "red";
    } else {
        input.style.backgroundColor = "";
        input.style.borderColor = "";
    }
}
