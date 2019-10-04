const express = require("express");
const response = require("../../network/response");
const controller = require("./controller")
const router = express.Router();

router.get("/", function (req, res) {
    controller.getMessages().then((messageList)=>{
        response.success(req, res, messageList, 200);
    }).catch(e => {
        response.error(req, res, "Error simulado [GET]." , 500, "Error en el controlador");
    });
});

router.post("/", function (req, res) {
    controller.addMessage(req.body.user,req.body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201);
    }).catch(e => {
        response.error(req, res, "Error simulado [POST]" , 400, "Error en el controlador");
    });
});

router.get("/one", function (req, res) {
    controller.getOneMessage().then((messageList)=>{
        response.success(req, res, messageList, 202);
    }).catch(e => {
        response.error(req, res, "Error simulado [GET]." , 500, "Error en el controlador");
    });
});

module.exports = router;