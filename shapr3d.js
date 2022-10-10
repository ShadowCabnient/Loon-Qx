let obj = JSON.parse($response.body);
obj = {
  //"id": "b750213e-9b39-49ec-9679-009b97736e89",
  //"email": "445165653@qq.com",
  "subscriptionType": "edu",
  "subscriptions": [{
    "id": 501413,
    "type": "edu",
    "tier": "pro",
    "effectiveFeatureSet": "pro",
    "period": "yearly",
    "purchaseDate": "2022-04-21T03:01:15.302Z",
    "expirationDate": "2099-12-31T03:01:15.302Z",
    "autoRenewStatus": false,
    "isTrial": false
  }],
  "subscriptionExpires": "2023-04-21T03:01:15.302Z",
  "hasEmail": true,
  "hasPassword": true,
  "hasFacebookID": false,
  "syncPermissions": {
    "projectSyncAllowed": true,
    "projectSyncFeatureFlag": true
  },
  "plans": {
    "paddle.lite.monthly": {
      "tier": "lite",
      "period": "monthly",
      "isTrialEligible": false,
      "checkoutURL": "https://account.shapr3d.com/?period=monthly&tier=lite"
    },
    "paddle.lite.yearly": {
      "tier": "lite",
      "period": "yearly",
      "isTrialEligible": false,
      "checkoutURL": "https://account.shapr3d.com/?period=yearly&tier=lite"
    }
  }
};
$done({body: JSON.stringify(obj)});
