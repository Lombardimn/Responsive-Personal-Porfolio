let btnSwitch = document.querySelector('.aside__input');

btnSwitch.addEventListener('click', ()=>{
    console.log(btnSwitch.checked)
    let flagState = btnSwitch.checked;

    if (flagState === true){
        location.href = '../languages/es/index.html';
    } else {
        location.href = '../pruebas/menulang.html'
    }
});