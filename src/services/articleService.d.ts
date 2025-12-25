import { CreateArticleInput, UpdateArticleInput } from '../types';
export declare const articleService: {
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    getBySlug(slug: string): Promise<any>;
    getByCategory(category: string): Promise<any>;
    getPublished(): Promise<any>;
    incrementViews(id: number): Promise<any>;
    create(data: CreateArticleInput): Promise<any>;
    update(id: number, data: UpdateArticleInput): Promise<any>;
    delete(id: number): Promise<any>;
};
//# sourceMappingURL=articleService.d.ts.map