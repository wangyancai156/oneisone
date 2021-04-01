import { Db } from "./db";
import { DebounceSettings } from "lodash";

export class DbContent extends Db {

    private db: string;
    constructor() {
        super('content');
        this.db = this.databaseName;
        // let test = this.istest ? "$test" : "";

    }

    async queryProduct(): Promise<any> {

        var querySql: string = `SELECT * FROM ${this.db}.product `;

        const ret = await this.tableFromSql(querySql);
        return ret;
    }

    async queryImage(type: any, pageStart: number, pageSize: number): Promise<any> {

        var querySql: string = `SELECT * FROM ${this.db}.image where type=? ORDER BY id desc LIMIT ?,?;  `;

        const ret = await this.tableFromSql(querySql, [type, pageStart, pageSize]);
        return ret;
    }


    async querySwiper(): Promise<any> {

        var querySql: string = `SELECT * FROM ${this.db}.swiper order by sort`;

        const ret = await this.tableFromSql(querySql);
        return ret;
    }

    async queryAbout(): Promise<any> {

        var querySql: string = `SELECT  * FROM ${this.db}.about limit 1 `;

        const ret = await this.tableFromSql(querySql);
        return ret;
    }

}
