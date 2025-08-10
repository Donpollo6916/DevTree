//const express = require("express"); CJS Commmon JS
import server from './server'

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log("Servidor Funcionando...", port);
})