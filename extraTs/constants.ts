import {userType} from './interface';
export const permissions:object = {
'getUsers': {
all: ['head-trainer'],
read : ['trainee', 'trainer'],
write : ['trainer'],
delete: [],
}
};


export const users:userType = [
{
traineeEmail: 'trainee1@successive.tech',
reviewerEmail: 'reviewer1@successive.tech',
}
];

export default permissions;