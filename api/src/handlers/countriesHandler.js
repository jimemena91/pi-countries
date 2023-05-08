

const getCountriesHandler = (req, res) => {
    const {name} = req.query;
    if (name) res.send(`Quiero buscar todos los que se llamen ${name}`)
     else res.send ("Quiero enviar todos los usuarios")
}

const getCountrieHandler = ( (req, res) => {
    const { idPais } = req.params;
    res.status(200).send(`Esta ruta obtiene el detalle de un país específico por ID ${idPais}`)
})



module.exports = {
    getCountriesHandler,
    getCountrieHandler,
   }