# CivicStack 🚀

CivicStack is an intelligent complaint management system designed to streamline the reporting, classification, and resolution of civic issues.

## 🔥 Features

* Submit and track complaints
* Automatic priority detection (High, Medium, Normal)
* Automatic category classification (Water, Electricity, Road, Sanitation)
* Status management (Submitted → Resolved)
* Filtering by priority and category
* Dashboard analytics (total, resolved, pending)
* <img width="1180" height="859" alt="image" src="https://github.com/user-attachments/assets/b6261c0c-9cd5-4245-9e4c-fbdce5232647" />
[google_screen_recording_2026-03-28T10-51_24.110Z.webm](https://github.com/user-attachments/assets/9804b0fd-45fc-4dd9-9da6-231f24ae4c54)


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
