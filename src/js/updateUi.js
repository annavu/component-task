class UpdateUi {
  
  updateClass(obj) {
    obj.classList.add('row--clicked');
    obj.classList.add('nohover');
    console.log(obj.classList)
    console.log(obj.children[1])
  }

  // clearClass(obj) {
   
  //   for(let i=0; i<obj.length; i++) {
  //     if(obj[i].classList.contains('nohover')) {
  //   console.log('yay')
  //     }
  //   }
    
  //   console.log(obj)
  // }

  removeElement(obj) {
    if(obj){
    obj.remove();
    } else {
      obj.add()
    }
  }

  removeListener(obj) {
    obj.removeEventListener('mouseleave', this.removeClass)
    console.log(obj)
  }
}

export const updateUi = new UpdateUi();