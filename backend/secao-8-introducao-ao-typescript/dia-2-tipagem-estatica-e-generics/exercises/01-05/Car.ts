class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk() {
    console.log('Buzinou!!!'); 
  }
  turnOn(){
    console.log('Make turnOn');
  }

  turnOff(){
    console.log('Make turnOff');
  }

  speedUp(){
    console.log('Make speedUp');
  }

  speedDown(){
    console.log('Make speedDown');
  }

  stop(){
    console.log('Make stop');
  }

  turn(direction: string){
    console.log('Make turn');
  }
}

export default Car;

const gol: Car = new Car('Gol', 'branco', 4);

gol.turnOn();
gol.speedUp();
gol.honk();
gol.turn('left');
gol.turnOff();
gol.stop();
