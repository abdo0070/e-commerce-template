

const showNavBarIcon = document.getElementById('bar');
const nav = document.getElementById('nav-bar');
const closeNavBarIcon = document.getElementById('close-nav');

if(showNavBarIcon){
    showNavBarIcon.addEventListener('click',function(){
        nav.classList.add('active');
    });
}

if(closeNavBarIcon){
    closeNavBarIcon.addEventListener('click',function(){
        nav.classList.remove('active');
    });

}



