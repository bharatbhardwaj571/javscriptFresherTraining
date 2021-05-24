"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermissions = void 0;
const hasPermissions = (moduleName, role, permissonType, permissions) => {
    const arr = permissions[moduleName][permissonType];
    const ans = arr.includes(role);
    return ans;
};
exports.hasPermissions = hasPermissions;
//# sourceMappingURL=permisssions.js.map