/**
 * 测试oracle数据库
 */

const selfClient = require('./oracle');

(async () => {
    let sql = `SELECT
                     *
                 FROM
                     (
                         SELECT
                             ROWNUM rm,
                             t_person.*
                         FROM
                             (
                                 SELECT
                                     "TEST"."person".*
                                 FROM
                                     "TEST"."person"
                                 ORDER BY
                                     "TEST"."person"."age" DESC
                             ) t_person
                         WHERE
                             ROWNUM < 20
                     )
                 WHERE
                     rm > 0`
    let result = await selfClient.execute(sql);
})()