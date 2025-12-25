"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const affiliateEarningController_1 = require("../controllers/affiliateEarningController");
const router = (0, express_1.Router)();
router.get('/stats', affiliateEarningController_1.affiliateEarningController.getStats);
router.get('/', affiliateEarningController_1.affiliateEarningController.getAll);
router.get('/:id', affiliateEarningController_1.affiliateEarningController.getById);
router.post('/', affiliateEarningController_1.affiliateEarningController.create);
router.put('/:id', affiliateEarningController_1.affiliateEarningController.update);
router.delete('/:id', affiliateEarningController_1.affiliateEarningController.delete);
exports.default = router;
//# sourceMappingURL=affiliateEarnings.js.map