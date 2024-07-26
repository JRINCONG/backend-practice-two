const express = require('express');
const songRouter =require('./Song.router')
const router = express.Router();

// colocar las rutas aquí
router.use('/songs', songRouter)


module.exports = router;