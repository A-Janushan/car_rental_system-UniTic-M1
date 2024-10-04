// Retrieve stored data from localStorage
const paymentdetails = JSON.parse(localStorage.getItem('payments')) || [];
const payCustomer = JSON.parse(localStorage.getItem('customers')) || [];
const Profileupdatecustomers = JSON.parse(localStorage.getItem('userProfileData')) || [];
const lastCarDetail = JSON.parse(localStorage.getItem('lastCarDetail')) || [];

// Function to create bookings with unique Booking IDs and Booking Date
function createBookings() {
    const currentDate = new Date().toISOString(); // Capture the current date in ISO format

    // Check if bookings already exist; if not, create them
    let bookings = JSON.parse(localStorage.getItem('bookingData')) || [];

    // Only create new bookings if there are no existing bookings
    if (true) {
        bookings = paymentdetails.map(payment => {
            const customer = payCustomer.find(c => c.id === payment.customerId);
            const profileUpdateCustomer = Profileupdatecustomers.find(c => c.id === payment.customerId);
            const car = lastCarDetail; // Assuming the lastCarDetail corresponds to the current payment

            // Generate a unique Booking ID for each booking
            const bookingid = `BK-${Math.floor(Math.random() * 1000).toString().padStart(4, '0')}`; // Unique Booking ID

            return {
                bookingId: bookingid, // Add unique Booking ID
                bookingDate: currentDate, // Add Booking Date
                customerid: customer?.id,
                name: customer?.name,
                rentalCarId: payment?.rentalCarId,
                email: customer?.email,
                phone: customer?.phone,
                address: profileUpdateCustomer?.address,
                licenseNumber: profileUpdateCustomer?.licenseNumber,
                carModel: car?.model,
                paymentStatus: payment?.paymentstatus,
                proofType: profileUpdateCustomer?.proofType,
                proofNumber: profileUpdateCustomer?.proofNumber,
                statusText: payment?.statusText || "Pending", // Default status

                vehicleDetails: {
                    brand: car?.brand,
                    model: car?.model,
                    fuel: car?.fuel,
                    seats: car?.seats,
                    price: payment?.totalPrice,
                    Advancepayment: payment?.paymentamount,
                    availableFrom: payment?.startDate,
                    availableTo: payment?.endDate
                }
            };
        });

        // Store bookings in localStorage
        localStorage.setItem('bookingData', JSON.stringify(bookings));
    }
}

// Call the createBookings function to populate bookings
createBookings();

// Reference to the table body where booking rows will be displayed
const bookingRequestsTable = document.getElementById('booking-requests');

