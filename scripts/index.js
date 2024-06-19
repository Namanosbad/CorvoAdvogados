const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const mobileLinks = document.querySelectorAll('.mobile__links a');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId); 
    
    if (targetElement && !isVisible(targetElement)) {
      mobileNavbar.classList.remove('active'); 
    } else {
      event.preventDefault(); 
    }
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

window.addEventListener('scroll', function(){
    if(this.window.pageYOffset >0) return navbar.classList.add('active')
        return navbar.classList.remove('active');
});