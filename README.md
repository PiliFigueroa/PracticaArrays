# PracticaArrays

```
const productos = ["🍋", "🍒", "🍑", "🥥","🥑", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆"]
const frutas = ["🍋", "🍒", "🍑","🍒","🍒", "🥥", "🍋", "🍋", "🍒", "🍑","🍋", "🍋", "🍑", "🥥","🍋", "🍒", "🍑", "🥥","🍋", "🍒", "🍑","🍋", "🍋", "🥥","🍋", "🍒", "🍑", "🥥", "🥥"]
const vegetales = ["🥑", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆","🥑", "🥔", "🌽", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆", "🍄", "🥦", "🍆", "🥦", "🍆","🥑"]
```

### Dado un array de frutas y vegetales y un array de productos, resolver las siguientes funciones:

1) ```consultarStock()``` que reciba un array y un producto. La funcion debe devolver true/false segun si hay o no hay stock del producto.
2) ```ordenarBodega()``` que reciba un array y un producto. La funcion debe retornar un nuevo array con unicamente los productos elegidos.
3) ```cantidadEnBodega()``` que reciba un array y un producto. La funcion debe devolver la cantidad total que hay en stock de ese producto.
4) ```recepcionarPedido()``` que reciba una cantidad numerica, un producto y un array. La funcion debe agregar al array correspondiente la cantidad de ese producto elegido.
5) ```venta()``` que reciba un producto, una cantidad y un array. La funcion debe quitar del array correspondiente la cantidad de ese producto elegido. Considerar que no podemos vender 4 berenjenas si en el array quedan menos de 4.
6) ```quitarProducto()``` que reciba un producto y si existe dentro del array de productos, lo remueva, y si no existe retornar false.
7) ```agregarProducto()``` que reciba un producto y si no existe dentro del array de productos, lo agregue, y si existe retornar false.
