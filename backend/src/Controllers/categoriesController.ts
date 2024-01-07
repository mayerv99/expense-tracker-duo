import prisma from "../prisma";

export async function getUsersCategories(userId: string) {
  const categories = await prisma.category.findMany({
    where: { userId: userId },
  });

  return categories;
}

export async function checkIfCategoryExists(userId: string, name: string) {
  const category = await prisma.category.findFirst({
    where: {
      userId,
      name,
    },
  });

  if (!category) {
    return false;
  }
  return true;
}

export async function createNewCategory(userId: string, name: string) {
  await prisma.category.create({ data: { userId, name } });
}
