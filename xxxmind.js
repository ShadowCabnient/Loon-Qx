


var body = $response.body;
var obj = JSON.parse(body);


 obj.["status"]=["trial"];
 obj.["expireTime"]=9999999999999;


body = JSON.stringify(obj);
$done({body});
