'use strict';

function parserHandler() {
    
    this.getInfo = function(req, res) {
        var ipAddr = req.headers["x-forwarded-for"];
        var lang = req.headers["accept-language"].split(",")[0];
        var userAgent = req.headers["user-agent"];
        var opSys = userAgent.substring(userAgent.indexOf("(")+1,userAgent.indexOf(")"));
        res.json({"ipaddress": ipAddr, "language": lang, "software": opSys});
    };
    
}

module.exports = parserHandler;