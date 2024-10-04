document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('car-return-form');
    const carSelect = document.getElementById('carBookNumber');

    // Populate the dropdown with approved cars from local storage
    const approvedCars = JSON.parse(localStorage.getItem('approvedCars')) || [];
    approvedCars.forEach(car => {
        const option = document.createElement('option');
        option.value = car;
        option.textContent = car;
        carSelect.appendChild(option);
    });

    // Calculate total function
    window.calculateTotal = () => {
        const extraPayment = parseFloat(form["Exra Payment"].value) || 0;
        const totalCost = extraPayment; // Modify this calculation as per your requirements

        form.totalLKR.value = totalCost.toFixed(2); // Display the total in the Total (LKR) box
    };

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Gather all form data
        const formData = {
            carBookNumber: form.carBookNumber.value,
            userNIC: form.userNIC.value,
            startDate: form.startDate.value,
            returnDate: form.returnDate.value,
            extraPayment: form["Exra Payment"].value,
            totalLKR: form.totalLKR.value,
            noDamage: form.noDamage.checked,
            noAccident: form.noAccident.checked,
            noDrunkDrive: form.noDrunkDrive.checked,
            noPoliceCase: form.noPoliceCase.checked,
            remarksCar: form.remarksCar.value,
            remarksUser: form.remarksUser.value,
        };

        // Here you can handle the form data, like sending it to a server or saving it in local storage
        console.log('Form Data Submitted:', formData);
        alert('Form submitted successfully!');

        // Reset the form after submission
        form.reset();
        carSelect.innerHTML = '<option value="">Select Car</option>'; // Reset car selection
    });

    // Function to print receipt (can be customized)
    window.printReceipt = () => {
        const receiptContent = `
            Car Booking Number: ${form.carBookNumber.value}\n
            User NIC/Passport No: ${form.userNIC.value}\n
            Start Date: ${form.startDate.value}\n
            Return Date: ${form.returnDate.value}\n
            Extra Payment: ${form["Exra Payment"].value}\n
            Total (LKR): ${form.totalLKR.value}\n
            Remarks for Car: ${form.remarksCar.value}\n
            Remarks for User: ${form.remarksUser.value}
        `;
        const printWindow = window.open('', '', 'width=600,height=400');
        printWindow.document.write('<pre>' + receiptContent + '</pre>');
        printWindow.document.close();
        printWindow.print();
    };
});
