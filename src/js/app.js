import '../scss/main.scss';
import { tooltip } from './tooltip';
import { updateUi } from './updateUi';

const lastRow = document.querySelector('.row--last');
const table = document.querySelector('.table__content');
const rows = document.querySelectorAll('.row');
const deleteButtons = document.querySelectorAll('.cell--img');
const tooltipContainer = document.querySelector('.tooltip-container');
let timeout;


function addClass() {
  table.classList.add('table__content--height');
}

function removeClass() {
  table.classList.remove('table__content--height');
}

function delayEnter() {
  const that = this;
  timeout = setTimeout(function() {
    addClass()
    that.classList.add('row--lasthover');
  },500)
}


function delayLeave() {
  clearTimeout(timeout)
  removeClass()
  this.classList.remove('row--lasthover')
}


function loopTroughStyles() {
  rows.forEach(function(row) {
    updateUi.removeClass(row)
    updateUi.reinstateElement(row.children[3].children[1])
  })
}

function handleTooltipRowLast(e) {
  e.stopPropagation()
  removeClass()
  lastRow.addEventListener('mouseleave', delayLeave)
}


let handleClick = (e,obj) => {
  updateUi.updateClass(obj.parentNode)
  updateUi.removeElement(obj.children[1])
  tooltip.displayTooltip(e, obj.parentNode);
}

lastRow.addEventListener('mouseenter', delayEnter)

lastRow.addEventListener('mouseleave', delayLeave);

lastRow.addEventListener('click', addClass)


deleteButtons.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    if(this.parentNode.classList.contains('row--last')) {
      loopTroughStyles();
      handleClick(e,this);
      addClass();
      btn.parentNode.removeEventListener('mouseleave', delayLeave);
    } else {
      loopTroughStyles();
      handleClick(e, this);
      removeClass();
      lastRow.addEventListener('mouseleave', delayLeave);
      updateUi.removeClass(lastRow);
      updateUi.reinstateElement(lastRow.children[3].children[1]);
    }
  })
})


tooltipContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('action__btn--yes')) {
    if(tooltipContainer.parentNode.classList.contains('row--last')) {
      handleTooltipRowLast(e)
    };
    table.style.height = 'auto';
    tooltipContainer.parentNode.remove();
  } else {
    if(tooltipContainer.parentNode.classList.contains('row--last')) {
      handleTooltipRowLast(e);
    };
    updateUi.removeClass(tooltipContainer.parentNode);
    updateUi.reinstateElement(tooltipContainer.previousElementSibling.children[1]);
    tooltip.hideTooltip(tooltipContainer.parentNode);
  }
})