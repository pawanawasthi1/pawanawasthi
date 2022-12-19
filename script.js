
// SELECTORS

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const icon3 = document.querySelector('.icon3');
const icon4 = document.querySelector('.icon4');
const icon5 = document.querySelector('.icon5');
const profile = document.getElementById('about-wrap');
const skills = document.querySelector('.skill-wrap');
const coding = document.querySelector('.coding-wrap');
const projects = document.querySelector('.projects-wrap');
const contact = document.querySelector('.form-wrap');


// EVENT LISTENERS (adding and removing classes)


btn1.addEventListener('click', function() {
  btn1.classList.add('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
  btn4.classList.remove('active');
  btn5.classList.remove('active');
  icon1.classList.add('active');
  icon2.classList.remove('active');
  icon3.classList.remove('active');
  icon4.classList.remove('active');
  icon5.classList.remove('active');
  profile.classList.add('active');
  skills.classList.remove('active');
  coding.classList.remove('active');
  projects.classList.remove('active');
  contact.classList.remove('active');
})

btn2.addEventListener('click', function() {
  btn1.classList.remove('active');
  btn2.classList.add('active');
  btn3.classList.remove('active');
  btn4.classList.remove('active');
  btn5.classList.remove('active');
  icon1.classList.remove('active');
  icon2.classList.add('active');
  icon3.classList.remove('active');
  icon4.classList.remove('active');
  icon5.classList.remove('active');
  profile.classList.remove('active');
  skills.classList.add('active');
  coding.classList.remove('active');
  projects.classList.remove('active');
  contact.classList.remove('active');
})

btn3.addEventListener('click', function() {
  btn1.classList.remove('active');
  btn2.classList.remove('active');
  btn3.classList.add('active');
  btn4.classList.remove('active');
  btn5.classList.remove('active');
  icon1.classList.remove('active');
  icon2.classList.remove('active');
  icon3.classList.add('active');
  icon4.classList.remove('active');
  icon5.classList.remove('active');
  profile.classList.remove('active');
  skills.classList.remove('active');
  coding.classList.add('active');
  projects.classList.remove('active');
  contact.classList.remove('active');
})

btn4.addEventListener('click', function() {
  btn1.classList.remove('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
  btn4.classList.add('active');
  btn5.classList.remove('active');
  icon1.classList.remove('active');
  icon2.classList.remove('active');
  icon3.classList.remove('active');
  icon4.classList.add('active');
  icon5.classList.remove('active');
  profile.classList.remove('active');
  skills.classList.remove('active');
  coding.classList.remove('active');
  projects.classList.add('active');
  contact.classList.remove('active');
})

btn5.addEventListener('click', function() {
  btn1.classList.remove('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
  btn4.classList.remove('active');
  btn5.classList.add('active');
  icon1.classList.remove('active');
  icon2.classList.remove('active');
  icon3.classList.remove('active');
  icon4.classList.remove('active');
  icon5.classList.add('active');
  profile.classList.remove('active');
  skills.classList.remove('active');
  coding.classList.remove('active');
  projects.classList.remove('active');
  contact.classList.add('active');
})

