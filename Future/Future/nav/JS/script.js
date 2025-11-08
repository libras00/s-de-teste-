document.querySelectorAll('.navigation li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.navigation li').forEach(li => li.classList.remove('active'));
    const parentLi = link.closest('li');
    if (parentLi) parentLi.classList.add('active');
  });
});