// Function to render booking requests into the table
function renderBookings() {
    bookingRequestsTable.innerHTML = ''; // Clear existing rows

    const bookings = JSON.parse(localStorage.getItem('bookingData')) || []; // Retrieve bookings from localStorage
    bookings.forEach((booking, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.bookingId}</td> <!-- Display Booking ID -->
            <td>${new Date(booking.bookingDate).toLocaleDateString()}</td> <!-- Display Booking Date -->
            <td>${booking.customerid}</td>
            <td>${booking.rentalCarId}</td>
            <td>${booking.vehicleDetails.Advancepayment}</td>
            <td>${booking.statusText}</td>
            <td>
                <button class="view-details" data-index="${index}">View</button>
                <button class="approve" data-index="${index}" ${booking.statusText === 'Approved' ? 'disabled' : ''}>Approve</button>
                <button class="reject" data-index="${index}" ${booking.statusText === 'Rejected' ? 'disabled' : ''}>Reject</button>
            </td>
            <td>
                <button class="rent-button" data-index="${index}">Rental</button>
            </td>
        `;
        bookingRequestsTable.appendChild(row);
    });
}

// Modal functionality
const modal = document.getElementById('myModal');
const closeModal = document.getElementsByClassName('close')[0];

// Function to show booking details in the modal
function showBookingDetails(index) {
    const booking = JSON.parse(localStorage.getItem('bookingData'))[index]; // Get the correct booking
    document.getElementById('bookingId').innerText = booking.bookingId;
    document.getElementById('bookingDate').innerText = booking.bookingDate;
    document.getElementById('customerid').innerText = booking.customerid;
    document.getElementById('name').innerText = booking.name;
    document.getElementById('rentalCarId').innerText = booking.rentalCarId;
    document.getElementById('email').innerText = booking.email;
    document.getElementById('phone').innerText = booking.phone;
    document.getElementById('address').innerText = booking.address;
    document.getElementById('license-number').innerText = booking.licenseNumber;

    document.getElementById('paymentAmount').innerText = booking.vehicleDetails.Advancepayment;
    document.getElementById('paymentStatus').innerText = booking.paymentStatus;
    document.getElementById('proof-number').innerText = booking.proofNumber;
    document.getElementById('proof-type').innerText = booking.proofType;
    document.getElementById('brand').innerText = booking.vehicleDetails.brand;
    document.getElementById('model').innerText = booking.vehicleDetails.model;
    document.getElementById('fuel').innerText = booking.vehicleDetails.fuel;
    document.getElementById('seats').innerText = booking.vehicleDetails.seats;
    document.getElementById('price').innerText = booking.vehicleDetails.price;
    document.getElementById('availableFrom').innerText = booking.vehicleDetails.availableFrom;
    document.getElementById('availableTo').innerText = booking.vehicleDetails.availableTo;

    modal.style.display = "block"; // Show the modal
}

// Event listeners for modal
closeModal.onclick = function () {
    modal.style.display = "none"; // Close modal when "X" is clicked
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Close modal if clicked outside the modal content
    }
}

// Rental Modal functionality
const rentalModal = document.getElementById('rentalModal');
const closeRentalModal = document.getElementsByClassName('close-rental-modal')[0];

// Function to show rental modal
function showRentalModal(index) {
    const booking = JSON.parse(localStorage.getItem('bookingData'))[index]; // Get the booking details
    document.getElementById('rentalStartDate').value = ''; // Clear previous values
    document.getElementById('halfPayment').value = ''; // Clear previous values
    rentalModal.style.display = "block"; // Show rental modal
}

// Event listener for closing rental modal
closeRentalModal.onclick = function () {
    rentalModal.style.display = "none"; // Close rental modal
}

// Event listener for confirming rental
document.getElementById('confirmRental').addEventListener('click', function() {
    const rentalStartDate = document.getElementById('rentalStartDate').value;
    const halfPayment = document.getElementById('halfPayment').value;

    if (rentalStartDate && halfPayment) {
        // Process the rental here
        alert(`Rental confirmed from ${rentalStartDate} with half payment of $${halfPayment}`);
        
        // Close the modal
        rentalModal.style.display = "none";
    } else {
        alert("Please fill in all fields.");
    }
});

// Event listener for booking buttons
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('view-details')) {
        const index = event.target.getAttribute('data-index');
        showBookingDetails(index);
    }

    if (event.target.classList.contains('approve')) {
        const index = event.target.getAttribute('data-index');
        
        // Approve booking by updating statusText
        const bookings = JSON.parse(localStorage.getItem('bookingData'));
        bookings[index].statusText = "Approved";
        
        // Update localStorage with the updated booking status
        localStorage.setItem('bookingData', JSON.stringify(bookings));

        // Re-render the booking table
        renderBookings();

        alert(`Approved booking for ${bookings[index].name}.`);
    }

    if (event.target.classList.contains('reject')) {
        const index = event.target.getAttribute('data-index');
        
        // Reject booking by updating statusText
        const bookings = JSON.parse(localStorage.getItem('bookingData'));
        bookings[index].statusText = "Rejected";

        // Update localStorage with the updated booking status
        localStorage.setItem('bookingData', JSON.stringify(bookings));

        // Re-render the booking table
        renderBookings();

        alert(`Rejected booking for ${bookings[index].name}.`);
    }

    // Event listener for rental button
    if (event.target.classList.contains('rent-button')) {
        const index = event.target.getAttribute('data-index');
        showRentalModal(index); // Show rental modal
    }
});

// Initial rendering of booking requests
renderBookings();
