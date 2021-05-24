"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.permissions = void 0;
exports.permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};
exports.users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    }
];
exports.default = exports.permissions;
//# sourceMappingURL=constants.js.map