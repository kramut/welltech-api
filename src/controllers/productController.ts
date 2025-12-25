import { Request, Response } from 'express';
import { productService } from '../services/productService';
import { CreateProductInput, UpdateProductInput } from '../types';

export const productController = {
  async getAll(req: Request, res: Response) {
    try {
      const { category } = req.query;
      
      if (category && typeof category === 'string') {
        const products = await productService.getByCategory(category);
        return res.json(products);
      }
      
      const products = await productService.getAll();
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id || '');
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid product ID' });
      }

      const product = await productService.getById(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const data: CreateProductInput = req.body;
      
      if (!data.name || !data.category || !data.affiliateLink) {
        return res.status(400).json({ 
          error: 'Missing required fields: name, category, affiliateLink' 
        });
      }

      const product = await productService.create(data);
      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Failed to create product' });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id || '');
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid product ID' });
      }

      const data: UpdateProductInput = req.body;
      const product = await productService.update(id, data);
      res.json(product);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Failed to update product' });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id || '');
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid product ID' });
      }

      await productService.delete(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Failed to delete product' });
    }
  },
};

