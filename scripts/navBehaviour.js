window.onscroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const navBar = document.querySelector('.navBar');
    if(scrollTop >= 53){
       navBar.style.height = '80px';
    } else if (scrollTop == 0) {
        navBar.style.height = '139px';
    }
};

var searchInputs = document.querySelectorAll('.searchInput');

searchInputs.forEach((searchInput) => {
    searchInput.addEventListener('keyup', (event) =>{
        if (event.keyCode === 13) {
            event.preventDefault();
            if(searchInput.value) window.location.href = '?search='+searchInput.value;
        }
    });
});

document.getElementById('searchBtn1').addEventListener('click', () => {
    if(searchInputs[0].value) window.location.href = '?search='+searchInputs[0].value;
});

document.getElementById('searchBtn2').addEventListener('click', () => {
    if(searchInputs[1].value)window.location.href = '?search='+searchInputs[1].value;
});

window.onload = () => {
    let query = window.location.search;
    let urlParams = new URLSearchParams(query);
    let place = urlParams.get('place');

    switch(place){
        default: case 'start':
            document.getElementById('startLink').setAttribute('style', 'font-weight: 600;');
            document.getElementById('startLink2').setAttribute('style', 'font-weight: 800;'); 
        break;
        case 'gab1': case 'gab2': case 'gab3': case 'gab4': case 'gab5':
            document.getElementById('gabLink').setAttribute('style', 'font-weight: 600;');
            document.getElementById('gabLink2').setAttribute('style', 'font-weight: 800;');
        break;
        case 'lab1': case 'lab2':
            document.getElementById('labLink').setAttribute('style', 'font-weight: 600;')
            document.getElementById('labLink2').setAttribute('style', 'font-weight: 800;')
        break;
        case 'repPal':
            document.getElementById('repLink2').setAttribute('style', 'font-weight: 800;')
        break;
        case 'consult':
            document.getElementById('consultLink2').setAttribute('style', 'font-weight: 800;')
        break;
        case 'contact':
            document.getElementById('contactLink2').setAttribute('style', 'font-weight: 800;')
        break;
    }
};

const btnBurger = document.querySelector('.btnBurger');
const mobileNavBar = document.querySelector('.mobileNavBar');
let menuOpen = false;
btnBurger.addEventListener('click', () => {
    let saveScrollTop =  document.documentElement.scrollTop;
    if(!menuOpen) {
        btnBurger.classList.add('open');
        mobileNavBar.classList.add('open');
        document.documentElement.scrollTop = 0;
        menuOpen = true;
    } else {
        mobileNavBar.classList.remove('open');
        btnBurger.classList.remove('open');
        document.documentElement.scrollTop = saveScrollTop;
        menuOpen = false;
    }
});

let expand = document.querySelectorAll('.expand');
let dropItem = document.querySelectorAll('.dropItem');
for(let i = 0; i < expand.length; i++){
    let open = false;
    expand[i].addEventListener('click', () =>{
        if (!open) {
            expand[i].setAttribute('style', 'transform: rotate(180deg)');
            dropItem[i].setAttribute('style','max-height: 1000px; overflow: visible;');
            open = true;
        } else {
            expand[i].setAttribute('style', 'transform: rotate(360deg)');
            dropItem[i].setAttribute('style','max-height: 0px; overflow: hidden;');
            open = false;
        }
    });
}