"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.affiliateEarningController = void 0;
const affiliateEarningService_1 = require("../services/affiliateEarningService");
exports.affiliateEarningController = {
    async getAll(req, res) {
        try {
            const { productId } = req.query;
            if (productId && typeof productId === 'string') {
                const id = parseInt(productId);
                if (!isNaN(id)) {
                    const earnings = await affiliateEarningService_1.affiliateEarningService.getByProductId(id);
                    return res.json(earnings);
                }
            }
            const earnings = await affiliateEarningService_1.affiliateEarningService.getAll();
            res.json(earnings);
        }
        catch (error) {
            console.error('Error fetching affiliate earnings:', error);
            res.status(500).json({ error: 'Failed to fetch affiliate earnings' });
        }
    },
    async getById(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid earning ID' });
            }
            const earning = await affiliateEarningService_1.affiliateEarningService.getById(id);
            if (!earning) {
                return res.status(404).json({ error: 'Earning not found' });
            }
            res.json(earning);
        }
        catch (error) {
            console.error('Error fetching earning:', error);
            res.status(500).json({ error: 'Failed to fetch earning' });
        }
    },
    async getStats(req, res) {
        try {
            const stats = await affiliateEarningService_1.affiliateEarningService.getStats();
            res.json(stats);
        }
        catch (error) {
            console.error('Error fetching stats:', error);
            res.status(500).json({ error: 'Failed to fetch stats' });
        }
    },
    async create(req, res) {
        try {
            const data = req.body;
            if (!data.productId) {
                return res.status(400).json({
                    error: 'Missing required field: productId'
                });
            }
            const earning = await affiliateEarningService_1.affiliateEarningService.create(data);
            res.status(201).json(earning);
        }
        catch (error) {
            console.error('Error creating earning:', error);
            res.status(500).json({ error: 'Failed to create earning' });
        }
    },
    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid earning ID' });
            }
            const data = req.body;
            const earning = await affiliateEarningService_1.affiliateEarningService.update(id, data);
            res.json(earning);
        }
        catch (error) {
            console.error('Error updating earning:', error);
            res.status(500).json({ error: 'Failed to update earning' });
        }
    },
    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid earning ID' });
            }
            await affiliateEarningService_1.affiliateEarningService.delete(id);
            res.status(204).send();
        }
        catch (error) {
            console.error('Error deleting earning:', error);
            res.status(500).json({ error: 'Failed to delete earning' });
        }
    },
};
//# sourceMappingURL=affiliateEarningController.js.map