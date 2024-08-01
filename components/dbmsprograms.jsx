const dbmsPrograms = [
    {
      id: 1,
      name: "Program 1",
      code: `
  -- Creating a new database
  CREATE DATABASE myDatabase;
  USE myDatabase;
      `,
    },
    {
      id: 2,
      name: "Program 2",
      code: `
  -- Creating a new table
  CREATE TABLE Students (
      StudentID INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50),
      DateOfBirth DATE
  );
      `,
    },
    // Add more DBMS programs as needed
  ];
  
  export default dbmsPrograms;
  