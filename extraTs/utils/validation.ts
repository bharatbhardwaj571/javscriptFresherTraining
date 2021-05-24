import {validateEmail} from './helper';
import {userType} from '../interface';



export const validateUsers =(users:userType) => {
    let validatuser = 0;
    let invaiduser = 0;
    

    users.map(({traineeEmail,reviewerEmail})=> {
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
            validatuser += 1;
            console.log('validate users',traineeEmail,reviewerEmail,validatuser)
            
        }else{
            invaiduser += 1;
        }
    })
}

