

function setup() {
    let cnv = createCanvas($("#star").outerWidth(), $("#star").outerHeight());
    cnv.parent('star');
    frameRate(100);
  }
  
function windowResized() {
    resizeCanvas($("#star").outerWidth(), $("#star").outerHeight());
  }
  function draw() {
    background(255);
    push();
    let a=30;
    let b=70;
    let c=40;
    if($("#star").outerWidth()<300 && $("#star").outerHeight()<300){
      a = 10;
      b = 50;
      c = 30;
    }
    star(mouseX, mouseY,  Math.floor(map(mouseX,0,width,a,b)), Math.floor(map(mouseY,0,height,a,b)), c);
    pop();
  
  }
  

  
  function star(x, y, radius1, radius2, npoints) {
    
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
}