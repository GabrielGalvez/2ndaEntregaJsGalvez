//Simulador de un carrito de compras
//Funcion constructora
class Productos {
    constructor(codigo, marca, nombre, precio) {
        this.codigo = parseInt(codigo);
        this.marca = marca,
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    sumarIva(){
        this.precio=this.precio * 1.21;
 }
}
//Declaracion de un array de productos para almacenar objetos
const productosGabo=[];
productosGabo.push(new Productos(1,"Logitech","mouse",3000));
productosGabo.push(new Productos(2,"Sony","Joystick",4000));
productosGabo.push(new Productos(3,"Samsung","Monitor",10000));
productosGabo.push(new Productos(4,"Acer","Laptop",30000));
//Iteramos el array con for...of para agregar el iva
for(const producto of productosGabo){
    producto.sumarIva();
}

let totalCompra = 0;
const PRECIO_ENVIO = 500;

const evaluarEnvioGratis = () => totalCompra >= 5000;

let producto = prompt("Bienvenido a Gabo online!\nSelecciona tres productos para comprar!\nPresione el numero de los productos que desea comprar \n1-Mouse\n2-Joystick\n3-Monitor\n4-Laptoc\n(Presiona s para salir)");
while (producto !== "s"){
switch (producto){
case "1":
totalCompra = totalCompra+productosGabo[0].precio;
alert("El precio del Mouse es $"+productosGabo[0].precio+", el total de su compra es: "+totalCompra);
break;
case "2":
totalCompra = totalCompra+productosGabo[1].precio;
alert("El precio del Joystick es $"+productosGabo[1].precio+", el total de su compra es: "+totalCompra);
break;
case "3":
totalCompra = totalCompra+productosGabo[2].precio;
alert("El precio del Monitor es $"+productosGabo[2].precio+", el total de su compra es: "+totalCompra);
break;
case "4":
totalCompra = totalCompra+productosGabo[3].precio;
alert("el precio de la Laptoc es $"+productosGabo[3].precio+", el total de su compra es: "+totalCompra);
break;
default:
alert("Usted ha ingresado una opción inválida");
break;}
producto = prompt("Bienvenido a Gabo online!\nSelecciona tres productos para comprar!\nPresione el numero de los productos que desea comprar \n1-Mouse\n2-Joystick\n3-Monitor\n4-Laptoc\n(Presiona s para salir)");
}

if ( evaluarEnvioGratis()) {
    alert("Al ser una compra mayor o igual que $5000,El envio es gratuito");
} else {
	totalCompra = totalCompra + PRECIO_ENVIO;
  alert("Al ser una compra menor a $5000, se incluye el costo de envio.El costo de envío es de $500");
}

alert("El total de su compra es " + totalCompra);