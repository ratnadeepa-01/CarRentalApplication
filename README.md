🚗 Car Rental Platform

A modern Car Rental Web Application that allows users to browse available cars, view details, book vehicles, and manage reservations. The platform also includes an Owner Dashboard for managing cars and bookings.

📌 Features
👤 User Features
Browse available cars
View detailed car information
Book cars for a selected rental period
View and manage personal bookings
Responsive user interface
🧑‍💼 Owner/Admin Features
Dashboard with platform statistics
Add new cars to the platform
Manage existing cars
Manage bookings
View booking status (pending / confirmed)
🖥️ Tech Stack
Frontend
React.js
React Router
Tailwind CSS
Vite
Backend (Future Integration)
Node.js
Express.js
Database (Future Integration)
MongoDB
📂 Project Structure
car-rental/
│
├── src/
│   ├── assets/
│   │   └── assets.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── owner/
│   │       └── Title.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Cars.jsx
│   │   ├── CarDetails.jsx
│   │   ├── MyBookings.jsx
│   │   └── owner/
│   │       ├── Dashboard.jsx
│   │       ├── AddCar.jsx
│   │       ├── ManageCar.jsx
│   │       └── ManageBookings.jsx
│   │
│   ├── layout/
│   │   └── Sidebar.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── README.md

Now GitHub will display it perfectly aligned.

📊 Dashboard

The Owner Dashboard provides insights such as:

Total Cars
Total Bookings
Pending Bookings
Completed Bookings
Monthly Revenue
Recent Booking Activities
🧭 Routing Structure
/                  → Home
/cars              → Car listing
/car-details/:id   → Car details page
/my-bookings       → User bookings

/owner             → Owner dashboard
/owner/add-car     → Add new car
/owner/manage-car  → Manage existing cars
/owner/manage-bookings → Manage bookings

Nested routing is implemented using React Router <Outlet />.

⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/your-username/car-rental.git
2️⃣ Navigate into project
cd car-rental
3️⃣ Install dependencies
npm install
4️⃣ Run development server
npm run dev
🚀 Future Improvements
User authentication system
Payment gateway integration
Backend API with Node.js & Express
MongoDB database integration
Cloud image storage
Booking notifications
👨‍💻 Author

Ratnadeepa K P
ECE Student | Web Development Enthusiast

⭐ If you like this project, consider starring the repository.
