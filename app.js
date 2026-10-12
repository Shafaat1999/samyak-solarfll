const calculateBtn = document.getElementById("calculateBtn");
const billSelect = document.getElementById("bill");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const monthlyBill = Number(billSelect.value);

    // Demo estimate: solar offsets approximately 75% of the current electricity bill.
    const annualSaving = monthlyBill * 12 * 0.75;

    result.querySelector("strong").textContent =
        "₹ " + Math.round(annualSaving).toLocaleString("en-IN");

    result.classList.add("show");
});

billSelect.addEventListener("change", () => {
    result.classList.remove("show");
});



function knowMore() {
    alert(
        "Welcome to Samyak Solar Energy! Discover clean and reliable solar solutions."
    );
}


function checkEligibility() {
    alert(
        "Subsidy Eligibility Check\n\nPM Surya Ghar Yojana provides subsidy benefits for eligible residential solar installations."
    );
}

// =====================================
// PROJECT SLIDER
// =====================================

const projectsTrack = document.getElementById("projectsTrack");

const prevButton = document.querySelector(".prev-btn");

const nextButton = document.querySelector(".next-btn");


// Card ki width calculate karega
function getScrollAmount() {

    const card = projectsTrack.querySelector(".project-card");

    if (!card) {
        return 300;
    }

    const gap = 14;

    return card.offsetWidth + gap;
}


// =====================================
// NEXT BUTTON
// =====================================

nextButton.addEventListener("click", function () {

    projectsTrack.scrollBy({

        left: getScrollAmount(),

        behavior: "smooth"

    });

});


// =====================================
// PREVIOUS BUTTON
// =====================================

prevButton.addEventListener("click", function () {

    projectsTrack.scrollBy({

        left: -getScrollAmount(),

        behavior: "smooth"

    });

});

// =========================================
// SOLAR NETWORK FORM
// =========================================

const getStartedBtn = document.getElementById("getStartedBtn");

const networkEmail = document.getElementById("networkEmail");


getStartedBtn.addEventListener("click", function () {

    const email = networkEmail.value.trim();


    // Email empty check
    if (email === "") {

        alert("Please enter your email address.");

        return;

    }


    // Basic email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }


    alert(
        "Thank you! We will contact you soon."
    );


    networkEmail.value = "";

});







const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    successMessage.style.display = "block";

    form.reset();
});






document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".menu-bar .nav-link");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});

// =============================
// CONSULTATION POPUP
// =============================

const consultationBtn = document.getElementById("consultationBtn");
const consultationPopup = document.getElementById("consultationPopup");
const closeConsultation = document.getElementById("closeConsultation");
const consultationForm = document.getElementById("consultationForm");


// Open Popup
consultationBtn.addEventListener("click", function () {
    consultationPopup.classList.add("active");
});


// Close Popup
closeConsultation.addEventListener("click", function () {
    consultationPopup.classList.remove("active");
});


// Close when clicking outside the box
consultationPopup.addEventListener("click", function (event) {

    if (event.target === consultationPopup) {
        consultationPopup.classList.remove("active");
    }

});


// Form Submit
consultationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(
        "Thank you " + name + 
        "! Your consultation request has been submitted."
    );

    // Form reset
    consultationForm.reset();

    // Close popup
    consultationPopup.classList.remove("active");

});


