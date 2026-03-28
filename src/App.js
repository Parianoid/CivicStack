import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [complaints, setComplaints] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");

  const API = "http://localhost:5000/api/complaints";

  const fetchComplaints = async () => {
    setLoading(true);
    const res = await axios.get(API).catch(() => null);
    if (res) setComplaints(res.data);
    setLoading(false);
  };

  const fetchSummary = async () => {
    const res = await axios.get(`${API}/summary`).catch(() => null);
    if (res) setSummary(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(API, {
      title,
      description,
      location,
    }).catch(() => {});

    setTitle("");
    setDescription("");
    setLocation("");

    fetchComplaints();
    fetchSummary();
  };

  useEffect(() => {
    fetchComplaints();
    fetchSummary();
  }, []);

  // ✅ RETURN (THIS WAS MISSING / BROKEN)
  return (
    <div className="container">

      <h1 className="title">CivicStack 🚀</h1>

      {/* FORM */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* SUMMARY */}
      <div className="summary">
        <div className="card">Total: {summary.total || 0}</div>
        <div className="card">Resolved: {summary.resolved || 0}</div>
        <div className="card">Pending: {summary.pending || 0}</div>
        <div className="card">High: {summary.highPriority || 0}</div>
      </div>

      {/* LOADING */}
      {loading && <p>Loading...</p>}

      {/* LIST */}
      {complaints.map((c) => (
        <div key={c._id} className="complaint">
          <h3>{c.title}</h3>
          <p>{c.description}</p>

          <span className={`badge ${c.priority}`}>
            {c.priority}
          </span>

          <span> {c.status}</span>

          <button
            className="resolve-btn"
            onClick={async () => {
              await axios.put(`${API}/${c._id}`, {
                status: "resolved",
              }).catch(() => {});
              fetchComplaints();
              fetchSummary();
            }}
          >
            Resolve
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;