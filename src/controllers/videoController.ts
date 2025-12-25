import { Request, Response } from 'express';
import { videoService } from '../services/videoService';
import { CreateVideoInput, UpdateVideoInput } from '../types';

export const videoController = {
  async getAll(req: Request, res: Response) {
    try {
      const { articleId } = req.query;
      
      if (articleId && typeof articleId === 'string') {
        const id = parseInt(articleId);
        if (!isNaN(id)) {
          const videos = await videoService.getByArticleId(id);
          return res.json(videos);
        }
      }
      
      const videos = await videoService.getAll();
      res.json(videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
      res.status(500).json({ error: 'Failed to fetch videos' });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id || '');
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid video ID' });
      }

      const video = await videoService.getById(id);
      if (!video) {
        return res.status(404).json({ error: 'Video not found' });
      }

      res.json(video);
    } catch (error) {
      console.error('Error fetching video:', error);
      res.status(500).json({ error: 'Failed to fetch video' });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const data: CreateVideoInput = req.body;
      
      if (!data.title || !data.script) {
        return res.status(400).json({ 
          error: 'Missing required fields: title, script' 
        });
      }

      const video = await videoService.create(data);
      res.status(201).json(video);
    } catch (error) {
      console.error('Error creating video:', error);
      res.status(500).json({ error: 'Failed to create video' });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id || '');
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid video ID' });
      }

      const data: UpdateVideoInput = req.body;
      const video = await videoService.update(id, data);
      res.json(video);
    } catch (error) {
      console.error('Error updating video:', error);
      res.status(500).json({ error: 'Failed to update video' });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id || '');
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid video ID' });
      }

      await videoService.delete(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting video:', error);
      res.status(500).json({ error: 'Failed to delete video' });
    }
  },
};

