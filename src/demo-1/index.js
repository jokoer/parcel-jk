const heart = ''
document.body.innerHTML = `<img id="demo-1-elem-js" src="${heart}" />`

var animKeyframes = [
  { transform: 'scale(1)', opacity: 1 },
  { transform: 'scale(.7)' },
  { transform: 'scale(.8)', opacity: 0.5 }
]

var animOptions = {
  duration: 500, //milliseconds
  easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  iterations: Infinity, // or a number
  direction: 'alternate' // 'normal', 'reverse', etc. fill: 'forwards' //'backwards', 'both', 'none', 'auto'
}

var anim = document
  .getElementById('demo-1-elem-js')
  .animate(animKeyframes, animOptions)
