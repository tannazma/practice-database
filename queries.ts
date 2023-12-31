import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const runQueries = async () => {
  // We will make our queries here
  await prisma.student.create({
    data: {
      name: "Albert",
      classNumber: 1,
    },
  });
  // const students = await prisma.student.findMany();
  console.log("students");

  const studentsClass1 = await prisma.student.findMany({
    where: {
      classNumber: 1,
    },
  });
  console.log(studentsClass1);

  const studentWithId2 = await prisma.student.findUnique({
    where: {
      id: 2,
    },
  });
  console.log(studentWithId2);

  const firstStudentClass1 = await prisma.student.findFirst({
    where: {
      classNumber: 1,
    },
  });
  console.log(firstStudentClass1);

  await prisma.student.update({
    where: {
      id: 3,
    },
    data: {
      classNumber: 6,
    },
  });

  const updatedStudent = await prisma.student.findUnique({
    where: {
      id: 2,
    },
  });
  console.log(updatedStudent);

  const allStudentsBeforeDelet = await prisma.student.findMany();
  console.log(allStudentsBeforeDelet.length);

  await prisma.student.delete({
    where: {
      id: 2,
    },
  });

  const allStudentAfterDelet = await prisma.student.findMany();
  console.log(allStudentAfterDelet.length);
};

runQueries(); // Run the queries
