document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.modal .close');
    const userTableBody = document.getElementById('user-requests');
    const messageArea = document.getElementById('message-area');

    // Retrieve user data from local storage and rename userId key to id
    function updateUserKeys() {
        const userRequests = JSON.parse(localStorage.getItem('userProfileData')) || [];
        const updatedUserRequests = userRequests.map(user => {
            // Copy user object
            const updatedUser = { ...user };
            // Rename userId key to id
            if (updatedUser.userId) {
                updatedUser.id = updatedUser.userId;
                delete updatedUser.userId;
            }
            return updatedUser;
        });
        // Save updated data back to local storage
        localStorage.setItem('userProfileData', JSON.stringify(updatedUserRequests));
    }

    updateUserKeys(); // Update keys on page load

    // Fetch user data from local storage
    const userRequests = JSON.parse(localStorage.getItem('userProfileData')) || [];

    // Populate the user table with data
    function populateUserTable() {
        userTableBody.innerHTML = ''; // Clear the table before populating
        userRequests.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
                <td>${user.licenseNumber}</td>
                <td>${user.proofType}</td>
                <td>${user.postalCode}</td>
                <td><img src="${user.licenseFrontImage}" alt="License Front" style="width:50px;height:auto;"></td>
                <td><img src="${user.licenseBackImage}" alt="License Back" style="width:50px;height:auto;"></td>
                <td>${user.status}</td>
                <td>
                    <button class="view-btn" data-user-id="${user.id}">View</button>
                    <button class="verify-btn" data-user-id="${user.id}">Verify</button>
                    <button class="reject-btn" data-user-id="${user.id}">Reject</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    // Fetch and display user data in the modal
    function openModal(userId) {
        const user = userRequests.find(u => u.id === userId);
        if (!user) return;

        document.getElementById('name').textContent = user.name;
        document.getElementById('email').textContent = user.email;
        document.getElementById('phone').textContent = user.phone;
        document.getElementById('address').textContent = user.address;
        document.getElementById('license-number').textContent = user.licenseNumber;
        document.getElementById('proof-type').textContent = user.proofType;
        document.getElementById('postal-code').textContent = user.postalCode;
        document.getElementById('license-front').src = user.licenseFrontImage;
        document.getElementById('license-back').src = user.licenseBackImage;

        modal.style.display = 'block';
    }

    // Close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Update user status
    function updateUserStatus(userId, status) {
        const userIndex = userRequests.findIndex(u => u.id === userId);
        if (userIndex === -1) return;

        userRequests[userIndex].status = status;
        localStorage.setItem('userProfileData', JSON.stringify(userRequests));

        messageArea.textContent = `User ${userRequests[userIndex].name} has been ${status.toLowerCase()}.`;
        messageArea.style.color = status === 'Verified' ? 'green' : 'red';

        // Refresh the table with updated data
        populateUserTable();
    }

    // Handle button clicks within the user table
    userTableBody.addEventListener('click', (e) => {
        const userId = e.target.getAttribute('data-user-id');
        if (!userId) return;

        if (e.target.classList.contains('view-btn')) {
            openModal(userId);
        } else if (e.target.classList.contains('verify-btn')) {
            updateUserStatus(userId, 'Verified');
        } else if (e.target.classList.contains('reject-btn')) {
            updateUserStatus(userId, 'Rejected');
        }
    });

    // Event listeners for modal close
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Initialize the table with user data
    populateUserTable();
});
