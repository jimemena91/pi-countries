const { Router } = require('express');
const { createActivities, getActivities} = require ("../handlers/activitiesHandler")

const activitiesRouter = Router()

activitiesRouter. get("/activities", getActivities)


activitiesRouter. post("/activities", createActivities)

module.exports = activitiesRouter;    