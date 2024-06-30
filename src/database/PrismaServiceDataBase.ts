import { INestApplication } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient().$extends({
    client: {
      async onModuleInit() {
        await Prisma.getExtensionContext(this).$connect();
      },
      async enableShutdownHooks(app: INestApplication) {
        Prisma.getExtensionContext(this).$on('beforeExit', async () => {
          await app.close();
        });
      },
    },
  });