
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}


// Applications Slide In 
const projects = document.querySelectorAll('.applications-list');


window.addEventListener('scroll', checkBoxes);
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    projects.forEach(project => {
        const boxTop = project.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            project.classList.add('application-show')

        } else {
            project.classList.remove('application-show')

        }
    })
}

// Dark and Light mode Toggle

const toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', function() {
    const html = document.querySelector('html');
    const skylineIMG = document.querySelector('.skyline')
    html.classList.toggle('dark');
    skylineIMG.classList.toggle('skyline-faded');
    if (html.classList.contains('dark')) {
        e.target.innerText = 'Light Mode'
    } else {
        e.target.innerText = 'Dark Mode'
    }
})




// const skylineIMG = document.querySelector('.skyline')

// window.addEventListener('scroll', skylineFade);

// function skylineFade() {
//     const triggerBottom = window.innerHeight / 5 * 4
//     const boxTop = skylineIMG.getBoundingClientRect().top;
//     if (boxTop < triggerBottom) {
//         skylineIMG.classList.add('skyline-fade-in')

//     } else {
//         skylineIMG.classList.remove('skyline-fade-in')
//     }
// }