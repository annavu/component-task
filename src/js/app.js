import '../scss/main.scss';


// const bin = document.querySelector('.img');

// bin.addEventListener('click', function() {
//   console.log(123);
// })

const lastRow = document.querySelector('.row--last');
const table = document.querySelector('.table__content');

lastRow.addEventListener('mouseenter', function() {
  table.classList.add('add');
})

lastRow.addEventListener('mouseleave', function() {
  table.classList.remove('add');
})

const rows = document.querySelectorAll('.row');
const deleteButtons = document.querySelectorAll('.cell--img');
const icons = document.querySelectorAll('.fa');

deleteButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    btn.parentNode.classList.add('row--clicked');
    btn.parentNode.classList.add('nohover');
    console.log(btn.children[1])
    btn.children[1].remove()
    // btn.parentNode.remove();
    // table.style.height = 'auto';
  })
})