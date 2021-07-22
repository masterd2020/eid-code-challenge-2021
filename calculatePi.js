class CalculatePi {
  constructor(num) {
    this.num = num;
  }
  
  generateCoordinate() {
    const coordinates = [];
    for(let i = 0; i < this.num; i++) {
      // NOTE: Math.random generate number from 0 to 1 by default
      coordinates.push({x: Math.random(), y: Math.random()});
    }
    
    return coordinates;
  }

  checkBetween() {
    if(this.num <= 0 || this.num > 1000000000) throw Error("number must be between 0 and 1000000000");
  }
  
  calculate() {
    // Check for lowest and highest value of num, including positive value
    this.checkBetween();
    
    // Generate coordinates
    const coordinates = this.generateCoordinate();
    
    let inside_the_circle = 0, outside_the_circle = 0;
    
    coordinates.forEach(({x, y}) => {
      const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      
      if(distance < 1) {
        inside_the_circle++;
      } else {
        outside_the_circle++;
      }
    });
    
    let pi = (4 * inside_the_circle) / outside_the_circle;
    
    return pi;
  }
}

const calculatePi = new CalculatePi(3);
console.log(calculatePi.calculate());