let obj = JSON.parse($response.body);
obj ={
  "det-compute": {
    "pairingStatus": "DONE",
    "pairingCode": "ZNXTUAN67EXUUTCM",
    "expireTime": "2022-10-29T09:31:59.889Z"
  },
  "vector-rank": {
    "pairingStatus": "DONE",
    "paringCode": "ZNXTUANTGRW94Y0C",
    "expireTime": "2022-10-29T09:31:59.889Z"
  },
  "linear-eqn": {
    "pairingStatus": "DONE",
    "paringCode": "ZNXTUANGS9AWCL8F",
    "expireTime": "2022-10-29T09:31:59.889Z"
  },
  "eigen": {
    "pairingStatus": "DONE",
    "paringCode": "ZNXTUANN8HF7BRTW",
    "expireTime": "2022-10-29T09:31:59.889Z"
  },
  "quad-form": {
    "pairingStatus": "DONE",
    "paringCode": "ZNXTUANEX5FCC9AL",
    "expireTime": "2022-10-29T09:31:59.889Z"
  }
};
$done({body: JSON.stringify(obj)});
