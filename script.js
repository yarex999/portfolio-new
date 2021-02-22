let chartElem = document.querySelectorAll('.chart_elem_sum');
let chartBar = document.querySelectorAll('.language_level_percentage');
let aboutMe = document.querySelectorAll('.header_aboutme');
let generalInfo = document.querySelectorAll('.general_info');
let languages = document.querySelectorAll('.languages');


let aboutLinks = document.querySelectorAll('.about_link');
let tabContents = document.querySelectorAll('.tab_content');


for (let i = 0; i < aboutLinks.length; i++) {
    aboutLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('select');
        this.classList.contains('select') ? tabContents[i].style.height = tabContents[i].scrollHeight + 'px' : tabContents[i].style.height = 0;
    })
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        aboutLinks[0].classList.add("select");
        tabContents[0].style.height = tabContents[0].scrollHeight + 'px';

        for (let j = 0; j < chartElem.length; j++) {
            if (isPartiallyVisible(chartElem[j])) {
                chartElem[j].classList.add('chart_animation');
            } else {
                chartElem[j].classList.remove('chart_animation');
            }
        }
    }, 2000)



})


document.querySelector('.content').addEventListener('scroll', function() {
    console.log('start');
    for (let j = 0; j < chartElem.length; j++) {
        if (isPartiallyVisible(chartElem[j])) {
            chartElem[j].classList.add('chart_animation');
        } else {
            chartElem[j].classList.remove('chart_animation');
        }
    }

    for (let k = 0; k < chartBar.length; k++) {
        if (isPartiallyVisible(chartBar[k])) {
            chartBar[k].classList.add('animate_bar');
        } else {
            chartBar[k].classList.remove('animate_bar');
        }
    }
    console.log('end');
})

document.querySelector('.wrapper').addEventListener('scroll', function() {
    console.log('start');
    for (let j = 0; j < chartElem.length; j++) {
        if (isPartiallyVisible(chartElem[j])) {
            chartElem[j].classList.add('chart_animation');
        } else {
            chartElem[j].classList.remove('chart_animation');
        }
    }

    for (let k = 0; k < chartBar.length; k++) {
        if (isPartiallyVisible(chartBar[k])) {
            chartBar[k].classList.add('animate_bar');
        } else {
            chartBar[k].classList.remove('animate_bar');
        }
    }
    console.log('end');
})

function isPartiallyVisible(elem) {
    let elementBoundary = elem.getBoundingClientRect();
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
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
