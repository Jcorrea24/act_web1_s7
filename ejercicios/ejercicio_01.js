//Crea un array de objetos que represente un inventario de productos. Cada producto debe tener: id, nombre, precio, categoria, stock.
//Declara al menos 5 productos y muestra:

//Todos los productos
//Total de productos en inventario
//Valor total del inventario//

const inventario = [
    {
        id: 1,
        nombre: "Camiseta de Futbol",
        precio: 110000,
        categoria: "Ropa",
        stock: 50
    },
    {
        id: 2,
        nombre: "Shorts de Futbol",
        precio: 25000,
        categoria: "Ropa",
        stock: 30
    },
    {
        id: 3,
        nombre: "Gorras",
        precio: 45000,
        categoria: "Ropa",
        stock: 20
    },
    {
        id: 4,
        nombre: "Zapatos de futbol",
        precio: 250000,
        categoria: "Zapatos",
        stock: 25
    },
    {
        id: 5,
        nombre: "Bufandas equipos de Futbol",
        precio: 25000,
        categoria: "Adornos",
        stock: 20
    }
];

console.log("Todos los productos:");
console.log(inventario);

console.log("Total de productos en inventario:");
console.log(inventario.length);

const valorTotal = inventario.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
console.log("Valor total del inventario:");
console.log(valorTotal);


