const connection = require('./connection-wrapper');

let vacationsData = [];

async function getAllVacations() {
    vacationsData.length = 0;
    let sql = "SELECT v.vacation_id as id, v.destination as destination, v.start_date as startDate, v.end_date as endDate, v.price as price, v.description as description, v.image as image, count(f.user_id) as amountOfFollowers FROM vacations.vacations v left join vacations.followers f ON v.vacation_id = f.vacation_id group by v.vacation_id;";
    vacationsData.push(... await connection.execute(sql));
    return vacationsData;
    
}

async function addVacation(vacationData) {
    let sql = `insert into vacations(destination, start_date, end_date, price, description, image) ` +
        `values(?, ?, ?, ?, ?, ?)`;
    let parameters = [vacationData.destination, vacationData.startDate,
    vacationData.endDate, vacationData.price, vacationData.description, vacationData.image];
    await connection.executeWithParameters(sql, parameters);
}


async function deleteVacation(id) {
    const sql = `DELETE FROM vacations WHERE vacation_id = ${id}`;
    await connection.execute(sql);
}

async function updateVacation(id, requestData) {
    const sql = `UPDATE vacations SET vacation_id=${id}, destination='${requestData.destination}', start_date='${requestData.startDate}',
    end_date='${requestData.endDate}', price='${requestData.price}', description='${requestData.description}', image='${requestData.image}' WHERE vacation_id=${id}`;

  
    await connection.execute(sql);
}

async function getVacationById(id) {
    const sql = `SELECT vacation_id as id, destination as destination, start_date as startDate, end_date as endDate, price as price,description as description, image as image
    FROM vacations
    WHERE vacation_id = ${id}`;
    let vacationData = await connection.execute(sql);
    return vacationData;
}








module.exports = {
    getAllVacations,
    addVacation,
    deleteVacation,
    getVacationById,
    updateVacation
};