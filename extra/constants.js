export const permissions = {
'getUsers': {
all: ['head-trainer'],
read : ['trainee', 'trainer'],
write : ['trainer'],
delete: [],
}
}


export const users = [
{
traineeEmail: 'trainee1@successive.tech',
reviewerEmail: 'reviewer1@successive.tech',
}
]

export default permissions;