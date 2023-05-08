const { Router } = require('express');

const createActivities = (req, res) => {
    res.status(200).send("NIY: Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.Toda la información debe ser recibida por body. Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).")
}

const getActivities = (req, res) => {
    res.status(200).send("NIY: Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.")
}

module.exports = {
    createActivities,
    getActivities
}