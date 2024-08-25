const section = document.querySelectorAll('section');
const img = [...document.querySelectorAll('img')];

img.map((element) => {
    element.addEventListener('click', (element) => {
        element.target.classList.toggle("sec-selecionada");
        section.target.classList.toggle('selecionado');
    })
})
