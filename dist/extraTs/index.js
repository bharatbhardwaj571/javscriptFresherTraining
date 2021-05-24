"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../utils/index");
const constants_1 = require("./constants");
const pattern_1 = require("../patterns/pattern");
console.log(index_1.hasPermissions('getUsers', 'trainee', 'read', constants_1.permissions));
index_1.validateUsers(constants_1.users);
console.log(pattern_1.diamond2, pattern_1.diamondPattern);
//# sourceMappingURL=index.js.map