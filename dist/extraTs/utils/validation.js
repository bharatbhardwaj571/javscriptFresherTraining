"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUsers = void 0;
const helper_1 = require("./helper");
const validateUsers = (users) => {
    let validatuser = 0;
    let invaiduser = 0;
    users.map(({ traineeEmail, reviewerEmail }) => {
        if (helper_1.validateEmail(traineeEmail) && helper_1.validateEmail(reviewerEmail)) {
            validatuser += 1;
            console.log('validate users', traineeEmail, reviewerEmail, validatuser);
        }
        else {
            invaiduser += 1;
        }
    });
};
exports.validateUsers = validateUsers;
//# sourceMappingURL=validation.js.map