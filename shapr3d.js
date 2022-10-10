let obj = JSON.parse($response.body);
obj = {
  "subscriptionType": "edu",
  "subscriptions": [{
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
