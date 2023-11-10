

const productos = document.querySelector("#grid-productos");
const carritoLista = document.querySelector("#carrito tbody");
const carrito = document.querySelector("#carrito");
const vaciarCarrito = document.querySelector(".btn-vaciar");

let carritoArreglo = [];

const addProducts = (e) => {
  e.preventDefault();
  Toastify({
  text: "Producto agregado",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top",
  position: "right",
  stopOnFocus: true, 
  style: {
    background: "linear-gradient(to right, #940194, #b406b4)",
  },
  onClick: function(){} // Callback after click
}).showToast();
  if (e.target.classList.contains("boton")) {
    const dato = e.target.parentElement.parentElement;
    readData(dato);
  }
};

const readData = (data) => {
  const datosProductos = {
    imagen: data.querySelector("img").src,
    nombre: data.querySelector("h4").textContent,
    precio: data.querySelector("p").textContent,
    id: data.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  const existe = carritoArreglo.some(
    (producto) => producto.id === datosProductos.id
  );
  if (existe) {
    const producto = carritoArreglo.map((product) => {
      if (product.id === datosProductos.id) {
        product.cantidad++;
        return product;
      } else {
        return product;
      }
    });
    carritoArreglo = [...producto];
  } else {
    carritoArreglo = [...carritoArreglo, datosProductos];
  }
  drawHtml();
  mostrarBotones();
};

const drawHtml = () => {
  limpiarHtml();
  carritoArreglo.forEach((element) => {
    const { imagen, nombre, precio, cantidad, id } = element;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src='${imagen}' width='50'/>
        </td>
        <td>
            ${nombre}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}      
        </td>
        <td>
            <a href="#" class='borrar' data-id="${id}">X</a>
        </td>`;

    carritoLista.appendChild(row);
  });
  sincronizarStorage();
};

const limpiarHtml = () => {
  while (carritoLista.firstChild)
    carritoLista.removeChild(carritoLista.firstChild);
};

const borrarProducto = (e) => {
    e.preventDefault()
  if (e.target.classList.contains("borrar")) {
    const dataId = e.target.getAttribute("data-id");
    carritoArreglo = carritoArreglo.filter(
      (eliminado) => eliminado.id !== dataId
    );
        drawHtml();
        mostrarBotones()
  }
};

const sincronizarStorage =()=>{
    localStorage.setItem('carrito', JSON.stringify(carritoArreglo))
}

const mostrarBotones = () => {
  if (carritoLista.firstChild) {
    carrito.children[1].style.visibility = "visible";
  } else {
    carrito.children[1].style.visibility = "hidden";
  }
};

productos.addEventListener("click", addProducts);
carrito.addEventListener("click", borrarProducto);
vaciarCarrito.addEventListener("click", (e) => {
    e.preventDefault()
  carritoArreglo = [];
  drawHtml();
  mostrarBotones();
});
document.addEventListener('DOMContentLoaded', ()=>{
    carritoArreglo = JSON.parse(localStorage.getItem('carrito')) || [];
    drawHtml()
} )
