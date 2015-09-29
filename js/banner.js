
window.onresize = resize;
function resize(){
 load();
}
function load(){
var alignWidth=
  window.innerWidth-25;
  document.getElementById('canvas').width =alignWidth;
  }
function clock(){
  var now = new Date();
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.clearRect(0,0,150,150);//get actual nums
  for(var x=0;x<10;x++){//don't trust no auto semicoloning
   for(var y=0;y<10;y++){//
    ctx.fillRect(x*110,y*110,100,100);
   }
  }
  canvas.addEventListener('mousemove', function(e){
   clear();
   //draw();
});

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
}
