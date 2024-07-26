document.addEventListener('DOMContentLoaded', function() {
  const areasItems = document.querySelectorAll('.areas__item');
  areasItems.forEach(item => {
    item.classList.add('hidden');
  });
});

const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const mobileLinks = document.querySelectorAll('.mobile__links a');
const toggleButton = document.querySelector('#toggleAreas');
const areasContent = document.querySelector('.areas__content');
const areasItems = document.querySelectorAll('.areas__item');
const areasLink = document.querySelector('.navbar a[href="index.html#areas"]');


button.addEventListener('click', function() {
  mobileNavbar.classList.toggle('active');
});


mobileLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    mobileNavbar.classList.remove('active'); 

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

areasLink.addEventListener('click', function(event) {
  areasContent.classList.toggle('active');
  toggleButton.classList.toggle('active');
  areasItems.forEach(item => {
    item.classList.toggle('hidden');
  });

  setTimeout(() => {
    const targetId = areasLink.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, 0);
});


toggleButton.addEventListener('click', function() {
  areasContent.classList.toggle('active');
  toggleButton.classList.toggle('active');
  areasItems.forEach(item => {
    item.classList.toggle('hidden');
  });
});


function isVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});