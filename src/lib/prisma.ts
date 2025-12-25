let PrismaClient: any;
try {
  PrismaClient = require('@prisma/client').PrismaClient;
} catch (error) {
  console.warn('⚠️  Prisma Client non ancora generato. Esegui: npx prisma generate');
}

const globalForPrisma = globalThis as unknown as {
  prisma: any;
};

export const prisma = PrismaClient
  ? (globalForPrisma.prisma ?? new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    }))
  : null;

if (process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma;
}

