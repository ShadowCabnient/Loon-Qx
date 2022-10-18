let obj = JSON.parse($response.body);
obj ={
  "data" : {
    "status" : "ok",
    "expire" : "2099-12-31T20:51:01+08:00",
    "fee_record" : "no_record",
    "type" : "platinum",
    "user_id" : "Y01KkVZ6eEYjO3Gg"
  }
};
$done({body: JSON.stringify(obj)});
