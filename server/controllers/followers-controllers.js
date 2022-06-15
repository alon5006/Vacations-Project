const { request, response } = require("express");
const express = require("express");
const followersLogic = require("../logic/followers-logic")
const router = express.Router();


router.post("/", async (request, response) => {

    let requestData = request.body;

    try {
        await followersLogic.addFollower(requestData);
        response.json();
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});

router.post("/unfollow/", async (request, response) => {

    let requestData = request.body;

    try {
        await followersLogic.deleteFollower(requestData);
        response.json();
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});

router.get("/getvacations/:id", async (request, response) => {
    try {
        let id = +request.params.id;
        let vacationsData = await followersLogic.getVacationsById(id);
        response.json(vacationsData);
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});


module.exports = router;