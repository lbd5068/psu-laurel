
window.onresize = resize;
function resize(){
 load();
}
var mouse={
 x:0,
 y:0
};
function load(){
var alignWidth=
  window.innerWidth-25;
  document.getElementById('canvas').width =alignWidth;
  }
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
function clock(){
  var now = new Date();
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#325FA2';
  ctx.clearRect(0,0,ctx.canvas.clientWidth,ctx.canvas.clientHeight);//get actual nums
  ctx.beginPath();
  for(var x=0;x<10;x++){//
   for(var y=0;y<10;y++){//
    ctx.rect(x*11+mouse.x/5,y*11+mouse.y/5,10,10);
   }
  }
  ctx.closePath();
  ctx.stroke();
  canvas.addEventListener('mousemove', function(e){
   mouse=getMousePos(canvas,e);
   clock();
});

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
