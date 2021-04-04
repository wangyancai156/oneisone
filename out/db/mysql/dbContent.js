"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbContent = void 0;
const db_1 = require("./db");
class DbContent extends db_1.Db {
    constructor() {
        super('content');
        this.db = this.databaseName;
        // let test = this.istest ? "$test" : "";
    }
    queryProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            var querySql = `SELECT * FROM ${this.db}.product `;
            const ret = yield this.tableFromSql(querySql);
            return ret;
        });
    }
    queryImage(type, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            var querySql = `SELECT * FROM ${this.db}.image where type=? ORDER BY id desc LIMIT ?,?;  `;
            const ret = yield this.tableFromSql(querySql, [type, pageStart, pageSize]);
            return ret;
        });
    }
    querySwiper() {
        return __awaiter(this, void 0, void 0, function* () {
            var querySql = `SELECT * FROM ${this.db}.swiper order by sort`;
            const ret = yield this.tableFromSql(querySql);
            return ret;
        });
    }
    queryAbout() {
        return __awaiter(this, void 0, void 0, function* () {
            var querySql = `SELECT  * FROM ${this.db}.about limit 1 `;
            const ret = yield this.tableFromSql(querySql);
            return ret;
        });
    }
}
exports.DbContent = DbContent;
//# sourceMappingURL=dbContent.js.map