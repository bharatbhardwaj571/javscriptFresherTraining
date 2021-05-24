export const validateEmail =(email: string): boolean => {
     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
         return true
     }else{
         return false
     }
}

