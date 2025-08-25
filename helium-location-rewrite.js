/**
 * Quantumult X 重写脚本
 * 用途：修改 Helium location 请求中的 is_moving 字段
 * 
  [rewrite_local]
  ^https://sublocsvc\.hmprod\.nova\.xyz:5090/locations url script-request-body https://raw.githubusercontent.com/ShadowCabnient/Loon-Qx/refs/heads/main/helium-location-rewrite.js
  
  [mitm]
hostname = sublocsvc.hmprod.nova.xyz
 **/
var body = $request.body;
var obj = JSON.parse(body);
obj.location.is_moving = true;
$done({body: JSON.stringify(obj)});

