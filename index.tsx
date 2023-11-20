console.log("jgj")

interface Grades {
    maths: number;
    arts: number;
    history: number;
  }
   
  interface Student {
    name: string;
    classNumber: number;
    grades: Grades;
  }
   
  const studentData: Student[] = [
    {
      name: "Alice",
      classNumber: 0,
      grades: {
        maths: 5,
        arts: 2,
        history: 7,
      },
    },
    {
      name: "Bob",
      classNumber: 0,
      grades: {
        maths: 6,
        arts: 6,
        history: 8,
      },
    },
    {
      name: "Jane",
      classNumber: 1,
      grades: {
        maths: 9,
        arts: 7,
        history: 5,
      },
    },
  ];

  const changeHistoryGrade = (student: Student, grade: number) => {
    const newGrades = { ...student.grades, history: grade };
    return { ...student, grades: newGrades };
  };
   
  studentData[2] = changeHistoryGrade(studentData[2], 6);
  console.log(studentData[2])

