"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.affiliateEarningService = void 0;
const prisma_1 = require("../lib/prisma");
exports.affiliateEarningService = {
    async getAll() {
        return prisma_1.prisma.affiliateEarning.findMany({
            include: {
                product: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
    async getById(id) {
        return prisma_1.prisma.affiliateEarning.findUnique({
            where: { id },
            include: {
                product: true,
            },
        });
    },
    async getByProductId(productId) {
        return prisma_1.prisma.affiliateEarning.findMany({
            where: { productId },
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
    async getStats() {
        const earnings = await prisma_1.prisma.affiliateEarning.findMany({
            include: {
                product: true,
            },
        });
        const totalClicks = earnings.reduce((sum, e) => sum + e.clicks, 0);
        const totalConversions = earnings.reduce((sum, e) => sum + e.conversions, 0);
        const totalRevenue = earnings.reduce((sum, e) => sum + Number(e.revenue), 0);
        const conversionRate = totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0;
        return {
            totalClicks,
            totalConversions,
            totalRevenue,
            conversionRate: Number(conversionRate.toFixed(2)),
            earnings,
        };
    },
    async create(data) {
        return prisma_1.prisma.affiliateEarning.create({
            data: {
                productId: data.productId,
                clicks: data.clicks || 0,
                conversions: data.conversions || 0,
                revenue: data.revenue || 0,
            },
            include: {
                product: true,
            },
        });
    },
    async update(id, data) {
        return prisma_1.prisma.affiliateEarning.update({
            where: { id },
            data: {
                ...(data.clicks !== undefined && { clicks: data.clicks }),
                ...(data.conversions !== undefined && { conversions: data.conversions }),
                ...(data.revenue !== undefined && { revenue: data.revenue }),
            },
            include: {
                product: true,
            },
        });
    },
    async delete(id) {
        return prisma_1.prisma.affiliateEarning.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=affiliateEarningService.js.map