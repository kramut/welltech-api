import { Request, Response } from 'express';
export declare const affiliateEarningController: {
    getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getStats(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=affiliateEarningController.d.ts.map