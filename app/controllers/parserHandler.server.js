'use strict';

function parserHandler() {
    
    this.getInfo = function(req, res) {
        
        if(!req) {
            res.json("Error - no request");
        }
        
        if(!req.headers) {
            res.json("Error - no request header found");
        }
        
        if(!req.headers["x-forwarded-for"]) {
            res.json("Error - no ip addr found");
        }
        
        if(!req.headers["accept-language"]) {
            res.json("Error - no lang found");
        }
        
        if(!req.headers["user-agent"]) {
            res.json("Error - no Op Sys Found")
        }
        
        var ipAddr = req.headers["x-forwarded-for"];
        var lang = req.headers["accept-language"].split(",")[0];
        var userAgent = req.headers["user-agent"];
        var opSys = userAgent.substring(userAgent.indexOf("(")+1,userAgent.indexOf(")"));
        res.json({"ipaddress": ipAddr, "language": lang, "software": opSys});
    };
}

module.exports = parserHandler;