var mysql = require('promise-mysql'),
    makeQuery = (sql,callback) => {
        var con = mysql.createConnection({
            host:'localhost',
            database:'teknis',
            user:'teknis',
            password:'teknis'
        })
        .then(cn=>{
            var result = cn.query(sql)
            cn.end()
            return(result)
        })
        .then(rows => {
            callback(rows)
        })
    }
module.exports = {
    makeQuery:makeQuery
}