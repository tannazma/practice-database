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
};

runQueries(); // Run the queries
