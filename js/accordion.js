const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll('.feature__link');

btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    btnItem.classList.toggle('feature__link_active');
    
    lists[index].classList.toggle('hidden');
  });
});