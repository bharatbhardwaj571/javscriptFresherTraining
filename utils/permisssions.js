

export const hasPermissions = (moduleName,role,permissonType,permissions) => {
    const arr = permissions[moduleName][permissonType]
    const ans = arr.includes(role);
    return ans;
    
}
