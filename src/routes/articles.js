"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articleController_1 = require("../controllers/articleController");
const router = (0, express_1.Router)();
router.get('/', articleController_1.articleController.getAll);
router.get('/slug/:slug', articleController_1.articleController.getBySlug);
router.get('/:id', articleController_1.articleController.getById);
router.post('/', articleController_1.articleController.create);
router.put('/:id', articleController_1.articleController.update);
router.delete('/:id', articleController_1.articleController.delete);
exports.default = router;
//# sourceMappingURL=articles.js.map