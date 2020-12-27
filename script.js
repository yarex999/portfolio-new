let chartElem = document.querySelectorAll('.chart_elem_sum');
let aboutMe = document.querySelectorAll('.header_aboutme');
let generalInfo = document.querySelectorAll('.general_info');
let languages = document.querySelectorAll('.languages');
let isScrolling = false;

let aboutLinks = document.querySelectorAll('.about_link');
let tabContents = document.querySelectorAll('.tab_content');

for (let i = 0; i < aboutLinks.length; i++) {
    aboutLinks[i].addEventListener('click', function() {
        if (this.classList.contains('select')) {
            hideAll();
        } else {
            hideAll();
            this.classList.add('select');
            showText(this.nextElementSibling);
            Array.from(chartElem).forEach(elem => elem.classList.add('chart_animation'));
            Array.from(aboutMe).forEach(elem => elem.classList.add('aboutme_animate'));

        }
    });
}

function hideAll() {

    for (let i = 0; i < aboutLinks.length; i++) {
        aboutLinks[i].classList.remove('select');
    }
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.height = '0';
    }


    Array.from(chartElem).forEach(elem => elem.classList.remove('chart_animation'));
    Array.from(aboutMe).forEach(elem => elem.classList.remove('aboutme_animate'));




}

function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';

}








// submit button

let contactInfo = document.querySelectorAll('.contact_info');
// let checkContactInfo = Array.from(contactInfo).every(elem => elem.value != 0);


let animateButton = function(e) {
    let checkContactInfo = Array.from(contactInfo).every(elem => elem.value != 0);
    e.preventDefault;

    if (checkContactInfo) {
        e.target.classList.add('success');
        e.target.classList.add('animate');
    } else {
        e.target.classList.add('error');
        e.target.classList.add('animate');
    }

    setTimeout(function() {
        e.target.classList.remove('animate');
        e.target.classList.contains('success') ? e.target.classList.remove('success') : e.target.classList.remove('error');
    }, 5000);
};

var classname = document.getElementsByClassName("button");

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
}