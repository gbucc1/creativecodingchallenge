//defines all properties of the cells
function Cell(pos, rad, col) {
  
  //assigns positions to all cells
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }
  
  //sets the radius and color of the cells
  this.rad = rad || 60;
  this.col = col || color(random(100, 255), 0, random(100, 255), 100);

  //checks to see if the user clicked on one of the cells
  this.clicked = function(x, y) {
    var distance = dist(this.pos.x, this.pos.y, x, y);
    if (distance < this.rad) {
      return true;
    } else {
      return false;
    }
  }

  //function for when the cells split
  this.mitosis = function() {
    var cell = new Cell(this.pos, this.rad * 0.8, this.col);
    return cell;
  }

  //function to move the cells
  this.move = function() {
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
  }

  //function to draw the cells
  this.show = function() {
    noStroke();
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.rad, this.rad)
  }

}