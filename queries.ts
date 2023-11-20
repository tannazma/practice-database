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
};

runQueries(); // Run the queries
