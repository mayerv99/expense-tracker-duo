import { User } from "@prisma/client";
import prisma from "../prisma";

type CreateUserDataType = {
  name: string;
  email: string;
  password: string;
};

export async function validateUser(email: string, password: string) {
  // return userData or return false
  const user = await prisma.user.findFirst({ where: { email: email } });

  if (!user) {
    return false;
  }
  //TODO: Change this to validate hash
  if (password !== user.password) {
    return false;
  }
  return user;
}

export async function createNewUser(userData: CreateUserDataType) {
  const newUser = userData;

  try {
    return await prisma.user.create({ data: newUser });
  } catch (err) {
    return err;
  }
}
