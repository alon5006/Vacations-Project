const followersDal = require("../dal/followers-dal");




async function addFollower(requestData) {
   if (await followersDal.isVacationAlreadyFollowed(requestData)) {
        throw new Error("Vacation already followed by this user");
    }
    await followersDal.addFollower(requestData);;
}

async function deleteFollower(requestData) {

     await followersDal.deleteFollower(requestData);;
 }
 
 
 async function getVacationsById(id) {
    let vacationsData = await followersDal.getVacationsById(id);
    return vacationsData;
 }
 





module.exports = {
    addFollower,
    deleteFollower,
    getVacationsById
};