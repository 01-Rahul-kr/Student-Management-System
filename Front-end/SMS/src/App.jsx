import { useEffect, useState } from "react";
import axios from "axios";
import AddStudent from "./Component/AddStudent";
import StudentList from "./Component/StudetnList";
import "./App.css";
import "./LandingPage.css";

function App() {
  const [enter, setEnter] = useState(false);
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const BASE_URL = "http://localhost:8081/students";

  const fetchStudents = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setStudents(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (enter) {
      fetchStudents();
    }
  }, [enter]);

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ LANDING PAGE
  if (!enter) {
    return (
      <div className="landing">
        <div className="landing-content">
          <h1>Student Management System</h1>
          <p>Manage students easily with a clean dashboard</p>

          <button className="enter-btn" onClick={() => setEnter(true)}>
            Enter Dashboard →
          </button>
        </div>
      </div>
    );
  }

  // ✅ MAIN DASHBOARD
  return (
    <div className="container">
      <h1 className="title">Student Dashboard</h1>

      <div className="card">
        <AddStudent fetchStudents={fetchStudents} />
      </div>

      <div className="card">
        <input
          type="text"
          placeholder="Search student..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <StudentList
          students={filteredStudents}
          fetchStudents={fetchStudents}
        />
      </div>
    </div>
  );
}

export default App;