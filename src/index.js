"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Routes
const products_1 = __importDefault(require("./routes/products"));
const articles_1 = __importDefault(require("./routes/articles"));
const videos_1 = __importDefault(require("./routes/videos"));
const affiliateEarnings_1 = __importDefault(require("./routes/affiliateEarnings"));
// Middleware
const errorHandler_1 = require("./middleware/errorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'WellTech Backend API is running!',
        version: '1.0.0',
        endpoints: {
            products: '/api/products',
            articles: '/api/articles',
            videos: '/api/videos',
            affiliateEarnings: '/api/affiliate-earnings',
        },
    });
});
app.use('/api/products', products_1.default);
app.use('/api/articles', articles_1.default);
app.use('/api/videos', videos_1.default);
app.use('/api/affiliate-earnings', affiliateEarnings_1.default);
// Error handler (deve essere l'ultimo middleware)
app.use(errorHandler_1.errorHandler);
app.listen(port, () => {
    console.log(`⚡️ Server is running on port ${port}`);
    console.log(`📚 API available at http://localhost:${port}/api`);
});
//# sourceMappingURL=index.js.map