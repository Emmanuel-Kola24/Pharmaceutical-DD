// List of Physicians
const physicians = [
    { name: "Dr. Alice", specialization: "Cardiology", available: ["09:00 AM", "11:00 AM", "03:00 PM"] },
    { name: "Dr. Johnson", specialization: "Neurology", available: ["10:00 AM", "01:00 PM", "04:00 PM"] },
    { name: "Dr. Williams", specialization: "Pediatrics", available: ["08:00 AM", "12:00 PM", "02:00 PM"] }
];

// Function to display available physicians
function displayPhysicians() {
    const physiciansList = document.getElementById('physicians-list');
    physicians.forEach(physician => {
        const listItem = document.createElement("li");
        listItem.classList.add("mb-2", "p-4", "border-b", "border-gray-200");
        listItem.innerHTML = `
            <strong>${physician.name}</strong> - ${physician.specialization} <br>
            Available Times: ${physician.available.join(", ")}
        `;
        physiciansList.appendChild(listItem);
    });
}

// Display the list of available physicians when the page loads
document.addEventListener("DOMContentLoaded", displayPhysicians);

// Form submission event listener with validation logic
document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    // Prevent form submission to validate inputs
    event.preventDefault();

    // Getting form values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const physician = document.getElementById('physician').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    // Error elements
    let Eerr = document.getElementById('Err');
    let Perr = document.getElementById('Perr');

    // Reset error messages before validation
    Eerr.innerHTML = "";
    Perr.innerHTML = "";

    // Validation flags
    let isValid = true;

    // Full name validation
    if (name === "") {
        Eerr.innerHTML = "Please enter your full name.";
        isValid = false;
    }

    // Phone number validation (11 digits)
    const phoneRegex = /^[0-9]{11}$/;
    if (phone === "") {
        Perr.innerHTML = "Please enter your phone number.";
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        Perr.innerHTML = "Phone number must be exactly 11 digits.";
        isValid = false;
    }

    // If validation passes, show the receipt
    if (isValid) {
        const receiptDetails = `
            Client Name: ${name} <br>
            Phone Number: ${phone} <br>
            Physician: ${physician} <br>
            Appointment Time: ${new Date(appointmentTime).toLocaleString()} <br>
        `;
        document.getElementById('receiptDetails').innerHTML = receiptDetails;
        document.getElementById('receipt').classList.remove('hidden');
    }
});

// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileMenuBut = document.getElementById('drop');
mobileMenuBut.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
