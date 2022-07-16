// Swiper 
let swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
    delay: 5500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        320:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        758:{
            slidesPerView:3,
            spaceBetween: 15,
        },
        900:{
            slidesPerView:4,
            spaceBetween: 20,
        },
    },
});

// Storage
localStorage.setItem('Nombre', 'Agustin');
localStorage.Apellido = 'Saladino';

let firstName = localStorage.getItem('Nombre');
let lastName  = localStorage.Apellido;

console.log(`Hola, mi nombre es ${firstName} ${lastName}`);

const peliculas = ["Spiderman","Thor","Jurassic","Doctor","Gemelo","Super","Lightyear","Spiderman","Breaking","Euphoria","Moon","Stranger","Loki","Hawkeye","It"];

const pelis = {
    ...peliculas
}

console.log(pelis);

// Alert

let searchButton = document.querySelector(".bx-search");

searchButton.onclick = () => {
    let buscar = document.getElementById("search-input");
    for (let i=0;i<peliculas.length;i++) {
        if (buscar.value==peliculas[i]) {
            Swal.fire({
                icon: 'success',
                title: 'Estamos redirigiendote',
                showConfirmButton: false,
                timer: 2500
            })
            i = peliculas.length;
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La pelicula que estas buscando no se encuentra en nuestra pagina'
            })
        }
    }
}
// Ajax y fetch

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=1';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let authors = data.results;
return authors.map
(function(author) {
    let li = createNode('li');
    let span = createNode('span');
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, span);
    append(ul, li);
})
})
.catch(function(error) {
console.log(error);
});
