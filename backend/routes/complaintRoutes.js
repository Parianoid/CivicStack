const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getComplaints,
  updateStatus,
  getByPriority,
  getSummary
} = require("../controllers/complaintController");

console.log("✅ Complaint routes loaded");

// GET all complaints
router.get("/", getComplaints);

// SUMMARY
router.get("/summary", getSummary);

// FILTER
router.get("/priority/:priority", getByPriority);

// UPDATE
router.put("/:id", updateStatus);

// CREATE
router.post("/", (req, res, next) => {
  console.log("🔥 POST route hit");
  next();
}, createComplaint);

module.exports = router;