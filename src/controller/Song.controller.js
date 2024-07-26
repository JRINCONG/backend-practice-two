const catchError = require('../utils/catchError');
const Song = require('../models/song');

const getAll = catchError(async(req, res) => {
    
    const result= await Song.findAll()
    return res.json(result)
});


const create = catchError(async(req, res) => {
    
    const result= await Song.create(req.body)
    return res.status(201).json(result)
});


const getOne= catchError(async(req, res) => {
    const { id }=req.params
    const result= await Song.findByPk(id)
    if(!result) return res.status(404).json(`song id ${ id } not found`)
    return res.json(result)
});


const Destroy = catchError(async(req, res) => {
    const { id }=req.params
    const result= await Song.destroy({where:{ id }})
    if(!result) return res.status(404).json(`song id ${ id } not found`)
    return res.json(result)
});

const update = catchError(async(req, res) => {
    const { id }=req.params
    const result= await Song.update(req.body,  {where:{ id }, returning:true })
    if(result[0]===0) return res.status(404).json(`song id ${ id } not found`)
    return res.sendStatus(201).json(result)
});

module.exports = {
    getAll,
    create,
    getOne,
    Destroy,
    update
}