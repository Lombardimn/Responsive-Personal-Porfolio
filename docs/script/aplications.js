
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
                document.querySelector(`header nav li[id*=${id}]`).classList.add('active');
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
        window.location.href = '/es';
    } else {
        window.location.href = '/#';
    }
});

//Effect Loading
window.addEventListener('load', () =>{
        preloading.style.display = 'none';
})


// Download CV
// dcvBtn.addEventListener('click', function(){
    // let urlCv = '../file/cv_Lombardi.pdf';

    // fetch(urlCv)
    //     .then(response => response.blob())
    //     .then(blob => {
    //         let provLink = document.createElement('a');
    //         provLink.href = URL.createObjectURL(blob);
    //         provLink.download = 'cv_Lombardi.pdf'; // Reemplaza con el nombre deseado para el archivo descargado


    //         provLink.style.display = 'none';
    //         document.body.appendChild(provLink);

    //         provLink.click();
    //         document.body.removeChild(provLink);
    //     });       
// });

const urlCv = 'https://github.com/Lombardimn/Responsive-Personal-Porfolio/blob/main/docs/file/cv_Lombardi.pdf';

dcvBtn.addEventListener('click', function(){
        fetch(`https://cdn.rawgit.com/stevehoover/0d4c9f4a1b37f4db7db1a64a9e47be3f/rawgitproxy?url=${encodeURIComponent(urlCv)}`)
            .then(response => response.blob())
            .then(blob => {
                const provLink = document.createElement('a');
                provLink.href = URL.createObjectURL(blob);
                provLink.download = 'cv_Lombardi.pdf';

                provLink.style.display = 'none';
                document.body.appendChild(provLink);

                provLink.click();
                document.body.removeChild(provLink);
    });
}); 