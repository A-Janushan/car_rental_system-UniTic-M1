function initializeRentalHistory() {
    const rentalHistory = [
        {
            id: 1,
            customerId: 'C001',
            nic: '999897969V',
            dvdId: 'D101',
            rentDate: '2024-09-25',
            dueDate: '2024-10-02',
            returnDate: null,
            advance: '50',
            payAction: 'Pending'
        },
        {
            id: 2,
            customerId: 'C002',
            nic: '999897969V',
            dvdId: 'D102',
            rentDate: '2024-09-20',
            dueDate: '2024-09-27',
            returnDate: '2024-09-28',
            advance: '30',
            payAction: 'Completed'
        }
    ];

    // Store rental history in localStorage if not already present
    if (!localStorage.getItem('rentalHistory')) {
        localStorage.setItem('rentalHistory', JSON.stringify(rentalHistory));
    }
}

function fetchRentalHistory() {
    const rentalHistory = JSON.parse(localStorage.getItem('rentalHistory'));
    const rentalHistoryTableBody = document.getElementById('RentalTable').querySelector('tbody');
    rentalHistoryTableBody.innerHTML = ''; // Clear table

    rentalHistory.forEach(record => {
        const row = document.createElement('tr');

        const rentIdCell = document.createElement('td');
        rentIdCell.textContent = record.id;
        row.appendChild(rentIdCell);

        const customerIdCell = document.createElement('td');
        customerIdCell.textContent = record.customerId;
        row.appendChild(customerIdCell);

        const dvdIdCell = document.createElement('td');
        dvdIdCell.textContent = record.dvdId;
        row.appendChild(dvdIdCell);

        const rentDateCell = document.createElement('td');
        rentDateCell.textContent = new Date(record.rentDate).toLocaleDateString();
        row.appendChild(rentDateCell);

        const dueDateCell = document.createElement('td');
        dueDateCell.textContent = new Date(record.dueDate).toLocaleDateString();
        row.appendChild(dueDateCell);

        const returnDateCell = document.createElement('td');
        returnDateCell.textContent = record.returnDate ? new Date(record.returnDate).toLocaleDateString() : 'Not Returned';
        row.appendChild(returnDateCell);

        const advanceCell = document.createElement('td');
        advanceCell.textContent = record.advance;
        row.appendChild(advanceCell);

        const payActionCell = document.createElement('td');
        payActionCell.textContent = record.payAction || 'Pending';
        row.appendChild(payActionCell);

        const actionCell = document.createElement('td');
        const returnButton = document.createElement('button');
        returnButton.textContent = 'Returned';
        returnButton.classList.add('return-btn');
        returnButton.addEventListener('click', () => {
            showConditionModal(record);
        });
        actionCell.appendChild(returnButton);
        row.appendChild(actionCell);

        rentalHistoryTableBody.appendChild(row);
    });
}

function showConditionModal(record) {
    const modal = document.getElementById('conditionModal');
    const modalBody = modal.querySelector('.modal-body');
    modalBody.innerHTML = `<p>Details for Rent ID: ${record.id}</p><p>Condition: Excellent</p>`;
    modal.classList.add('active');
}

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('conditionModal').classList.remove('active');
});

// Initialize and load rental history from localStorage on page load
window.onload = function () {
    initializeRentalHistory();
    fetchRentalHistory();
};
