const express = require('express');
const path = require('path');
const courseRoutes = require('./src/courses/routes');
const exp = require('constants');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  // Send the file as the response
  res.send("Namaste Pranjal");
})

app.use('/api/v1/courses', courseRoutes);



//:/ server listening on the set port
app.listen(port, () => {
    console.log(`Courses API server listening on port: ${port}`);
})