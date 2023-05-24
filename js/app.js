// Toggle icon navbar

// Scroll selections
let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav li')

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + heigth){
            // Active navbar link
            navlink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav li[id*='+ id + ']').classList.add('active');
            })
        };
    });


    // Sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

// Select language

let btnSwitch = document.querySelector('.home__input--leng');

btnSwitch.addEventListener('click', ()=>{
    let flagState = btnSwitch.checked;

    if (flagState === true){
        location.href = './html/index-es.html';
    } else {
        location.href = '../index.html'
    }
});

//Effect Loading
let preloading = document.querySelector('.loading__section')

window.addEventListener('load', () =>{
        preloading.style.display = 'none';
})
