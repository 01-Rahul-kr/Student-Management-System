import{ useState } from "react";
import axios from "axios";
import "./AddStudent.css";

const AddStudent = ({ fetchStudents }) => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://student-management-system-backend-q4si.onrender.com/students", student);

      fetchStudents();

      setMessage("✅ Student added successfully!");

      setStudent({ name: "", email: "", course: "" });

      setTimeout(() => setMessage(""), 3000);

    } catch (error) {
      console.log(error);
      setMessage("❌ Failed to add student");
    }
  };

  return (
    <div>
      <h2 className="form-title">Add Student</h2>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            placeholder="Name"
            value={student.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
          />
          <input
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-add">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;