function Sharpie(color, width){
  this.color = color;
  this.width = width;
  this.inkAmount = 100;
  this.use = function(){
    return this.inkAmount -= width;
  }
}

var sharipie = new Sharpie("yellow", 30);
console.log(sharipie.use());