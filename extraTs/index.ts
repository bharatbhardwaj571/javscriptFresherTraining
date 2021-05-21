import {hasPermissions,validateUsers} from '../utils/index';
import {users,permissions} from './constants';
import {diamond2,diamondPattern} from '../patterns/pattern';

console.log(hasPermissions('getUsers','trainee','read',permissions));
validateUsers(users);
console.log(diamond2,diamondPattern)

