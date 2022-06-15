const express = require("express");
const cors = require('cors');

const usersController = require("./controllers/users-controllers");
const vacationControllers = require("./controllers/vacations-controllers");
const followersControllers = require("./controllers/followers-controllers");

const loginFilter = require("./filters/login-filter");
const server = express();


server.use(cors({ origin: "http://localhost:3000" }));
server.use(loginFilter());
server.use(express.json());
server.use("/users", usersController);
server.use("/vacations", vacationControllers);
server.use("/followers", followersControllers);



server.listen(3001, () => console.log("Listening on http://localhost:3001"));