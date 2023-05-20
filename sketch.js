let qtree;

function setup() {
  createCanvas(400, 400);

  let boundary = new Rectangle(200, 200, 200, 200);
  qtree = new QuadTree(boundary, 1);

  console.log(qtree);

  for (let i = 0; i < 300; i++) {

    let x = randomGaussian(width/2, width/8);
    let y = randomGaussian(width/2, width/8);


    let p = new Point(x, y);
    qtree.insert(p);
  }
}

function draw(){
  background(0);
  qtree.show();

  strokeWeight(1);
  stroke (0, 255, 0);
  rectMode(CENTER);

  let range = new Rectangle(mouseX, mouseY, 50, 50);
  rect(range.x,range.y,range.w*2,range.h*2);
  let points = qtree.query(range);

  console.log(points);

  for(let p of points){
    strokeWeight(4);
    point(p.x, p.y)
  }
}

