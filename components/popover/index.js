const shapes = window.document.querySelectorAll('.shape')
for (const key in shapes) {
  if (Object.hasOwnProperty.call(shapes, key)) {
    const shape = shapes[key];
    shape.addEventListener('mouseover', function (event) {
      console.log(this.getAttribute('pos'))
      setPopover({
        offsetWidth: this.offsetWidth,
        offsetHeight: this.offsetHeight,
        offsetLeft: this.offsetLeft,
        offsetTop: this.offsetTop,
        place: this.getAttribute('pos')
      })
    })

    shape.addEventListener('mouseout', function (event) {
      setPopover({ place: 'bottomLeft' })
      // 延迟300ms，如果鼠标放在卡片上，则无操作，否则将卡片隐藏
      setTimeout(() => {

      }, 500);
    })
  }
}

function setPopover (pos = {}) {
  pos = Object.assign({
    offsetWidth: 0,
    offsetHeight: 0,
    offsetLeft: 0,
    offsetTop: 0,
    place: 'rightBottom',
    arrowPointAtCenter: false // 对齐方式：true-中心对齐,false-边缘对齐
  }, pos)
  console.log(pos)
  const popover = window.document.querySelector(".tiger-popover")
  place = 'tiger-popover-placement-' + pos.place
  popover.className = "tiger-popover " + place
  switch (pos.place) {
    case 'top':
      popover.style.top = pos.offsetTop - popover.offsetHeight + 'px'
      popover.style.left = pos.offsetWidth / 2 + pos.offsetLeft - popover.offsetWidth / 2 + 'px'
      break;
    case 'topRight':
      popover.style.top = pos.offsetTop - popover.offsetHeight + 'px'
      popover.style.left = pos.offsetLeft - (popover.offsetWidth - pos.offsetWidth) + 'px'
      break;
    case 'topLeft':
      popover.style.top = pos.offsetTop - popover.offsetHeight + 'px'
      popover.style.left = pos.offsetLeft + 'px'
      break;
    case 'right':
      popover.style.top = pos.offsetTop - popover.offsetHeight / 2 + pos.offsetHeight / 2 + 'px'
      popover.style.left = pos.offsetLeft + popover.offsetWidth / 2 + 8 + 'px'
      break;
    case 'rightTop':
      popover.style.top = pos.offsetTop + 'px'
      popover.style.left = pos.offsetLeft + popover.offsetWidth / 2 + 8 + 'px'
      break;
    case 'rightBottom':
      popover.style.top = pos.offsetTop - popover.offsetHeight + pos.offsetHeight + 'px'
      popover.style.left = pos.offsetLeft + popover.offsetWidth / 2 + 8 + 'px'
      break;
    case 'bottom':
      popover.style.top = pos.offsetTop + pos.offsetHeight + 'px'
      popover.style.left = pos.offsetLeft - popover.offsetWidth / 2 + pos.offsetWidth / 2 + 'px'
      break;
    case 'bottomLeft':
      popover.style.top = pos.offsetTop + pos.offsetHeight + 'px'
      popover.style.left = pos.offsetLeft + 'px'
      break;
    case 'bottomRight':
      popover.style.top = pos.offsetTop + pos.offsetHeight + 'px'
      popover.style.left = pos.offsetLeft - popover.offsetWidth + pos.offsetWidth + 'px'
      break;
    case 'left':
      popover.style.top = pos.offsetTop - popover.offsetHeight / 2 + pos.offsetHeight / 2 + 'px'
      popover.style.left = pos.offsetLeft - popover.offsetWidth + 'px'
      break;
    case 'leftTop':
      popover.style.top = pos.offsetTop + 'px'
      popover.style.left = pos.offsetLeft - popover.offsetWidth + 'px'
      break;
    case 'leftBottom':
      popover.style.top = pos.offsetTop - popover.offsetHeight + pos.offsetHeight + 'px'
      popover.style.left = pos.offsetLeft - popover.offsetWidth + 'px'
      break;
    default:
      break;
  }
}