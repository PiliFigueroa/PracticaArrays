# PracticaArrays

```
const especies = ["🍋", "🍒", "🍑", "🥥","🥑", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆"]
const productos = ["🍋", "🍒", "🍑","🍒","🍒", "🥥", "🍋", "🍋", "🍒", "🍑","🍋", "🍋", "🍑", "🥥","🍋", "🍒", "🍑", "🥥","🍋", "🍒", "🍑","🍋", "🍋", "🥥","🍋", "🍒", "🍑", "🥥", "🥥","🥑", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆","🥑", "🥔", "🌽", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆", "🍄", "🥦", "🍆", "🥦", "🍆","🥑"]
```

### Dado un array de frutas y vegetales y un array de productos, resolver las siguientes funciones:

1) ```consultarStock()``` que reciba un producto. La funcion debe devolver true/false segun si hay o no hay stock del producto.
2) ```ordenarBodega()``` que reciba un producto. La funcion debe retornar un nuevo array con unicamente los productos elegidos.
3) ```cantidadEnBodega()``` que reciba un producto. La funcion debe devolver la cantidad total que hay en stock de ese producto.
4) ```recepcionarPedido()``` que reciba un un array productos. La funcion debe agregar al array correspondiente esos productos nuevos al stock.
5) ```venta()``` que reciba un array productos comprados. La funcion debe quitar del array correspondiente la cantidad de ese producto elegido. Considerar que no podemos vender 4 berenjenas si en el array quedan menos de 4.
6) ```quitarProducto()``` que reciba un producto y si existe dentro del array de especies, lo remueva, y si no existe retornar false.
7) ```agregarProducto()``` que reciba un producto y si no existe dentro del array de especies, lo agregue, y si existe retornar false.
