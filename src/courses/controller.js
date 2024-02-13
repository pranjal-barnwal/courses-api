// including the DB connector
const pool = require('../../db');
const queries = require('./queries');

const getCourses = (req, res) => {
    pool.query(queries.getCoursesQry, (err, results) => {
        if (err) throw error;
        res.status(200).json(results.rows);
        // only if status is success, then we will be sending all rows
    })
}


const getCourseById = (req, res) => {
    // extracting id from url parameter 
    const id = parseInt(req.params.id);
    pool.query(queries.getCourseByIdQry, [id], (err, results) => {
        if (err) throw error;
        res.status(200).json(results.rows);
    })
}


const addCourse = (req, res) => {
    const { course_name, description, trainer, duration, rating, links, enrolled } = req.body;
    
    pool.query(queries.addCourseQry, [course_name, description, trainer, duration, rating, links, enrolled], (err, results) => {
        if(err) throw error;
        res.status(201).send("Course created successfully!");
        console.log("Course created");
    })
}



module.exports = {
    getCourses,
    addCourse,
    getCourseById,
};


