import { Product, Article, Video, AffiliateEarning } from '@prisma/client';
export type { Product, Article, Video, AffiliateEarning };
export interface CreateProductInput {
    name: string;
    category: string;
    description?: string;
    price?: number;
    affiliateLink: string;
    affiliateProgram?: string;
    commissionPercentage?: number;
    imageUrl?: string;
}
export interface UpdateProductInput {
    name?: string;
    category?: string;
    description?: string;
    price?: number;
    affiliateLink?: string;
    affiliateProgram?: string;
    commissionPercentage?: number;
    imageUrl?: string;
}
export interface CreateArticleInput {
    title: string;
    slug: string;
    category: string;
    content: string;
    seoMetaTitle?: string;
    seoMetaDescription?: string;
    featuredImageUrl?: string;
    productIds?: number[];
    publishedAt?: Date;
}
export interface UpdateArticleInput {
    title?: string;
    slug?: string;
    category?: string;
    content?: string;
    seoMetaTitle?: string;
    seoMetaDescription?: string;
    featuredImageUrl?: string;
    productIds?: number[];
    publishedAt?: Date;
}
export interface CreateVideoInput {
    title: string;
    articleId?: number;
    script: string;
    videoUrl?: string;
    tiktokUrl?: string;
}
export interface UpdateVideoInput {
    title?: string;
    articleId?: number;
    script?: string;
    videoUrl?: string;
    tiktokUrl?: string;
    tiktokViews?: number;
}
export interface CreateAffiliateEarningInput {
    productId: number;
    clicks?: number;
    conversions?: number;
    revenue?: number;
}
export interface UpdateAffiliateEarningInput {
    clicks?: number;
    conversions?: number;
    revenue?: number;
}
//# sourceMappingURL=index.d.ts.map