import mongoose from 'mongoose';
import fs from 'fs';
mongoose.connect('mongodb+srv://ratna:ratna@cluster0.q8r14ah.mongodb.net/CarRental').then(async () => {
  const cars = await mongoose.connection.collection('cars').find().toArray();
  let output = `TOTAL CARS: ${cars.length}\n---\n`;
  cars.forEach((c, i) => {
    output += `Car ${i+1}:\n`;
    output += `  ID: ${c._id}\n`;
    output += `  Brand: ${c.brand} ${c.model}\n`;
    output += `  Available: ${c.isAvailable}\n`;
    output += `  Image: ${c.image}\n`;
    output += `---\n`;
  });
  fs.writeFileSync('car_report.txt', output);
  console.log('Report written to car_report.txt');
  process.exit(0);
}).catch(e => console.error(e));
