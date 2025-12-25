"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoController = void 0;
const videoService_1 = require("../services/videoService");
exports.videoController = {
    async getAll(req, res) {
        try {
            const { articleId } = req.query;
            if (articleId && typeof articleId === 'string') {
                const id = parseInt(articleId);
                if (!isNaN(id)) {
                    const videos = await videoService_1.videoService.getByArticleId(id);
                    return res.json(videos);
                }
            }
            const videos = await videoService_1.videoService.getAll();
            res.json(videos);
        }
        catch (error) {
            console.error('Error fetching videos:', error);
            res.status(500).json({ error: 'Failed to fetch videos' });
        }
    },
    async getById(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid video ID' });
            }
            const video = await videoService_1.videoService.getById(id);
            if (!video) {
                return res.status(404).json({ error: 'Video not found' });
            }
            res.json(video);
        }
        catch (error) {
            console.error('Error fetching video:', error);
            res.status(500).json({ error: 'Failed to fetch video' });
        }
    },
    async create(req, res) {
        try {
            const data = req.body;
            if (!data.title || !data.script) {
                return res.status(400).json({
                    error: 'Missing required fields: title, script'
                });
            }
            const video = await videoService_1.videoService.create(data);
            res.status(201).json(video);
        }
        catch (error) {
            console.error('Error creating video:', error);
            res.status(500).json({ error: 'Failed to create video' });
        }
    },
    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid video ID' });
            }
            const data = req.body;
            const video = await videoService_1.videoService.update(id, data);
            res.json(video);
        }
        catch (error) {
            console.error('Error updating video:', error);
            res.status(500).json({ error: 'Failed to update video' });
        }
    },
    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Invalid video ID' });
            }
            await videoService_1.videoService.delete(id);
            res.status(204).send();
        }
        catch (error) {
            console.error('Error deleting video:', error);
            res.status(500).json({ error: 'Failed to delete video' });
        }
    },
};
//# sourceMappingURL=videoController.js.map