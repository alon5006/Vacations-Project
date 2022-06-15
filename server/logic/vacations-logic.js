const vacationsDal = require("../dal/vacations-dal");
async function getAllVacations() {
    let vacationsData = await vacationsDal.getAllVacations();
    return vacationsData;
}


async function addVacation(vacationData) {

    await vacationsDal.addVacation(vacationData);
}

async function deleteVacation(id) {
    await vacationsDal.deleteVacation(id);
}

async function updateVacation(id, requestData) {
    await vacationsDal.updateVacation(id, requestData);
}

async function getVacationById(id) {
   let vacationData = await vacationsDal.getVacationById(id);
   return vacationData;
}




module.exports = {
    getAllVacations,
    addVacation,
    deleteVacation,
    getVacationById,
    updateVacation
};