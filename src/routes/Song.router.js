const { getAll, create, getOne, Destroy, update } = require('../controller/Song.controller');
const express = require('express');

const songRouter = express.Router();

songRouter.route("/")
		.get(getAll)
        .post(create)
       
songRouter.route("/:id")
        .get(getOne)
        .delete(Destroy)
        .put(update)




module.exports = songRouter;