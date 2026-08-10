//DOM
const contactForm = document.getElementById("contactForm");
const pageHeading = document.getElementById("pageHeading");
const confirmation = document.getElementById("confirmation");

//Event
contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        confirmation.textContent = "Please complete all fields.";
        
        return;
    }

    confirmation.textContent =
        "Your message has been successfully submitted!";

    pageHeading.style.color = "black";

    pageHeading.textContent = "Thank you for your message!";

    contactForm.reset();
}); 
