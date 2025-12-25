import { CreateAffiliateEarningInput, UpdateAffiliateEarningInput } from '../types';
export declare const affiliateEarningService: {
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    getByProductId(productId: number): Promise<any>;
    getStats(): Promise<{
        totalClicks: any;
        totalConversions: any;
        totalRevenue: any;
        conversionRate: number;
        earnings: any;
    }>;
    create(data: CreateAffiliateEarningInput): Promise<any>;
    update(id: number, data: UpdateAffiliateEarningInput): Promise<any>;
    delete(id: number): Promise<any>;
};
//# sourceMappingURL=affiliateEarningService.d.ts.map