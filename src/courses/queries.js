const getCoursesQry = "SELECT * FROM Courses";
const getCourseByIdQry = "SELECT * FROM Courses WHERE Course_id = $1;";
const addCourseQry = "INSERT INTO Courses (course_name, description, trainer, duration, rating, links, enrolled) VALUES ($1, $2, $3, $4, $5, $6, $7);";

module.exports = {
    getCoursesQry,
    getCourseByIdQry,
    addCourseQry,
};