// index.js

const express = require('express');
const app = express();
const PORT = 3000;

// Enable JSON request body parsing
app.use(express.json());

// In-memory array to store 'parked cars'
let parkedCars = [];

// 1) Park a car
app.post('/api/park', (req, res) => {
  const { licensePlate } = req.body;
  
  if (!licensePlate) {
    return res.status(400).json({ error: 'licensePlate is required' });
  }

  // Create a new "car" object
  const newCar = {
    id: parkedCars.length + 1,    // or use something like uuid if you prefer
    licensePlate,
    parkedAt: new Date().toISOString(),
  };

  parkedCars.push(newCar);
  return res.status(201).json({
    message: 'Car parked successfully',
    car: newCar,
  });
});

// 2) List all parked cars
app.get('/api/parked-cars', (req, res) => {
  res.json(parkedCars);
});

// 3) Unpark (remove) a car by ID
app.delete('/api/unpark/:id', (req, res) => {
  const { id } = req.params;
  
  // Find car index by matching the id
  const carIndex = parkedCars.findIndex(car => car.id === parseInt(id));
  if (carIndex === -1) {
    return res.status(404).json({ error: 'Car not found' });
  }

  // Remove the car from the array
  const [removedCar] = parkedCars.splice(carIndex, 1);
  return res.json({
    message: 'Car unparked successfully',
    car: removedCar,
  });
});

// Test route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Valet Parking App!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});