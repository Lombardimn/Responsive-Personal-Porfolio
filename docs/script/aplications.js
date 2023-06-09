
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
dcvBtn.addEventListener('click', function(){
    let urlCv = '../file/cv_Lombardi.pdf';

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

        // Nombre del archivo PDF que se descargará
        const nameFile = 'cv_lombardi_matias.pdf';

        // Crear un elemento <a> para el enlace de descarga
        const linkDownload = document.createElement('a');

        // Establecer la URL del archivo PDF como el atributo "href" del enlace
        linkDownload.href = urlCv;

        // Establecer el nombre del archivo PDF como el atributo "download" del enlace
        linkDownload.download = nameFile;

        // Simular el clic en el enlace de descarga
        linkDownload.click();

});