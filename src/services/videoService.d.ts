import { CreateVideoInput, UpdateVideoInput } from '../types';
export declare const videoService: {
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    getByArticleId(articleId: number): Promise<any>;
    incrementTiktokViews(id: number): Promise<any>;
    create(data: CreateVideoInput): Promise<any>;
    update(id: number, data: UpdateVideoInput): Promise<any>;
    delete(id: number): Promise<any>;
};
//# sourceMappingURL=videoService.d.ts.map