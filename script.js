let chartElem = document.querySelectorAll('.chart_elem_sum');
let chartBar = document.querySelectorAll('.language_level_percentage');
let aboutMe = document.querySelectorAll('.header_aboutme');
let generalInfo = document.querySelectorAll('.general_info');
let languages = document.querySelectorAll('.languages');
let isScrolling = false;

let aboutLinks = document.querySelectorAll('.about_link');
let tabContents = document.querySelectorAll('.tab_content');

for (let i = 0; i < aboutLinks.length; i++) {
    aboutLinks[i].addEventListener('click', function() {
        if (this.classList.contains('select')) {
            hideAll(this.nextElementSibling);
        } else {
            hideAll(this.nextElementSibling);
            this.classList.add('select');
            showText(this.nextElementSibling);


        }
    });
}

function hideAll(x) {

    for (let i = 0; i < aboutLinks.length; i++) {
        aboutLinks[i].classList.remove('select');
    }
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.height = '0';
    }
    tabDeleteAnimation(x);

}

function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';
    tabSetAnimation(textEl);

}


function tabSetAnimation(tab) {
    let classNames = tab.classList;
    let x = classNames[1];
    switch (x) {
        case 'tab1':
            Array.from(chartElem).forEach(elem => elem.classList.add('chart_animation'));
            break;
        case 'tab4':
            Array.from(chartBar).forEach(elem => elem.classList.add('animate_bar'));
            break;
    }
}

function tabDeleteAnimation(tab) {
    let classNames = tab.classList;
    let x = classNames[1];
    switch (x) {
        case 'tab1':
            Array.from(chartElem).forEach(elem => elem.classList.remove('chart_animation'));
            break;
        case 'tab4':
            Array.from(chartBar).forEach(elem => elem.classList.remove('animate_bar'));
            break;
    }
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