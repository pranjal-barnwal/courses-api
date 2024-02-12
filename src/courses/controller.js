// including the DB connector
const pool = require('../../db');


const getStudents = (req, res) => {
    pool.query("SELECT * FROM courses;", (err, results) => {
        if(err) throw error;

        // if status is success, then we will be sending all rows
        res.status(200).json(results.rows);
    })
}



module.exports = {
    getStudents, 
}