import {hasPermissions,validateUsers} from '../utils/index';
import {users,permissions} from './constants';

console.log(hasPermissions('getUsers','trainee','read',permissions));
validateUsers(users);

