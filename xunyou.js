let obj = JSON.parse($response.body);
obj ={
  "registerTime": "2022-09-03 22:19:33",
  "accelToken": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJjb250ZW50Ijoie1widGVuYW50XCI6XCJhbmRyb2lkXCIsXCJhY2NvdW50XCI6XCI4MjgzZGQ4OS01YWUxLTRlYzAtYjZjNS1kYTVjNTc3ODU0NDFcIixcInNjb3Blc1wiOltcIlZhdWx0XCIsXCJCYWNrYm9uZVwiXSxcInNob3J0SWRcIjpcIjY2NTI1Nzc3MzBcIixcImV4cGlyZVRpbWVcIjoxNjYyNDczOTczNTIyLFwic3RhdHVzXCI6MyxcImNyZWRpdFN0YXJ0XCI6MCxcImNyZWRpdExlbmd0aFwiOjAsXCJjcmVkaXRUeXBlXCI6MCxcImNyZWRpdElEXCI6XCJcIixcImFkdWx0VGltZVwiOjE0Njk0NjI0MDA4OTB9IiwiZXhwIjoxNjY4NTE1NjA1LCJpYXQiOjE2NjU5MjM2MDUsInN1YiI6IiJ9.KK-J2g2O0NLB1QaXe-ugyXUZlk5-Lxsi9yzcCGL4nhVaM3YMDd1D2Z2dYTVsgPvtWWLAgf-ux-YQysVqLRnU11XvfcIKw-lXHJuKImRq7ycbp_esg6FYCj1IZ4JMnP63IUKOARPdYzKbkUVXLh09TJcKT3f5L2IpWPWs6dmukwg",
  "expiresIn": 2592000,
  "shortId": "6652577730",
  "userId": "8283dd89-5ae1-4ec0-b6c5-da5c57785441",
  "userStatus": 4,
  "totalAccelDays": 3,
  "contractStatus": 1,
  "accelExpiredTime": "2099-12-31 23:59:59",
  "currentTime": 1908676175,
  "scopes": {
    "multi": 1908676175,
    "qos": 1908676175,
    "backbone": 1908676175,
    "mtk": 1908676175,
    "gameConsole": 1908676175
  },
  "purchaseTimes": 0,
  "unionPurchaseTimes": 0,
  "useContractDiscount": false,
  "creditStart": 1908676175,
  "creditLength": 0,
  "creditType": 1,
  "creditID": "android0026promoteOrder",
  "consoleDrawState": 2,
  "gameConsolePurchaseTimes": 0,
  "userType": 5
};
$done({body: JSON.stringify(obj)});
