/**
 * Quantumult X 重写脚本
 * 用途：修改 Helium location 请求中的 is_moving 字段
 * 
 * [rewrite_local]
 * ^https://sublocsvc\.hmprod\.nova\.xyz:5090/locations url script-request-body helium-location-rewrite.js
 * 
 * [mitm]
 * hostname = sublocsvc.hmprod.nova.xyz
 */

// 主函数
function modifyRequestBody() {
    try {
        // 获取原始请求体
        let body = $request.body;
        
        // 判断是否有请求体
        if (!body) {
            console.log("No request body found");
            $done({});
            return;
        }
        
        // 解析 JSON
        let jsonBody = JSON.parse(body);
        
        // 检查并修改 is_moving 字段
        if (jsonBody.location && jsonBody.location.hasOwnProperty('is_moving')) {
            console.log(`Original is_moving: ${jsonBody.location.is_moving}`);
            jsonBody.location.is_moving = true;
            console.log("Modified is_moving to: true");
            
            // 将修改后的对象转回 JSON 字符串
            let modifiedBody = JSON.stringify(jsonBody);
            
            // 返回修改后的请求
            $done({
                body: modifiedBody
            });
        } else {
            console.log("is_moving field not found in expected location");
            $done({});
        }
        
    } catch (error) {
        console.log(`Error occurred: ${error.message}`);
        $done({});
    }
}

// 执行脚本
modifyRequestBody();
