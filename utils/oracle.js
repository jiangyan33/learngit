


// export class MySQL {
//     private readonly pool: Pool;

//     constructor(config: PoolOptions) {
//       this.pool = createPool(config);
//     }

//     async getConnection() {
//       return new MySQLConnection(await this.pool.getConnection())
//     }

//     //直接获取连接,并执行语句,然后返回结果
//     async execute(sql, ...params): Promise<MySQLResult> {
//       const connection = await this.getConnection();
//       try {
//         return await connection.execute(sql, ...params);
//       } finally {
//         connection.release();
//       }
//     }


// var oracledb = require('oracledb');
// var config = {
//     user: 'test',　　//用户名
//     password: 'test',　　//密码
//     //IP:数据库IP地址，PORT:数据库端口，SCHEMA:数据库名称
//     connectString: "localhost:49161/xe"
// };
// oracledb.getConnection(
//     config,
//     function (err, connection) {
//         if (err) {
//             console.error(err.message);
//             return;
//         }
//         //查询某表十条数据测试，注意替换你的表名
//         connection.execute("select * from TEST.person",
//             function (err, result) {
//                 if (err) {
//                     console.error(err.message);
//                     doRelease(connection);
//                     return;
//                 }
//                 //打印返回的表结构
//                 console.log(result.metaData);
//                 //打印返回的行数据
//                 console.log(result.rows);
//             });
//     });

// function doRelease(connection) {
//     connection.close(
//         function (err) {
//             if (err) {
//                 console.error(err.message);
//             }
//         });
// }


const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

// Get a non-pooled connection˜

class OracleConnection {
    /**
     * 执行单条SQL语句
     */
    async  execute(sql, params = []) {
        if (!this.pool) {
            this.pool = await oracledb.createPool(dbConfig);
        }
        // 获取数据库连接
        let connection = await this.pool.getConnection();
        console.log(sql);
        console.log(params);
        try {
            // 执行SQL
            let { metaData, rows } = await connection.execute(sql);
            let result = [];
            //返回的数据格式需要从新封装
            for (let i = 0; i < rows.length; i++) {
                let obj = {};
                //单元素数组
                for (let j = 0; j < rows[i].length; j++) {
                    obj[metaData[j]['name']] = rows[i][j];
                }
                result.push(obj);
            }
            return result;
            // let result=rows.map(it=>{
            //     it.
            // })
            // 返回SQL执行数据
        } finally {
            // 释放数据库连接
            connection.release();
        }
    }
}

const selfClient = module.exports = new OracleConnection();

// oracledb.getConnection(
//     {
//         user: dbConfig.user,
//         password: dbConfig.password,
//         connectString: dbConfig.connectString
//     },
//     function (err, connection) {
//         if (err) {
//             console.error(err.message);
//             return;
//         }
//         connection.execute(
//             // The statement to execute
//             `SELECT
//                 *
//             FROM
//                 (
//                     SELECT
//                         ROWNUM rm,
//                         t_person.*
//                     FROM
//                         (
//                             SELECT
//                                 "TEST"."person".*
//                             FROM
//                                 "TEST"."person"
//                             ORDER BY
//                                 "TEST"."person"."age" DESC
//                         ) t_person
//                     WHERE
//                         ROWNUM < 20
//                 )
//             WHERE
//                 rm > 0`,

//             // The "bind value" 180 for the bind variable ":id"


//             // execute() options argument.  Since the query only returns one
//             // row, we can optimize memory usage by reducing the default
//             // maxRows value.  For the complete list of other options see
//             // the documentation.
//             // {
//             //     maxRows: 1
//             //     //, outFormat: oracledb.OBJECT  // query result format
//             //     //, extendedMetaData: true      // get extra metadata
//             //     //, fetchArraySize: 100         // internal buffer allocation size for tuning
//             // },

//             // The callback function handles the SQL execution results
//             function (err, result) {
//                 if (err) {
//                     console.error(err.message);
//                     doRelease(connection);
//                     return;
//                 }
//                 console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
//                 console.log(result.rows);     // [ [ 180, 'Construction' ] ]
//                 doRelease(connection);
//             });
//     });

// // Note: connections should always be released when not needed
// function doRelease(connection) {
//     connection.close(
//         function (err) {
//             if (err) {
//                 console.error(err.message);
//             }
//         });
// }


values ${arrCount.map(() => '(?,?,?,?,?,?,?,?,?,?,?,?,?,?)').join()}`;