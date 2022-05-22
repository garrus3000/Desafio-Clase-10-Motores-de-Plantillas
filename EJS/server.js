const express = require("express");
const app = express();
const routerProductos = require("./router.js");

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.set("view engine", "ejs");
app.set("views", "./views_ejs");

app.use("/", routerProductos);


const PORT = 8080;
app.listen(PORT, (err) => {
    if (err) new Error(console.log(err));
    else console.log(`Escuchando servidor en el puerto ${PORT}`);
});