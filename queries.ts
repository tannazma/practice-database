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
  const students = await prisma.student.findMany();
  console.log(students);
};

runQueries(); // Run the queries
