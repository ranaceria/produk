const navMenu = document.querySelector 
('.nav-menu');
document.querySelector('.nav-tombol').onclick = () => {
    navMenu.classList.toggle('aktif');
};

const tombol = document.querySelector('.nav-tombol');
document.addEventListener('click', function(e){
    if(!tombol.contains(e.target) && !navMenu.contains(e.target)){
        navMenu.classList.remove('aktif');
    }
});