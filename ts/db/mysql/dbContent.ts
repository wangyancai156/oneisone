import { Db } from "./db";
import { DebounceSettings } from "lodash";

export class DbContent extends Db {
    private sqlHomePostList: string;
    
    

    constructor() {
        super('content');
        let db = this.databaseName;
        let test = this.istest ? "$test" : "";
        this.sqlHomePostList = `
            SELECT  a.id, a.caption, a.discription as disp, c.path as image,
                    cp.update as date, d.hits, d.sumHits
            FROM    ${db}.tv_postpublish cp 
                    join ${db}.tv_post a on cp.post=a.id
                    -- ${db}.tv_post a 
                    left join ${db}.tv_template b on a.template=b.id 
                    left join ${db}.tv_image c on a.image=c.id
                    left join ${db}.tv_hot d on a.id=d.post
            WHERE   a.businessscope = 1 and cp.openweb = 1
            ORDER BY a.id desc
            LIMIT 10;
        `;
 
    }

    async homePostList(): Promise<any> {
        const ret = await this.tableFromSql(this.sqlHomePostList);
        return ret;
    }

    

} 
