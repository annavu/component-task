class Tooltip {

  constructor() {
    this.tooltipContainer = document.querySelector('.tooltip-container');
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

  displayTooltip(e,obj) {
    console.log(obj.dataset.tooltip);
    console.log(e);
    this.tooltipContainer.innerHTML = obj.dataset.tooltip + `<button class="tooltip-container__btn">yes</button>`;
    this.tooltipContainer.style.top = e.pageY + 13 + 'px';
    this.tooltipContainer.style.left = `${e.pageX}px`;
    // this.tooltipContainer.style.opacity = 1;
    this.fadeIn(this.tooltipContainer)
  }
}


export const tooltip = new Tooltip();