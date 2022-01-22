const especies = ["🍋", "🍒", "🍑", "🥥","🥑", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆"]
const productos = ["🍋", "🍒", "🍑","🍒","🍒", "🥥", "🍋", "🍋", "🍒", "🍑","🍋", "🍋", "🍑", "🥥","🍋", "🍒", "🍑", "🥥","🍋", "🍒", "🍑","🍋", "🍋", "🥥","🍋", "🍒", "🍑", "🥥", "🥥","🥑", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆","🥑", "🥔", "🌽", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆", "🍄", "🥦", "🍆", "🥦", "🍆","🥑"]

/* 1) consultarStock() que reciba un producto. La funcion debe devolver true/false segun si hay o no hay stock del producto. */

const consultarStock = (producto) => productos.includes(producto)

// consultarStock("🍋") //=> true
// consultarStock("🥕") //=> false

/* 2) ordenarBodega() que reciba un producto. La funcion debe retornar un nuevo array con unicamente los productos elegidos. */

const ordenarBodega = (producto) => {
    const newArray = productos.filter(element => element === producto)
    return newArray
}

// console.log(ordenarBodega("🍋"))
// console.log(ordenarBodega("🥑"))

/* 3) cantidadEnBodega() que reciba un producto. La funcion debe devolver la cantidad total que hay en stock de ese producto. */

const cantidadEnBodega = (producto) => ordenarBodega(producto).length
// const cantidadEnBodega2 = (producto) => {
//     const arrayFiltrado = ordenarBodega(producto)
//     return arrayFiltrado.length
// }

// console.log(cantidadEnBodega("🍋")) // => 10
// console.log(cantidadEnBodega("🥑")) // => 3

/* 4) recepcionarPedido() que reciba una cantidad numerica y un producto. La funcion debe agregar al array correspondiente la cantidad de ese producto elegido. */

const recepcionarPedido = (cantidad, producto) => {
    for (let i = 0; i < cantidad; i++) {
        productos.push(producto)
    }
}

// console.log("antes de mi funcion", productos)
// recepcionarPedido(5,'🌽')
// console.log("despues de mi funcion", productos)

/* 5) venta() que reciba un array productos comprados. La funcion debe quitar del array correspondiente la cantidad de ese producto elegido. Considerar que no podemos vender 4 berenjenas si en el array quedan menos de 4. */

const venta = (compras) => {
    compras.forEach(compra => {
        if (consultarStock(compra)) {
            let index = productos.indexOf(compra)
            productos.splice(index, 1)
        } else {
            console.log(`No tengo ${compra}`)
        }
    })
}

// console.log("antes de mi funcion: ", productos)
// venta(["🥑","🥑", "🌶️","🥕"])
// console.log("despues: ", productos)

/* 6) quitarProducto() que reciba un producto y si existe dentro del array de especies, lo remueva, y si no existe retornar false. */

const quitarProducto = (producto) => {
    especies.forEach(element => {
        if (especies.includes(producto)) {
            let index = especies.indexOf(producto)
            console.log(index)
            especies.splice(index, 1)
        }
    })
}

const quitarProducto2 = (producto) => {
    const hayProducto = especies.some(element => element === producto)
    if (hayProducto) {
        let index = especies.indexOf(producto)
        return especies.splice(index, 1)
    } else {
        return especies
    }
}

// console.log("antes de mi funcion: ", especies)
// quitarProducto2('🌶️')
// console.log("despues: ", especies)

/* 7) agregarProducto() que reciba un producto y si no existe dentro del array de especies, lo agregue, y si existe retornar false. */

const agregarProducto = (producto) => {
    const hayProducto = especies.find(element => element === producto)
    // if (!hayProducto) {
    //     return especies.push(producto)
    // } else {
    //     return false
    // }
    !hayProducto ? especies.push(producto) : false
}

// console.log("antes de mi funcion: ", especies)
// agregarProducto('🌶️')
// agregarProducto('🥕')
// console.log("despues: ", especies)