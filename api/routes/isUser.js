var express = require("express");
var router = express.Router();
const con = require("./conn");


const handleQuery = async (username, pass) => {
    return new Promise((resolve, reject) => {
        var toQuery = "SELECT * FROM users WHERE username = '" + username + "' AND password = '"+pass + "'";
        console.log(toQuery);
        var respondo = ''
         con.query(toQuery, function (err, result, fields) {
            if(err){ return reject(err)};
            resolve(results);
            // console.log("this is the result from query: ");
            // console.log(result[0].id);
    
    
            return result[0].id;
        });
        // return respondo;
    })

}

router.get("/", async function(req,res,next){
    

    console.log("query is:")
    console.log(req.query)
    
    // return queryInfo;
    var user = req.query.user;
    var pass = req.query.pass;
    let toSend = await handleQuery(user, pass);
    console.log("BIG RESPONSE:")
    console.log(toSend);
    res.send(toSend);
    // con.end((err) => {
    //     console.log("closing request");
    // });
});

module.exports = router;