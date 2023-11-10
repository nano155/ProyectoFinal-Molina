

const bottonBurger = document.querySelector('#botton-burger');
const listaNav = document.querySelector('.nav-list_responsive');
const carBotton = document.querySelector('.nav-carrito');
const carritoCompras = document.querySelector('#carrito');

const desplegarMenu = ()=>{
    if(!listaNav.classList.contains('visibility-flex')){
        listaNav.classList.add('visibility-flex');
        carritoCompras.classList.add('visibility-block')
        desplegarCarrito()
    }
    else{
        listaNav.classList.remove('visibility-flex')
    }
}

const desplegarCarrito = ()=>{
    if(!carritoCompras.classList.contains('visibility-block')){
        carritoCompras.classList.add('visibility-block')
        listaNav.classList.add('visibility-flex');
        desplegarMenu()
    }
    else{
        carritoCompras.classList.remove('visibility-block')
    }
}
// Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success"
//       });
//     }
//   });

bottonBurger.addEventListener('click', desplegarMenu);
carBotton.addEventListener('click', desplegarCarrito);


