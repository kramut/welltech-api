import { Request, Response } from 'express';
import { articleService } from '../services/articleService';
import { CreateArticleInput, UpdateArticleInput } from '../types';

export const articleController = {
  async getAll(req: Request, res: Response) {
    try {
      const { category, published } = req.query;
      
      if (published === 'true') {
        const articles = await articleService.getPublished();
        return res.json(articles);
      }
      
      if (category && typeof category === 'string') {
        const articles = await articleService.getByCategory(category);
        return res.json(articles);
      }
      
      const articles = await articleService.getAll();
      res.json(articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      res.status(500).json({ error: 'Failed to fetch articles' });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id || '');
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid article ID' });
      }

      const article = await articleService.getById(id);
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }

      res.json(article);
    } catch (error) {
      console.error('Error fetching article:', error);
      res.status(500).json({ error: 'Failed to fetch article' });
    }
  },

  async getBySlug(req: Request, res: Response) {
    try {
      const slug = req.params.slug || '';
      if (!slug) {
        return res.status(400).json({ error: 'Slug is required' });
      }
      const article = await articleService.getBySlug(slug);
      
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }

      // Increment views when viewing by slug (public view)
      await articleService.incrementViews(article.id);
      
      res.json(article);
    } catch (error) {
      console.error('Error fetching article:', error);
      res.status(500).json({ error: 'Failed to fetch article' });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const data: CreateArticleInput = req.body;
      
      if (!data.title || !data.slug || !data.category || !data.content) {
        return res.status(400).json({ 
          error: 'Missing required fields: title, slug, category, content' 
        });
      }

      const article = await articleService.create(data);
      res.status(201).json(article);
    } catch (error) {
      console.error('Error creating article:', error);
      if (error instanceof Error && error.message.includes('Unique constraint')) {
        return res.status(409).json({ error: 'Article with this slug already exists' });
      }
      res.status(500).json({ error: 'Failed to create article' });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id || '');
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid article ID' });
      }

      const data: UpdateArticleInput = req.body;
      const article = await articleService.update(id, data);
      res.json(article);
    } catch (error) {
      console.error('Error updating article:', error);
      res.status(500).json({ error: 'Failed to update article' });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id || '');
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid article ID' });
      }

      await articleService.delete(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting article:', error);
      res.status(500).json({ error: 'Failed to delete article' });
    }
  },
};

