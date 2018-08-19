import { updateUi } from './updateUi';


class Tooltip {

  constructor() {
    this.tooltipContainer = document.querySelector('.tooltip-container');
    this.action = document.querySelector('.action');
  }

  fadeIn(obj) {
    let opacity = 0.1;
    let timer = setInterval(function() {
      if(opacity >= 1) {
        clearInterval(timer);
      }
      obj.style.opacity = opacity;
      opacity += opacity * 0.1
    },12)
  }

  hideTooltip(obj) {
    obj.removeChild(this.tooltipContainer);
  }


  displayTooltip(e,obj) {
    console.log(obj.dataset.tooltip);
    console.log(e);
    this.tooltipContainer.innerHTML = obj.dataset.tooltip;
    this.tooltipContainer.appendChild(this.action);
    obj.appendChild(this.tooltipContainer);
    updateUi.styleIf(obj.nextElementSibling);
    this.fadeIn(this.tooltipContainer); 
  }
}


export const tooltip = new Tooltip();