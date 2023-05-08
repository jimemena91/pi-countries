const { Router } = require('express');
const {getCountriesHandler, getCountrieHandler} = require ("../handlers/countriesHandler")

const countriesRouter = Router();

countriesRouter. get("/countries", getCountriesHandler)

countriesRouter. get("/:idPais", getCountrieHandler)

module.exports = countriesRouter; 