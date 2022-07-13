/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require("../models"); // Import database models

// Seed database
const seedDB = async () => {
    // Create a new campus
    const dummy_campus = await Campus.create({
        name: "Hunter College",
        address: "695 Park Ave, New York, NY 10065",
        description: "This is a school in New York, New York.",
        imageUrl:
            "https://s29068.pcdn.co/wp-content/uploads/68th-street-campus.jpg",
    });
    // Create a new campus
    const dummy_campus2 = await Campus.create({
        name: "Queens College",
        address: "65-30 Kissena Blvd, Queens, NY 11367",
        description: "This is a school in Queens, New York.",
        imageUrl:
            "https://theticker.org/wp-content/uploads/2022/05/Queens-College-_-Queens-College-press-release.webp",
    });
    // Create a new campus
    const dummy_campus3 = await Campus.create({
        name: "Brooklyn College",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "This is a school in Brooklyn, New York.",
        imageUrl:
            "https://www.brooklyn.cuny.edu/web/adm_general/200204_East_Quad_738x330.jpg",
    });

    // Create a new student for a campus
    const dummy_student = await Student.create({
        firstname: "Joe",
        lastname: "Smith",
        email: "joe.smith@gmail.com",
        imageUrl: "",
        gpa: 3.9,
    });
    // Create a new student for a campus
    const dummy_student2 = await Student.create({
        firstname: "Mary",
        lastname: "Johnson",
        email: "mary.johnson@gmail.com",
        imageUrl: "",
        gpa: 4.0,
    });

    // Add students to campuses
    await dummy_student.setCampus(dummy_campus);
    await dummy_student2.setCampus(dummy_campus2);
};

// Export the database seeding function
module.exports = seedDB;
