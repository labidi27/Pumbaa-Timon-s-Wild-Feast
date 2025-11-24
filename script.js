// Simple interactivity: show alert when clicking the reservation link
document.addEventListener("DOMContentLoaded", () => {
    const reservationLink = document.querySelector('a[href="contact.html"]');

    reservationLink.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Redirecting to the contact page for reservations!");
        window.location.href = "contact.html"; // redirect after alert
    });

    console.log("Pumbaa & Timon's Wild Feast JS loaded!");
});
