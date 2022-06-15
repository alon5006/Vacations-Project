const { request, response } = require("express");
const express = require("express");
const vacationsLogic = require("../logic/vacations-logic")
const router = express.Router();


router.get("/getvacations", async (request, response) => {
    try {
        let vacationsData = await vacationsLogic.getAllVacations();
        response.json(vacationsData);
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});

router.get("/getvacation/:id", async (request, response) => {
    try {
        let id = +request.params.id;
        let vacationData = await vacationsLogic.getVacationById(id);
        response.json(vacationData[0]);
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});



//router.put("/increasefollowers/:vacationId", async (request, response) => {
//  try {

//}
//})

router.delete("/deletevacation/:id", async (request, response) => {
    let id = +request.params.id;
    console.log(id);
    try {
        await vacationsLogic.deleteVacation(id);
        response.json();
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message);
    }
});

router.put("/updatevacation/:id", async (request, response) => {
    let id = +request.params.id;
    console.log(id);
    let requestData = request.body;
    console.log(requestData);
    try {
        await vacationsLogic.updateVacation(id, requestData);
        response.json();
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message);
    }
});



router.post("/", async (request, response) => {

    let vacationData = request.body;

    try {
        await vacationsLogic.addVacation(vacationData);
        response.json();
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});

module.exports = router;