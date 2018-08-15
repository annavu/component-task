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
    this.tooltipContainer.innerHTML = obj.dataset.tooltip + `<div class="action">
    <button class="action__btn action__btn--no">no</button>
    <button class="action__btn action__btn--yes">yes</button>
    </div>`;
    obj.appendChild(this.tooltipContainer)
    this.tooltipContainer.style.top = '100%';
    this.tooltipContainer.style.left = '50%';
    // this.tooltipContainer.style.opacity = 1;
    this.fadeIn(this.tooltipContainer)
  }
}


export const tooltip = new Tooltip();