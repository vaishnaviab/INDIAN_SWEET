const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();
db.$connect().then(() => {
  console.log("? Prisma client connected on", process.version);
  return db.$disconnect();
}).catch(e => {
  console.error("? Prisma test failed:", e);
  process.exit(1);
});
