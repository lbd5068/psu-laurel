
window.onresize = resize;
function resize(){
 load();
}
function render(){
 var ctx = document.getElementById('canvas').getContext('2d');
 var cWid=ctx.canvas.clientWidth;
 var cHeight=ctx.canvas.clientHeight;
  ctx.save();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#325FA2';
  ctx.clearRect(0,0,cWid,cHeight);
  ctx.beginPath();
  for(var x=0;x<cWid/10;x++){//
   for(var y=0;y<cHeight/10;y++){//
    ctx.rect((x*11+(mouse.x-x*11))/5.0,(y*11+(mouse.y-y*11))/5.0,10,10);
   }
  }
  ctx.closePath();
  ctx.stroke();
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
  //var now = new Date();
  render();
  canvas.addEventListener('click', function(e){
   mouse=getMousePos(canvas,e);
   render();
 });

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
