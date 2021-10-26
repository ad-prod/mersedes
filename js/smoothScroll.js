const linkHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelectorAll('.main__scroll');
const newArr = [...linkHead, mainScroll];

newArr.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const ID = event.target.getAttribute('href').substr(1);

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});