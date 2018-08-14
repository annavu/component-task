import '../scss/main.scss';


// const bin = document.querySelector('.img');

// bin.addEventListener('click', function() {
//   console.log(123);
// })

const lastRow = document.querySelector('.row--last');
const table = document.querySelector('.table__content');
const rows = document.querySelectorAll('.row');
const deleteButtons = document.querySelectorAll('.cell--img');
const icons = document.querySelectorAll('.fa');


function addClass() {
  table.classList.add('table__content--height');
}

function removeClass() {
  table.classList.remove('table__content--height');
}

lastRow.addEventListener('mouseenter', addClass)

lastRow.addEventListener('mouseleave', removeClass)

lastRow.addEventListener('click', addClass)



deleteButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {

    if(btn.parentNode.classList.contains('row--last')) {
      console.log(123);
      btn.parentNode.removeEventListener('mouseleave', removeClass)
      btn.parentNode.classList.add('row--clicked');
      btn.parentNode.classList.add('nohover');
      console.log(btn.children[1])
      btn.children[1].remove()
      // btn.parentNode.remove();
      // table.style.height = 'auto';
    } else {
        btn.parentNode.classList.add('row--clicked');
        btn.parentNode.classList.add('nohover');
        console.log(btn.children[1])
        btn.children[1].remove()
        // btn.parentNode.remove();
        // table.style.height = 'auto';
    }
  })
})