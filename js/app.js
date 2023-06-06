// Scroll selections
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
btnSwitch.addEventListener('change', function(){
    let flagState = btnSwitch.checked;

    if (flagState === true){
        window.location.href = './html/index-es.html';
    } else {
        window.location.href = '../index.html';
    }
});

//Effect Loading
window.addEventListener('load', () =>{
        preloading.style.display = 'none';
})
