import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { author, posts } from "./seed-data.js";

async function main() {
  const ana = await prisma.user.upsert({
    where: { username: author.username },
    update: {},
    create: author,
  });

  console.log("Author created:", ana);

  await Promise.all(
    posts.map(post => {
      return prisma.post.upsert({
        where: { slug: post.slug },
        update: {},
        create: { ...post, authorId: ana.id },
      });
    })
  );

  console.log("Seed ok!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
