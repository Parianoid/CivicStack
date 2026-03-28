const express = require("express");
const cors = require("cors");
require("dotenv").config();

// 🔥 ADD THIS LINE
const connectDB = require("./config/db");

// 🔥 CALL THIS FUNCTION
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/complaints/", require("./routes/complaintRoutes"));


// Test route
app.get("/", (req, res) => {
  res.send("CivicStack API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});