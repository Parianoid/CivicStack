const Complaint = require("../models/Complaint");

// CREATE
const createComplaint = async (req, res) => {
  try {
    const { title, description } = req.body;

    let priority = "normal";
    let category = "general";

    const text = (title + " " + description).toLowerCase();

    // Priority logic
    if (
      text.includes("urgent") ||
      text.includes("fire") ||
      text.includes("accident") ||
      text.includes("danger")
    ) {
      priority = "high";
    } else if (
      text.includes("water") ||
      text.includes("electricity") ||
      text.includes("road")
    ) {
      priority = "medium";
    }

    // Category logic
    if (text.includes("water") || text.includes("pipe")) {
      category = "water";
    } else if (text.includes("electricity") || text.includes("power")) {
      category = "electricity";
    } else if (text.includes("road") || text.includes("pothole")) {
      category = "road";
    } else if (text.includes("garbage") || text.includes("trash")) {
      category = "sanitation";
    }

    const complaint = new Complaint({
      title,
      description,
      priority,
      category,
    });

    const savedComplaint = await complaint.save();
    res.status(201).json(savedComplaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE STATUS
const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Complaint.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// FILTER BY PRIORITY
const getByPriority = async (req, res) => {
  try {
    const { priority } = req.params;
    const complaints = await Complaint.find({ priority });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// FILTER BY CATEGORY
const getByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const complaints = await Complaint.find({ category });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SUMMARY (ONLY ONE — CLEAN VERSION)
const getSummary = async (req, res) => {
  try {
    const total = await Complaint.countDocuments();

    const resolved = await Complaint.countDocuments({
      status: "resolved",
    });

    const pending = await Complaint.countDocuments({
      status: { $ne: "resolved" },
    });

    const highPriority = await Complaint.countDocuments({
      priority: "high",
    });

    res.json({
      total,
      resolved,
      pending,
      highPriority,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// EXPORT
module.exports = {
  createComplaint,
  getComplaints,
  updateStatus,
  getByPriority,
  getByCategory,
  getSummary,
};