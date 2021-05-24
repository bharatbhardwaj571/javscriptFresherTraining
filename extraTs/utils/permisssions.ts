

export const hasPermissions = (moduleName:string,role:string,permissonType:string,permissions:object):boolean => {
    const arr = permissions[moduleName][permissonType]
    const ans = arr.includes(role);
    return ans;
    
}
