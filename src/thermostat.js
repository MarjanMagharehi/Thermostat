class Thermostat{
  constructor(){
    this.temperature = 20;
  }
    up(temperature){
      this.temperature += temperature;
    }
    down(temperature){
      this.temperature -= temperature;
    }
}
