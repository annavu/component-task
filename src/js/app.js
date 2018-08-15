import '../scss/main.scss';
import { tooltip } from './tooltip';
import { updateUi } from './updateUi';

const lastRow = document.querySelector('.row--last');
const table = document.querySelector('.table__content');
const rows = document.querySelectorAll('.row');
const deleteButtons = document.querySelectorAll('.cell--img');
const icons = document.querySelectorAll('.fa');
const tooltips = document.querySelectorAll('.tooltip');
// const tooltipContainer = document.querySelector('.tooltip-container');

// function displayTooltip(e,obj) {
//   console.log(obj.dataset.tooltip);
//   console.log(e);
//   tooltipContainer.innerHTML = obj.dataset.tooltip + `<button class="tooltip-container__btn">yes</button>`;
//   tooltipContainer.style.opacity = 1;
//   tooltipContainer.style.top = e.pageY + 13 + 'px';
//   tooltipContainer.style.left = `${e.pageX}px`;
// }

function update(obj, newclass) {

}



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
  btn.addEventListener('click', function(e) {

    if(btn.parentNode.classList.contains('row--last')) {
      console.log(123);
      btn.parentNode.removeEventListener('mouseleave', removeClass)
      // btn.parentNode.classList.add('row--clicked');
      // btn.parentNode.classList.add('nohover');
      updateUi.updateClass(this.parentNode)
      console.log(btn.children[1])
      // btn.children[1].remove()
      updateUi.removeElement(this.children[1])
      tooltip.displayTooltip(e, this.parentNode);

      // btn.parentNode.remove();
      // table.style.height = 'auto';
    } else {
      
        btn.parentNode.classList.add('row--clicked');
        btn.parentNode.classList.add('nohover');
        console.log(btn.children[1])
        btn.children[1].remove()
        tooltip.displayTooltip(e, this.parentNode)
       
        // btn.parentNode.remove();
        // table.style.height = 'auto';
        
    }
  })
})