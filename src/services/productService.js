"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const prisma_1 = require("../lib/prisma");
exports.productService = {
    async getAll() {
        return prisma_1.prisma.product.findMany({
            include: {
                affiliateEarnings: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
    async getById(id) {
        return prisma_1.prisma.product.findUnique({
            where: { id },
            include: {
                affiliateEarnings: true,
            },
        });
    },
    async getByCategory(category) {
        return prisma_1.prisma.product.findMany({
            where: { category },
            include: {
                affiliateEarnings: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
    async create(data) {
        return prisma_1.prisma.product.create({
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
    async update(id, data) {
        return prisma_1.prisma.product.update({
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
    async delete(id) {
        return prisma_1.prisma.product.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=productService.js.map