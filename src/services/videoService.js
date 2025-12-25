"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoService = void 0;
const prisma_1 = require("../lib/prisma");
exports.videoService = {
    async getAll() {
        return prisma_1.prisma.video.findMany({
            include: {
                article: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
    async getById(id) {
        return prisma_1.prisma.video.findUnique({
            where: { id },
            include: {
                article: true,
            },
        });
    },
    async getByArticleId(articleId) {
        return prisma_1.prisma.video.findMany({
            where: { articleId },
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
    async incrementTiktokViews(id) {
        return prisma_1.prisma.video.update({
            where: { id },
            data: {
                tiktokViews: {
                    increment: 1,
                },
            },
        });
    },
    async create(data) {
        return prisma_1.prisma.video.create({
            data: {
                title: data.title,
                articleId: data.articleId,
                script: data.script,
                videoUrl: data.videoUrl,
                tiktokUrl: data.tiktokUrl,
            },
        });
    },
    async update(id, data) {
        return prisma_1.prisma.video.update({
            where: { id },
            data: {
                ...(data.title && { title: data.title }),
                ...(data.articleId !== undefined && { articleId: data.articleId }),
                ...(data.script && { script: data.script }),
                ...(data.videoUrl !== undefined && { videoUrl: data.videoUrl }),
                ...(data.tiktokUrl !== undefined && { tiktokUrl: data.tiktokUrl }),
                ...(data.tiktokViews !== undefined && { tiktokViews: data.tiktokViews }),
            },
        });
    },
    async delete(id) {
        return prisma_1.prisma.video.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=videoService.js.map