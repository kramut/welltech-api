import { Request, Response } from 'express';
import { analyticsService } from '../services/analyticsService';

export const analyticsController = {
  async getDashboard(req: Request, res: Response) {
    try {
      const dashboard = await analyticsService.getDashboard();
      res.json(dashboard);
    } catch (error) {
      console.error('Error fetching dashboard analytics:', error);
      res.status(500).json({ error: 'Failed to fetch dashboard analytics' });
    }
  },
};




