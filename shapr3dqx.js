[mitm]
hostname=prod.api.shapr3d.com

[rewrite_local]
https://prod.api.shapr3d.com/user-management/profile-with-device  url script-requires-body https://raw.githubusercontent.com/ShadowCabnient/1111/main/shapr3d.js
