const connection = require('./connection-wrapper');

async function addFollower(requestData) {
    let sql = `insert into followers(user_id, vacation_id) ` +
        `values(?, ?)`;
    let parameters = [requestData.userId, requestData.vacationId];
    await connection.executeWithParameters(sql, parameters);
}

async function isVacationAlreadyFollowed(requestData) {
    let sql = `SELECT vacation_id from followers where user_id = ${requestData.userId}`;
    let vacationFollowedByUser = await connection.execute(sql);
    for(let vacation of vacationFollowedByUser){
        if (vacation.vacation_id==requestData.vacationId){
            return true;
        }
    }
    return false;
}

async function deleteFollower(requestData) {
    let sql = `DELETE FROM followers WHERE user_id = ${requestData.userId} AND vacation_id = ${requestData.vacationId}`
    await connection.execute(sql);
}

async function getVacationsById(id) {
    const sql = `SELECT vacation_id as vacationId FROM followers WHERE user_id = ${id}`;
    let vacationsData = await connection.execute(sql);
    return vacationsData;
}






module.exports = {
    addFollower,
    isVacationAlreadyFollowed,
    deleteFollower,
    getVacationsById

};