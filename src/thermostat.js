"use strict";

class Thermostat{
  constructor(){
    this.temperature = 20;
    this.minimumTemperature = 10;
    this.power_saving_mode = true;
  }
    up(temperature){
      this.temperature += temperature;
    }
    down(temperature){
      this.temperature -= temperature;
      if(this.temperature < this.minimumTemperature){
        this.temperature = this.minimumTemperature
        return "The temperature cannot go lower than 10 degrees"
      }
      return `The temperature is ${this.temperature} degrees`
    }
}
