"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Mockdata_1 = require("./Mockdata");
const app = express_1.default();
const PORT = process.env.PORT || 5000;
app.get('/api/products', (req, res) => {
    res.send(Mockdata_1.products);
});
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at 1 https://localhost:${PORT}`);
});
