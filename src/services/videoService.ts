import { prisma } from '../lib/prisma';
import { CreateVideoInput, UpdateVideoInput } from '../types';

export const videoService = {
  async getAll() {
    return prisma.video.findMany({
      include: {
        article: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async getById(id: number) {
    return prisma.video.findUnique({
      where: { id },
      include: {
        article: true,
      },
    });
  },

  async getByArticleId(articleId: number) {
    return prisma.video.findMany({
      where: { articleId },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async incrementTiktokViews(id: number) {
    return prisma.video.update({
      where: { id },
      data: {
        tiktokViews: {
          increment: 1,
        },
      },
    });
  },

  async create(data: CreateVideoInput) {
    return prisma.video.create({
      data: {
        title: data.title,
        articleId: data.articleId,
        script: data.script,
        videoUrl: data.videoUrl,
        tiktokUrl: data.tiktokUrl,
      },
    });
  },

  async update(id: number, data: UpdateVideoInput) {
    return prisma.video.update({
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

  async delete(id: number) {
    return prisma.video.delete({
      where: { id },
    });
  },
};




