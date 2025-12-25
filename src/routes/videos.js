"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const videoController_1 = require("../controllers/videoController");
const router = (0, express_1.Router)();
router.get('/', videoController_1.videoController.getAll);
router.get('/:id', videoController_1.videoController.getById);
router.post('/', videoController_1.videoController.create);
router.put('/:id', videoController_1.videoController.update);
router.delete('/:id', videoController_1.videoController.delete);
exports.default = router;
//# sourceMappingURL=videos.js.map