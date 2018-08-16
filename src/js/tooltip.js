class Tooltip {

  constructor() {
    this.tooltipContainer = document.querySelector('.tooltip-container');
    this.table = document.querySelector('.table__content');
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
    this.tooltipContainer.appendChild(this.action)
    obj.appendChild(this.tooltipContainer)
    this.tooltipContainer.style.top = '103%';
    this.tooltipContainer.style.left = '50%';
    // this.tooltipContainer.style.opacity = 1;
    this.fadeIn(this.tooltipContainer)

    const yesBtn = document.querySelector('.action__btn--yes');
    const noBtn = document.querySelector('.action__btn--no');
    const btn = document.querySelectorAll('.action__btn');
    
  }
}


export const tooltip = new Tooltip();