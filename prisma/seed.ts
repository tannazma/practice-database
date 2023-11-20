import studentData from "./data/students.json";
import { PrismaClient } from "@prisma/client";
 
const prisma = new PrismaClient();
 
const seed = async () => {
  // Seed every student
  for (let i = 0; i < studentData.length; i++) {
    const thisStudent = studentData[i];
    await prisma.student.create({
      data: thisStudent,
    });
  }
};

seed();
// console.log("seed")