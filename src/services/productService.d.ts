import { CreateProductInput, UpdateProductInput } from '../types';
export declare const productService: {
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    getByCategory(category: string): Promise<any>;
    create(data: CreateProductInput): Promise<any>;
    update(id: number, data: UpdateProductInput): Promise<any>;
    delete(id: number): Promise<any>;
};
//# sourceMappingURL=productService.d.ts.map