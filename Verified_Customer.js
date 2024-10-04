// Function to get query parameters from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get carid and customerid from the URL
const carid = getQueryParam('carid');
const customerid = getQueryParam('customerid');

// Get car details from localStorage
let carDetailsArray = JSON.parse(localStorage.getItem('carDetails')) || [];
const selectedCar = carDetailsArray.find(car => car.id == carid);

// Get customer details from localStorage
let customerDetailsArray = JSON.parse(localStorage.getItem('customers')) || [];
const selectedCustomer = customerDetailsArray.find(customer => customer.id == customerid);

if (selectedCar && selectedCustomer) {
    // If both car and customer are found, display their details on the page
    displayBookingDetails(selectedCar, selectedCustomer);
} else {
    // Handle case where either car or customer isn't found
    displayError();
}

// Function to display both car and customer details in the booking summary section
function displayBookingDetails(car, customer) {
    const bookingSummarySection = document.querySelector('.booking-summary');

    // Create HTML to display car and customer details
    const bookingDetailsHTML = `
        <div class="booking-details">
            <h2>Car Details</h2>
            <p><strong>Brand:</strong> ${car.brand}</p>
            <p><strong>Model:</strong> ${car.model}</p>
            <p><strong>Fuel:</strong> ${car.fuel}</p>
            <p><strong>Transmission:</strong> ${car.transmission}</p>
            <p><strong>Seats:</strong> ${car.seats}</p>
            <p><strong>Total Hours:</strong> ${car.totalHours}</p>
            <p><strong>Total Price:</strong> Rs.${car.totalPrice}</p>
            <img src="${car.image}" alt="${car.brand} ${car.model}" style="max-width:300px;">
            
            <h2>Customer Details</h2>
            <p><strong>Customer ID:</strong> ${customer.id}</p>
            <p><strong>Name:</strong> ${customer.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${customer.email}">${customer.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${customer.phone}">${customer.phone}</a></p>
            
            <button id="registerButton">Advanced Payment</button>
        </div>
    `;

    // Append the booking details to the booking summary section
    bookingSummarySection.innerHTML = bookingDetailsHTML;

    // Add event listener to the button
    const registerButton = document.getElementById('registerButton');
    registerButton.addEventListener('click', function() {
        window.location.href = `../Customer_payment/Cus_payment.html?carid=${carid}&customerid=${customerid}`; // Redirect to the registration page
    });
}

// Function to handle case when car or customer details are not found
function displayError() {
    const bookingSummarySection = document.querySelector('.booking-summary');
    bookingSummarySection.innerHTML = `
        <div class="error-message">
            <p>Sorry, the car or customer details could not be found. Please try again later or contact support.</p>
        </div>
    `;
}
