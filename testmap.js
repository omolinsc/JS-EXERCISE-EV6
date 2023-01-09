const students = ["Tamara", "Oriol", "Joan", "Marcos", "Inma", "Marcelo"];

const mappedStudents = students.map((student) => {
    console.log(student);
    const newStudent = {
        name: student,
        bootcamp: "Full Stack Developer",
    }

    return newStudent;
});

console.log("MAPPED STUDENTS: ", mappedStudents);

const studentsNames = mappedStudents.map((student) => {
    return {
        ...student,
        nameLength: student.name.length,
    }
});

console.log("MAPPED STUDENTS + LENGTH", studentsNames);

const filteredStudents = studentsNames.filter((student) => {
    return student.nameLength < 6 && student.name.includes("a");
});

console.log("FILTERED STUDENTS: ", filteredStudents);


// SINTAXIS

// filteredStudents.map((student, index, studentsArray) => {});
// filteredStudents.reduce((accumulator, student, index, studentsArray) => {});

// reduce nos permite acceder y modificar el acumulador en cada iteración

// Queremos contar quantas letras tienen en total los estudiandes de nuestro array filtrado

const sacoDePapasFinal = filteredStudents.reduce((acc, student, index, studentsArray) => {

    const nuevoSacoDePapas = acc + student.nameLength;
    return nuevoSacoDePapas;

}, 50);

// 50 es el valor inicial de sacoDePapas

console.log("REDUCE: ", sacoDePapasFinal);