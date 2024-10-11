// Métodos Protótipos
class Rectangle{
  constructor(heigth, width){
    this.height = heigth;
    this.width = width
  }

  //Getter
  get area(){
    return this.calcArea()
  }

  calcArea(){
    return this.height * this.width
  }
}

const square = new Rectangle(10,10)
console.log(square.area)