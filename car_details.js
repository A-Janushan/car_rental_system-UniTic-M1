
     ;document.addEventListener("DOMContentLoaded", () => {
        const initialCars = [
            {
                id: 1,
                brand: 'Nissan',
                bodyType: 'Coupe',
                model: 'GT-R',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 4,
                price: 300,
                image: 'NissanGT-R.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-15'
            },
            {
                id: 2,
                brand: 'Lamborghini',
                bodyType: 'Coupe',
                model: 'Revuelto',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 3,
                price: 650,
                image: 'LamborghiniRevuelto.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-22'
            },
            {
                id: 3,
                brand: 'Toyota',
                bodyType: 'Coupe',
                model: 'GR Supra',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 5,
                price: 200,
                image: 'car1.png',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-20'
            },
            {
                id: 4,
                brand: 'Lamborghini',
                bodyType: 'Coupe',
                model: 'Revuelto',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 3,
                price: 650,
                image: 'LamborghiniRevuelto.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-22'
            },
            {
                id: 5,
                brand: 'Toyota',
                bodyType: 'Coupe',
                model: 'Corolla',
                transmission: 'Manual',
                fuel: 'Petrol',
                seats: 5,
                price: 200,
                image: 'ToyotaCorolla.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-10'
            },
            {
                id: 6,
                brand: 'Nissan',
                bodyType: 'Coupe',
                model: 'Altima',
                transmission: 'Automatic',
                fuel: 'Diesel',
                seats: 5,
                price: 300,
                image: 'NissanAltima.jpeg',
                availableFrom:'2024-09-23',
                availableTo: '2024-10-28'
            },
            {
                id: 7,
                brand: 'Lamborghini',
                bodyType: 'Coupe',
                model: 'Aventador',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 2,
                price: 700,
                image: 'LamborghiniAventador.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-23'
            },
            {
                id: 8,
                brand: 'Toyota',
                bodyType: 'Coupe',
                model: 'Camry',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 5,
                price: 200,
                image: 'ToyotaCamry.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-13'
            },
            {
                id: 9,
                brand: 'Nissan',
                bodyType: 'Coupe',
                model: '370Z',
                transmission: 'Manual',
                fuel: 'Petrol',
                seats: 2,
                price: 300,
                image: 'Nissan370Z.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-17'
            },
            {
                id: 10,
                brand: 'Lamborghini',
                bodyType: 'SUV',
                model: 'Huracan',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 2,
                price: 700,
                image: 'LamborghiniHuracan.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-30'
            },
            {
                id: 11,
                brand: 'Toyota',
                bodyType: 'SUV',
                model: 'GR Supra',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 5,
                price: 200,
                image: 'ToyotaGR Supra.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-20'
            },
            {
                id: 12,
                brand: 'Nissan',
                bodyType: 'SUV',
                model: 'GT-R',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 4,
                price: 300,
                image: 'NissanGT-R.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-15'
            },
            {
                id: 13,
                brand: 'Audi',
                bodyType: 'SUV',
                model: 'A8',
                transmission: 'Automatic',
                fuel: 'Diesel',
                seats: 5,
                price: 200,
                image: 'AudiA8.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-10'
            },
            {
                id: 14,
                brand: 'Audi',
                bodyType: 'SUV',
                model: 'Sedans',
                transmission: 'Automatic',
                fuel: 'Diesel',
                seats: 4,
                price: 400,
                image: 'AudiSedans.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-10'
            },
            {
                id: 15,
                brand: 'BMW',
                bodyType: 'SUV',
                model: 'X5',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 5,
                price: 400,
                image: 'BMWX5.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-25'
            },
            {
                id: 16,
                brand: 'Mercedes-Benz',
                bodyType: 'SUV',
                model: 'S-Class',
                transmission: 'Automatic',
                fuel: 'Diesel',
                seats: 5,
                price: 500,
                image: 'Mercedes-BenzS-CLASS.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-18'
            },
            {
                id: 17,
                brand: 'Tesla',
                bodyType: 'SUV',
                model: 'Model S',
                transmission: 'Automatic',
                fuel: 'Electric',
                seats: 5,
                price: 300,
                image: 'TeslaModel S.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-30'
            },
            {
                id: 18,
                brand: 'Ford',
                bodyType: 'SUV',
                model: 'Mustang',
                transmission: 'Manual',
                fuel: 'Petrol',
                seats: 4,
                price: 300,
                image: 'FordMustang.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-15'
            },
            {
                id: 19,
                brand: 'Toyota',
                bodyType: 'SUV',
                model: 'GR Supra',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 5,
                price: 200,
                image: 'ToyotaGR Supra.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-20'
            },
            {
                id: 20,
                brand: 'Nissan',
                bodyType: 'Sedan',
                model: 'GT-R',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 4,
                price: 300,
                image: 'NissanGT-R.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-15'
            },
            {
                id: 21,
                brand: 'Lamborghini',
                bodyType: 'Sedan',
                model: 'Revuelto',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 3,
                price: 650,
                image: 'LamborghiniRevuelto.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-22'
            },
            {
                id: 22,
                brand: 'Audi',
                bodyType: 'Sedan',
                model: 'A8',
                transmission: 'Automatic',
                fuel: 'Diesel',
                seats: 5,
                price: 300,
                image: 'AudiA8.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-18'
            },
            {
                id: 23,
                brand: 'BMW',
                bodyType: 'Sedan',
                model: 'X5',
                transmission: 'Automatic',
                fuel: 'Diesel',
                seats: 5,
                price: 200,
                image: 'BMWX5.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-15'
            },
            {
                id: 24,
                brand: 'Mercedes-Benz',
                bodyType: 'Sedan',
                model: 'S-Class',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 5,
                price: 300,
                image: 'Mercedes-BenzS-CLASS.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-20'
            },
            {
                id: 25,
                brand: 'Ferrari',
                bodyType: 'Sedan',
                model: 'Portofino',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 2,
                price: 700,
                image: 'FerrariPortofino.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-25'
            },
            {
                id: 26,
                brand: 'Tesla',
                bodyType: 'Sedan',
                model: 'Model S',
                transmission: 'Automatic',
                fuel: 'Electric',
                seats: 5,
                price: 400,
                image: 'TeslaModel S.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-30'
            },
            {
                id: 27,
                brand: 'Rolls-Royce',
                bodyType: 'Sedan',
                model: 'Phantom',
                transmission: 'Automatic',
                fuel: 'Petrol',
                seats: 5,
                price: 1200,
                image: 'Rolls-RoycePhantom.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-20'
            },
            {
                id: 28,
                brand: 'Jaguar',
                bodyType: 'Sedan',
                model: 'XF',
                transmission: 'Automatic',
                fuel: 'Diesel',
                seats: 5,
                price: 600,
                image:'JaguarXF.jpeg',
                availableFrom: '2024-09-23',
                availableTo: '2024-10-28'
            }
       
            ];
            
            const carTableBody = document.querySelector(".car-table tbody");
            const carForm = document.getElementById("carForm");
            const modal = document.getElementById("modal");
            const closeBtn = document.querySelector(".closeBtn");
            const addCarBtn = document.querySelector(".add-car");
            const searchInput = document.getElementById("searchInput");
            const imageInput = document.getElementById("image");
            const imagePreview = document.createElement("img");
        
            let cars = JSON.parse(localStorage.getItem("cars")) || initialCars;
            let editingIndex = -1;
        
            // Save the initial cars to localStorage if not already saved
            if (!localStorage.getItem("cars")) {
                localStorage.setItem("cars", JSON.stringify(initialCars));
            }
        
            // Function to render car data
            function renderCars() {
                carTableBody.innerHTML = "";
                const searchTerm = searchInput.value.toLowerCase();
                const filteredCars = cars.filter(car => 
                    car.brand.toLowerCase().includes(searchTerm) ||
                    car.bodyType.toLowerCase().includes(searchTerm) ||
                    car.model.toLowerCase().includes(searchTerm)
                );
        
                filteredCars.forEach((car, index) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${car.id}</td>
                        <td>${car.brand}</td>
                        <td>${car.bodyType}</td>
                        <td>${car.model}</td>
                        <td>${car.transmission}</td>
                        <td>${car.fuel}</td>
                        <td>${car.seats}</td>
                        <td>Rs ${car.price}</td>
                        <td><img src="${car.image}" alt="${car.model}" style="width: 100px; height: auto;" /></td>
                        <td>${car.availableFrom}</td>
                        <td>${car.availableTo}</td>
                        <td>
                            <button class="edit-btn" onclick="editCar(${index})"><i class="fa fa-pencil"></i> Edit</button>
                            <button class="delete-btn" onclick="deleteCar(${index})"><i class="fa fa-trash"></i> Delete</button>
                        </td>
                    `;
                    carTableBody.appendChild(row);
                });
            }
        
            // Function to validate form inputs
            function validateForm() {
                const priceValue = parseFloat(carForm.price.value);
                const seatsValue = parseInt(carForm.seats.value);
        
                if (isNaN(priceValue) || isNaN(seatsValue) || priceValue <= 0 || seatsValue <= 0) {
                    alert("Please enter valid numerical values for price and seats.");
                    return false;
                }
                return true;
            }
        
            // Function to handle form submission
            carForm.addEventListener("submit", (event) => {
                event.preventDefault();
                if (!validateForm()) return;
        
                const newCar = {
                    id: carForm.id.value,
                    brand: carForm.brand.value,
                    bodyType: carForm.bodyType.value,
                    model: carForm.model.value,
                    transmission: carForm.transmission.value,
                    fuel: carForm.fuelType.value,
                    seats: parseInt(carForm.seats.value),
                    price: parseFloat(carForm.price.value),
                    image: carForm.image.value,
                    availableFrom: carForm.availableFrom.value,
                    availableTo: carForm.availableTo.value
                };
        
                if (editingIndex >= 0) {
                    // Update existing car
                    cars[editingIndex] = newCar;
                    editingIndex = -1;
                } else {
                    // Add new car
                    cars.push(newCar);
                }
        
                localStorage.setItem("cars", JSON.stringify(cars));
                renderCars();
                carForm.reset();
                modal.style.display = "none";
            });
        
            // Edit car function
            window.editCar = function(index) {
                editingIndex = index;
                const car = cars[index];
                carForm.brand.value = car.brand;
                carForm.bodyType.value = car.bodyType;
                carForm.model.value = car.model;
                carForm.transmission.value = car.transmission;
                carForm.fuelType.value = car.fuel;
                carForm.seats.value = car.seats;
                carForm.price.value = car.price;
                carForm.image.value = car.image;
                carForm.availableFrom.value = car.availableFrom;
                carForm.availableTo.value = car.availableTo;
        
                // Display the modal
                modal.style.display = "block";
            };
        
            // Delete car function
            window.deleteCar = function(index) {
                if (confirm("Are you sure you want to delete this car?")) {
                    cars.splice(index, 1);
                    localStorage.setItem("cars", JSON.stringify(cars));
                    renderCars();
                }
            };
        
            // Add new car button
            addCarBtn.addEventListener("click", () => {
                editingIndex = -1;
                carForm.reset();
                modal.style.display = "block";
            });
        
            // Close modal
            closeBtn.addEventListener("click", () => {
                modal.style.display = "none";
            });
        
            // Image preview
            imageInput.addEventListener("input", () => {
                imagePreview.src = imageInput.value;
                imagePreview.alt = "Image preview";
                imagePreview.style.maxWidth = "100px";
                imagePreview.style.height = "auto";
        
                const imagePreviewContainer = document.getElementById("imagePreviewContainer");
                if (!imagePreviewContainer) {
                    const newDiv = document.createElement("div");
                    newDiv.id = "imagePreviewContainer";
                    newDiv.appendChild(imagePreview);
                    carForm.insertBefore(newDiv, carForm.querySelector("button[type='submit']"));
                }
            });
        
            // Search cars
            searchInput.addEventListener("input", renderCars);
        
            // Render initial cars
            renderCars();
        });
        