"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const dbContent_1 = require("./dbContent");
class Dbs {
    static init() {
        db_1.Db.init();
        Dbs.content = new dbContent_1.DbContent();
        // Dbs.product = new DbProduct();
        // Dbs.productIndex = new DbProductIndex();
        // Dbs.pointshop = new DbPointShop();
    }
}
exports.Dbs = Dbs;
Dbs.unit = 24;
var db_2 = require("./db");
exports.Db = db_2.Db;
//# sourceMappingURL=dbs.js.map