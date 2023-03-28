const mobile_btn  = document.querySelector('.mobile-navbar-btn');
const header = document.querySelector('.header');
const toggle = ()=>{
    header.classList.toggle('active');

    // alert("Success")
}


mobile_btn.addEventListener('click',()=>{
    toggle();
})