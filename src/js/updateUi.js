class UpdateUi {

  constructor() {
    this.tooltipContainer = document.querySelector('.tooltip-container');
    this.yesBtn = document.querySelector('.action__btn--yes');
  }
  
  updateClass(obj) {
    obj.classList.add('row--clicked');
    obj.classList.add('nohover');
  }

  removeClass(obj) {
    obj.classList.remove('row--clicked');
    obj.classList.remove('nohover');
    obj.classList.remove('row--lasthover');
  }


  removeElement(obj) {
    if(obj){
    obj.style.display = 'none'
    }
  }

  reinstateElement(obj) {
    obj.style.display = 'block'
  }



  styleIf(el) {
    const that = this;
    const top = function() {
      that.tooltipContainer.style.top = '-77%';
      that.tooltipContainer.style.borderTopLeftRadius =  '4px';
      that.yesBtn.style.borderTopRightRadius =  '4px';
      that.tooltipContainer.style.borderBottomLeftRadius =  '0px';
      that.yesBtn.style.borderBottomRightRadius =  '0px';
      that.tooltipContainer.style.left = '50%';
    }

    const bottom = function() {
      that.tooltipContainer.style.top = '103%';
      that.tooltipContainer.style.borderBottomLeftRadius =  '4px';
      that.yesBtn.style.borderBottomRightRadius =  '4px';
      that.tooltipContainer.style.borderTopLeftRadius =  '0px';
      that.yesBtn.style.borderTopRightRadius =  '0px';
      that.tooltipContainer.style.left = '50%';
    }

    el === null ? top() : bottom()
  }
}

export const updateUi = new UpdateUi();