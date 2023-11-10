let pasteles=[];
let postres=[];


fetch('./js/pasteles.json')
.then(response => response.json())
.then(data =>{
    pasteles = data
    cargarPasteles(pasteles);
})
fetch('./js/postres.json')
.then(response => response.json())
.then(data =>{
    postres = data
    cargarPostres(postres);
})

const contenedorPasteles = document.querySelector('#grid-productos');

function cargarPasteles(pasteles) {
    pasteles.forEach(pastel =>{
        const {imagen, nombre, precio, id}= pastel
        const section = document.createElement('section');
        section.classList.add('card');
        section.innerHTML=`
                    <figure>
                        <img src="${imagen}" alt="${nombre}">
                    </figure>
                    <footer>
                        <h4>${nombre}</h4>
                        <p>$${precio}</p>
                        <a class="boton" href="#" data-id="${id}">AGREGAR AL CARRITO</a>
                    </footer>
        `
        contenedorPasteles.insertBefore(section, contenedorPasteles.children[1] )
    }) 
}
function cargarPostres(postres) {
    postres.forEach(postre =>{
        const {imagen, nombre, precio, id}= postre
        const section = document.createElement('section');
        section.classList.add('card');
        section.innerHTML=`
                    <figure>
                        <img src="${imagen}" alt="${nombre}">
                    </figure>
                    <footer>
                        <h4>${nombre}</h4>
                        <p>$${precio}</p>
                        <a class="boton" href="#" data-id="${id}">AGREGAR AL CARRITO</a>
                    </footer>
        `
        contenedorPasteles.appendChild(section)
    }) 
}





                    
