const { Router } = require("express");
const routerProductos = Router();
const Productos = require("./productos");

routerProductos.get("/productos", (req, res) => {
    const productos = new Productos();
    res.render("index", {
        productos: productos.getAll()
    });
});

routerProductos.get("/", (req, res) => {
    res.render("form");
});

routerProductos.post("/productos", (req, res) => {
    const newProduct = new Productos();
    newProduct.addProducto(req.body);
    res.status(201).redirect("/productos");
});

routerProductos.get("/productos/:id", (req, res) => {
    const productos = new Productos();
    res.send(productos.getById(req.params.id));
});

routerProductos.put("/productos/:id", (req, res) => {
    const newProduct = new Productos()
    newProduct.udapteProducto(req.params.id, req.body);
    res.status(201).send(`<h2>Producto con el id: "${req.params.id}" actualizado</h2>`);
});

routerProductos.delete("/productos/:id", (req, res) => {
    const newProduct = new Productos()
    newProduct.deleteProducto(req.params.id);
    res.send(`<h2>Producto con el id: "${req.params.id}" <b>eliminado</b></2>`);
});

module.exports = routerProductos;