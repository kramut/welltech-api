import { prisma } from '../lib/prisma';
import { CreateArticleInput, UpdateArticleInput } from '../types';

export const articleService = {
  async getAll() {
    return prisma.article.findMany({
      include: {
        videos: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async getById(id: number) {
    return prisma.article.findUnique({
      where: { id },
      include: {
        videos: true,
      },
    });
  },

  async getBySlug(slug: string) {
    return prisma.article.findUnique({
      where: { slug },
      include: {
        videos: true,
      },
    });
  },

  async getByCategory(category: string) {
    return prisma.article.findMany({
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
    return prisma.article.findMany({
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

  async incrementViews(id: number) {
    return prisma.article.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  },

  async create(data: CreateArticleInput) {
    return prisma.article.create({
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

  async update(id: number, data: UpdateArticleInput) {
    return prisma.article.update({
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

  async delete(id: number) {
    return prisma.article.delete({
      where: { id },
    });
  },
};




