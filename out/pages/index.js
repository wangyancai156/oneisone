"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = require("express");
const home_1 = require("./home");
const about_1 = require("./about");
const product_1 = require("./product");
const honor_1 = require("./honor");
const news_1 = require("./news");
const contact_1 = require("./contact");
const strength_1 = require("./strength");
const sitemap_1 = require("./sitemap");
exports.homeRouter = express_1.Router({ mergeParams: true });
exports.homeRouter.get('/', home_1.home);
exports.homeRouter.get('/home', home_1.home);
exports.homeRouter.get('/about', about_1.about);
exports.homeRouter.get('/product', product_1.product);
exports.homeRouter.get('/honor', honor_1.honor);
exports.homeRouter.get('/news', news_1.news);
exports.homeRouter.get('/contact', contact_1.contact);
exports.homeRouter.get('/strength', strength_1.strength);
exports.homeRouter.get('/sitemap', sitemap_1.sitemap);
//# sourceMappingURL=index.js.map