import studentData from "./data/students.json";
import { PrismaClient } from "@prisma/client";
import animalsData from "./data/animals.json";

const prisma = new PrismaClient();

const seedStudents = async () => {
  // Seed every student
  for (let i = 0; i < studentData.length; i++) {
    const thisStudent = studentData[i];
    await prisma.student.create({
      data: thisStudent,
    });
  }
};

seedStudents();
// console.log("seed")

const seedAnimals = () => {
  animalsData.forEach(async (animal) => {
    await prisma.animal.create({
      data: {
        name: animal.name,
        kind: animal.kind,
        age: animal.age,
        hasBeenFed: animal.hasBeenFed,
        imgUrl: animal.imgUrl,
      },
    });
  });
};
seedAnimals();
