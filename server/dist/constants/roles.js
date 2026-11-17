"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADMIN_ROLES = exports.CLINICAL_STAFF_ROLES = exports.ALL_ROLES = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["SUPER_ADMIN"] = "SUPER_ADMIN";
    UserRole["HOSPITAL_ADMIN"] = "HOSPITAL_ADMIN";
    UserRole["DOCTOR"] = "DOCTOR";
    UserRole["RECEPTIONIST"] = "RECEPTIONIST";
    UserRole["NURSE"] = "NURSE";
    UserRole["LABORATORY_TECHNICIAN"] = "LABORATORY_TECHNICIAN";
    UserRole["PHARMACIST"] = "PHARMACIST";
    UserRole["ACCOUNTANT"] = "ACCOUNTANT";
    UserRole["PATIENT"] = "PATIENT";
})(UserRole || (exports.UserRole = UserRole = {}));
exports.ALL_ROLES = Object.values(UserRole);
exports.CLINICAL_STAFF_ROLES = [
    UserRole.DOCTOR,
    UserRole.NURSE,
    UserRole.SUPER_ADMIN,
    UserRole.HOSPITAL_ADMIN
];
exports.ADMIN_ROLES = [
    UserRole.SUPER_ADMIN,
    UserRole.HOSPITAL_ADMIN
];
