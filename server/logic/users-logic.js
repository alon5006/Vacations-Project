const usersDal = require("../dal/users-dal");
const config = require('../config/config.json');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");

async function addUser(userRegistrationData) {
    validateUserData(userRegistrationData);
    if (await usersDal.isUserNameExist(userRegistrationData.email)) {
        throw new Error("User name already exist");
    }

    normalizeOptionalData(userRegistrationData);
    userRegistrationData.password = encryptPassword(userRegistrationData.password);
    await usersDal.addUser(userRegistrationData);
}

async function login(userLoginData) {
    userLoginData.password = encryptPassword(userLoginData.password);
    let userData = await usersDal.login(userLoginData);
    if (!userData) {
        throw new Error("Login failed");
    }
    const token = jwt.sign({ userId: userData.userId, userType: userData.userType }, config.secret);
    let successfulLoginResponse = { id:userData.id, token, firstName: userData.firstName, lastName: userData.lastName, isAdmin: userData.userType };
    return successfulLoginResponse;
}

function validateUserData(userRegistrationData) {
    if (!userRegistrationData.email) {
        throw new Error("Invalid email or password");
    }

    if (!userRegistrationData.password) {
        throw new Error("Invalid email or password");
    }

    if (userRegistrationData.password.length < 6) {
        throw new Error("Password is too short");
    }

}

function encryptPassword(password) {
    const saltRight = "sdkjfhdskajh";
    const saltLeft = "--mnlcfs;@!$ ";
    let passwordWithSalt = saltLeft + password + saltRight;
    return crypto.createHash("md5").update(passwordWithSalt).digest("hex");
}

function normalizeOptionalData(userRegistrationData) {
    userRegistrationData.userType = "user";

    if (!userRegistrationData.firstName) {
        userRegistrationData.firstName = "";
    }

    if (!userRegistrationData.lastName) {
        userRegistrationData.lastName = "";
    }
}

module.exports = {
    addUser,
    login
};