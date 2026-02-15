const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 

let students = [
  { id: 1, name: 'Somchai', age: 20, major: 'Computer Science' },
  { id: 2, name: 'Suda', age: 19, major: 'Information Technology' },
  { id: 3, name: 'Anan', age: 21, major: 'Software Engineering' },
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  res.json(student);
});

app.post('/students', (req, res) => {
  const { name, age, major } = req.body;

  if (!name || !age || !major) {
    return res.status(400).json({ message: 'Please provide name, age and major' });
  }

  const newStudent = {
    id: Date.now(),
    name,
    age,
    major,
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
});

app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, major } = req.body;

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  students[index] = {
    ...students[index],
    name: name ?? students[index].name,
    age: age ?? students[index].age,
    major: major ?? students[index].major,
  };

  res.json(students[index]);
});


app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const deleted = students.splice(index, 1);

  res.json({ message: 'Deleted successfully', student: deleted[0] });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
