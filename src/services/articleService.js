"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleService = void 0;
const prisma_1 = require("../lib/prisma");
exports.articleService = {
    async getAll() {
        return prisma_1.prisma.article.findMany({
            include: {
                videos: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
    async getById(id) {
        return prisma_1.prisma.article.findUnique({
            where: { id },
            include: {
                videos: true,
            },
        });
    },
    async getBySlug(slug) {
        return prisma_1.prisma.article.findUnique({
            where: { slug },
            include: {
                videos: true,
            },
        });
    },
    async getByCategory(category) {
        return prisma_1.prisma.article.findMany({
            where: { category },
            include: {
                videos: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
    async getPublished() {
        return prisma_1.prisma.article.findMany({
            where: {
                publishedAt: {
                    not: null,
                    lte: new Date(),
                },
            },
            include: {
                videos: true,
            },
            orderBy: {
                publishedAt: 'desc',
            },
        });
    },
    async incrementViews(id) {
        return prisma_1.prisma.article.update({
            where: { id },
            data: {
                views: {
                    increment: 1,
                },
            },
        });
    },
    async create(data) {
        return prisma_1.prisma.article.create({
            data: {
                title: data.title,
                slug: data.slug,
                category: data.category,
                content: data.content,
                seoMetaTitle: data.seoMetaTitle,
                seoMetaDescription: data.seoMetaDescription,
                featuredImageUrl: data.featuredImageUrl,
                productIds: data.productIds || [],
                publishedAt: data.publishedAt,
            },
        });
    },
    async update(id, data) {
        return prisma_1.prisma.article.update({
            where: { id },
            data: {
                ...(data.title && { title: data.title }),
                ...(data.slug && { slug: data.slug }),
                ...(data.category && { category: data.category }),
                ...(data.content && { content: data.content }),
                ...(data.seoMetaTitle !== undefined && { seoMetaTitle: data.seoMetaTitle }),
                ...(data.seoMetaDescription !== undefined && { seoMetaDescription: data.seoMetaDescription }),
                ...(data.featuredImageUrl !== undefined && { featuredImageUrl: data.featuredImageUrl }),
                ...(data.productIds !== undefined && { productIds: data.productIds }),
                ...(data.publishedAt !== undefined && { publishedAt: data.publishedAt }),
            },
        });
    },
    async delete(id) {
        return prisma_1.prisma.article.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=articleService.js.map