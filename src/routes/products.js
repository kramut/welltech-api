"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
router.get('/', productController_1.productController.getAll);
router.get('/:id', productController_1.productController.getById);
router.post('/', productController_1.productController.create);
router.put('/:id', productController_1.productController.update);
router.delete('/:id', productController_1.productController.delete);
exports.default = router;
//# sourceMappingURL=products.js.map