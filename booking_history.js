// Sample data for testing (make sure to run this to see bookings)
const bookingData = [
    {
        id: "1",
        customerName: "Balasingam Kowarthanan",
        carModel: "GR Supra",
        bookingDate: "2024-10-01",
        rentalStartDate: "2024-10-18",
        rentalEndDate: "2024-10-30",
        paymentAmount: "57403.33",
        paymentStatus: "Pending",
        status: "Confirmed"
    },
    {
        id: "2",
        customerName: "John Doe",
        carModel: "Toyota Corolla",
        bookingDate: "2024-10-02",
        rentalStartDate: "2024-10-20",
        rentalEndDate: "2024-10-25",
        paymentAmount: "30000.00",
        paymentStatus: "Completed",
        status: "Confirmed"
    }
];

// Save to local storage for testing (Uncomment this line if you need to save it again)
// localStorage.setItem('bookingData', JSON.stringify(bookingData));

// Function to fetch booking data from localStorage and render it in the table
function renderBookings() {
    // Retrieve booking data from localStorage
    const bookings = JSON.parse(localStorage.getItem('bookingData')) || [];
    console.log(bookings)
    const bookingHistory = document.getElementById('booking-history');

    // Clear existing rows
    bookingHistory.innerHTML = '';

    // Check if there are any bookings
    if (bookings.length === 0) {
        // If no bookings, display a message
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="9" style="text-align:center;">No bookings available.</td>';
        bookingHistory.appendChild(row);
        return; // Exit the function if no bookings
    }

    // Loop through bookings and create table rows
    bookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.bookingId}</td>
            <td>${booking.name}</td>
            <td>${booking.carModel}</td>
            <td>${booking.bookingDate}</td>
            <td>${booking.vehicleDetails.availableFrom}</td>
            <td>${booking.vehicleDetails.availableTo}</td>
            <td>${booking.vehicleDetails.Advancepayment}</td>
            <td>${booking.paymentStatus}</td>
            <td>${booking.statusText}</td>
        `;
        bookingHistory.appendChild(row);
    });
}

// Call the function to render bookings on page load
document.addEventListener('DOMContentLoaded', renderBookings);
