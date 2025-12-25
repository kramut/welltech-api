"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const productService_1 = require("../services/productService");
exports.productController = {
    async getAll(req, res) {
        try {
            const { category } = req.query;
            if (category && typeof category === 'string') {
                const products = await productService_1.productService.getByCategory(category);
                return res.json(products);
            }
            const products = await productService_1.productService.getAll();
            res.json(products);
        }
        catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    },
    async getById(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid product ID' });
            }
            const product = await productService_1.productService.getById(id);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.json(product);
        }
        catch (error) {
            console.error('Error fetching product:', error);
            res.status(500).json({ error: 'Failed to fetch product' });
        }
    },
    async create(req, res) {
        try {
            const data = req.body;
            if (!data.name || !data.category || !data.affiliateLink) {
                return res.status(400).json({
                    error: 'Missing required fields: name, category, affiliateLink'
                });
            }
            const product = await productService_1.productService.create(data);
            res.status(201).json(product);
        }
        catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ error: 'Failed to create product' });
        }
    },
    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid product ID' });
            }
            const data = req.body;
            const product = await productService_1.productService.update(id, data);
            res.json(product);
        }
        catch (error) {
            console.error('Error updating product:', error);
            res.status(500).json({ error: 'Failed to update product' });
        }
    },
    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid product ID' });
            }
            await productService_1.productService.delete(id);
            res.status(204).send();
        }
        catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ error: 'Failed to delete product' });
        }
    },
};
//# sourceMappingURL=productController.js.map