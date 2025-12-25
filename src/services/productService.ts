import { prisma } from '../lib/prisma';
import { CreateProductInput, UpdateProductInput } from '../types';

export const productService = {
  async getAll() {
    if (!prisma) return [];
    return prisma.product.findMany({
      include: {
        affiliateEarnings: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async getById(id: number) {
    if (!prisma) return null;
    return prisma.product.findUnique({
      where: { id },
      include: {
        affiliateEarnings: true,
      },
    });
  },

  async getByCategory(category: string) {
    if (!prisma) return [];
    return prisma.product.findMany({
      where: { category },
      include: {
        affiliateEarnings: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async create(data: CreateProductInput) {
    if (!prisma) throw new Error('Database non configurato. Configura DATABASE_URL e esegui le migrazioni.');
    return prisma.product.create({
      data: {
        name: data.name,
        category: data.category,
        description: data.description,
        price: data.price ? data.price : undefined,
        affiliateLink: data.affiliateLink,
        affiliateProgram: data.affiliateProgram,
        commissionPercentage: data.commissionPercentage ? data.commissionPercentage : undefined,
        imageUrl: data.imageUrl,
      },
    });
  },

  async update(id: number, data: UpdateProductInput) {
    if (!prisma) throw new Error('Database non configurato.');
    return prisma.product.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.category && { category: data.category }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.price !== undefined && { price: data.price }),
        ...(data.affiliateLink && { affiliateLink: data.affiliateLink }),
        ...(data.affiliateProgram !== undefined && { affiliateProgram: data.affiliateProgram }),
        ...(data.commissionPercentage !== undefined && { commissionPercentage: data.commissionPercentage }),
        ...(data.imageUrl !== undefined && { imageUrl: data.imageUrl }),
      },
    });
  },

  async delete(id: number) {
    if (!prisma) throw new Error('Database non configurato.');
    return prisma.product.delete({
      where: { id },
    });
  },
};

