const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Somchai", age: 20, major: "CE" },
  { id: 2, name: "Suda", age: 21, major: "IT" }
];

// ===== Middleware ตรวจสอบข้อมูล =====
function validateStudent(req, res, next) {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      message: "Invalid data"
    });
  }

  next(); 
}


app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

app.post("/students", validateStudent, (req, res) => {
  const newStudent = {
    id: students.length + 1,
    ...req.body
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[index] = { ...students[index], ...req.body };
  res.json(students[index]);
});

app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);

  res.json({ message: "Deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
