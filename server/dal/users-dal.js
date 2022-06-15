const connection = require('./connection-wrapper');

async function addUser(userRegistrationData) {
    let sql = `insert into users(first_name, last_name, email, password, user_type) ` +
        `values(?, ?, ?, ?, ?)`;
    let parameters = [userRegistrationData.firstName, userRegistrationData.lastName,
    userRegistrationData.email, userRegistrationData.password, userRegistrationData.userType];
    await connection.executeWithParameters(sql, parameters);
}

async function isUserNameExist(email) {
    let sql = "SELECT id from users where email = ?";
    let parameters = [email];
    let users = await connection.executeWithParameters(sql, parameters);   
    
    if (users && users.length>0){
        return true;
    }
    return false;
}

async function login(user) {
    let sql = `SELECT id, first_name as firstName, last_name as lastName, user_type as userType 
              from users where email = ? and password = ?`;
    let parameters = [user.email, user.password];
    let [userData] = await connection.executeWithParameters(sql, parameters);   
    
    if (!userData){
        return null;
    }

    return userData;
}

module.exports = {
    addUser,
    isUserNameExist,
    login
};