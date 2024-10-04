document.addEventListener("DOMContentLoaded", function () {
    const carId = getQueryParam('carid');
    

    // Retrieve registered customers from localStorage or initialize as an empty array
    const registerCustomer = JSON.parse(localStorage.getItem('customers')) || [];

    // Helper function to encrypt the password using base64 (can be replaced with a more secure encryption method)
    function Encryption(password) {
        return btoa(password);
    }

    // Helper function to get query parameters from the URL (e.g., carid)
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Function to generate a unique ID for each customer
    function generateUniqueId() {
        return 'cust_'+ '_' + Math.floor(Math.random() * 1000);
    }

    // Password validation feedback function
    function validatePassword(password) {
        const passwordErrors = [];
        if (password.length < 8) {
            passwordErrors.push('Password must be at least 8 characters long.');
        }
        if (!/[a-z]/.test(password)) {
            passwordErrors.push('Password must contain at least one lowercase letter.');
        }
        if (!/[A-Z]/.test(password)) {
            passwordErrors.push('Password must contain at least one uppercase letter.');
        }
        if (!/\d/.test(password)) {
            passwordErrors.push('Password must contain at least one digit.');
        }
        if (!/[@$!%*?&]/.test(password)) {
            passwordErrors.push('Password must contain at least one special character.');
        }
        return passwordErrors;
    }

    // Toggle password visibility
    document.getElementById('show-password').addEventListener('change', function () {
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmpassword');
        const inputType = this.checked ? 'text' : 'password';
        passwordInput.type = inputType;
        confirmPasswordInput.type = inputType;
    });

    // Form submission event listener
    document.getElementById('registerForm').addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form from submitting traditionally

        // Get form field values and trim any extra spaces
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim().toLowerCase(); // Normalize email
        const nic = document.getElementById('nic').value.trim().toUpperCase();     // Normalize NIC
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmpassword').value.trim();
        const validatemessage = document.getElementById("Message");

        // Clear previous messages
        validatemessage.innerHTML = '';
        validatemessage.style.cssText = "font-size: 16px; width: 70%; text-align: center; background-color: lightblue;";

        // Validate form fields
        if (!name) {
            validatemessage.innerHTML = 'Please enter your name.';
            return;
        }

        if (!phone || !/^(?:\+94|0)\d{9}$/.test(phone)) {
            validatemessage.innerHTML = 'Please enter a valid phone number in the format +94 123456789.';
            return;
        }

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            validatemessage.innerHTML = 'Please enter a valid email address.';
            return;
        }

        if (!nic || !/^\d{9}[vVxX]$|^\d{12}$/.test(nic)) {
            validatemessage.innerHTML = 'Please enter a valid NIC number (either 9 digits followed by V/v/X/x or 12 digits).';
            return;
        }

        // Validate password with detailed feedback
        const passwordErrors = validatePassword(password);
        if (passwordErrors.length > 0) {
            validatemessage.innerHTML = passwordErrors.join('<br>');  // Display each error on a new line
            return;
        }

        if (password !== confirmPassword) {
            validatemessage.innerHTML = 'Passwords do not match.';
            return;
        }

        // Check if email, NIC, or phone number is already registered and show specific messages
        const isEmailDuplicate = registerCustomer.some(customer => customer.email === email);
        const isNicDuplicate = registerCustomer.some(customer => customer.nic === nic);
        const isPhoneDuplicate = registerCustomer.some(customer => customer.phone === phone);

        if (isEmailDuplicate) {
            validatemessage.innerHTML = 'The email is already registered.';
            return;
        }

        if (isNicDuplicate) {
            validatemessage.innerHTML = 'The NIC is already registered.';
            return;
        }

        if (isPhoneDuplicate) {
            validatemessage.innerHTML = 'The phone number is already registered.';
            return;
        }

        // Encrypt the password
        const encryptedPassword = Encryption(password);

        // Generate a unique ID for the customer
        const uniqueId = generateUniqueId();

        // Create the customer object with all details
        const customer = { id: uniqueId, name, phone, email, nic, password: encryptedPassword, carId };

        // Add customer to registerCustomer array and store in localStorage
        registerCustomer.push(customer);
        localStorage.setItem("customers", JSON.stringify(registerCustomer));

        // Display a success message
        validatemessage.innerHTML = "Registered successfully!";

        // Optionally redirect to a page, passing the car ID if available
        if (carId!=null) {
            // Redirect to the login page with carId
            window.location.href = `../Customer_login/login.html?carid=${carId}`;
        }else{
            window.location.href = `../Customer_login/login.html`;
        }

        // Reset the form after successful registration
        this.reset();
    });
});
