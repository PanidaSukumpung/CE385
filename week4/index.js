// const express = require('express');

// const app = express();

// const port = 3000;

// app.get('/' , (req , res) => {
//     res.send('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`Server os running on http://localhost:${port}`);
// });

const operation = require('./work1');
console.log(operation("add" , 4 , 5));
