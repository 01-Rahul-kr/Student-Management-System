import axios from "axios";
import "./StudentList.css";

const StudentList = ({ students, fetchStudents }) => {

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div>
      <h2 className="list-title">Student Records</h2>

      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td data-label="Name">{s.name}</td>
                <td data-label="Email">{s.email}</td>
                <td data-label="Course">{s.course}</td>
                <td data-label="Action">
                  <button
                    className="btn-delete"
                    onClick={() => deleteStudent(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;