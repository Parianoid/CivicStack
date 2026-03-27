# CivicStack 🚀

CivicStack is an intelligent complaint management system designed to streamline the reporting, classification, and resolution of civic issues.

## 🔥 Features

* Submit and track complaints
* Automatic priority detection (High, Medium, Normal)
* Automatic category classification (Water, Electricity, Road, Sanitation)
* Status management (Submitted → Resolved)
* Filtering by priority and category
* Dashboard analytics (total, resolved, pending)

## 🧠 Smart System

CivicStack includes a rule-based engine that analyzes complaint text to determine urgency and category, enabling efficient handling of real-world issues.

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB

## 📊 APIs

* POST /api/complaints → Create complaint
* GET /api/complaints → View all complaints
* PUT /api/complaints/:id → Update status
* GET /api/complaints/priority/:priority → Filter by priority
* GET /api/complaints/category/:category → Filter by category
* GET /api/complaints/summary → Dashboard data

## 🎯 Goal

To improve transparency, efficiency, and responsiveness in civic issue management through intelligent automation.
