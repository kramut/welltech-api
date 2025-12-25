import { prisma } from '../lib/prisma';

export function checkPrisma() {
  if (!prisma) {
    throw new Error('Database non configurato. Configura DATABASE_URL e esegui: npx prisma migrate dev && npx prisma generate');
  }
}

export function safePrisma() {
  return prisma;
}




