const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const routerProductos = require("./router.js");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine(
    "hbs",
    engine({
        extname: "hbs",
        defaultLayout: "main",
    })
);

app.set("view engine", "hbs");
app.set("views", "./views_hbs");

app.use("/", routerProductos);


const PORT = 8080;
app.listen(PORT, (err) => {
    if (err) new Error(console.log(err));
    else console.log(`Escuchando servidor en el puerto ${PORT}`);
});