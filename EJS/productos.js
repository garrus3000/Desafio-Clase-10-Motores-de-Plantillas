const productos = [
    {
        id: 1,
        title: "Escuadra",
        price: 123.45,
        thumbnail:
            "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    },
    {
        id: 2,
        title: "Calculadora",
        price: 234.56,
        thumbnail:
            "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    },
    {
        id: 3,
        title: "Globo Terráqueo",
        price: 345.67,
        thumbnail:
            "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    }
];

class Productos {
    constructor() {
        this.productos = productos;
    }
    getAll() {
        return productos;
    }
    getById(id) {
        const index = productos.findIndex(
            (producto) => producto.id === parseInt(id)
        );
        if (index === -1) return { error: "Producto no encontrado" };
        else return productos[index];
    }
    addProducto(producto) {
        const newProducto = {
            id: productos.length === 0 ? 1 : productos[productos.length - 1].id + 1,
            title: producto.title,
            price: parseFloat(producto.price, 2),
            thumbnail: producto.thumbnail,
        };
        productos.push(newProducto);
        return JSON.stringify(newProducto);
    }
    udapteProducto(id, producto) {
        const index = productos.findIndex(
            (producto) => producto.id === parseInt(id)
        );
        if (index === -1) return { error: "Producto no encontrado" };
        if (producto.title) productos[index].title = producto.title;
        if (producto.price) productos[index].price = producto.price;
        if (producto.thumbnail) productos[index].thumbnail = producto.thumbnail;
        return (
            `Producto ${producto.title} con id ${producto.id} actualizado`,
            JSON.stringify(productos[index])
        );
    }
    deleteProducto(id) {
        const index = productos.findIndex(
            (producto) => producto.id === parseInt(id)
        );
        if (index === -1) return { error: "Producto no encontrado" };
        productos.splice(index, 1);
        return `Producto con id ${id} eliminado`;
    }
}

module.exports = Productos;