"use strict";

class Thermostat{
  constructor(){
    this.temperature = 20;
    this.minimumTemperature = 10;
    this.power_saving_mode = true;
    this.maximumTemperature = 25;
  }
    up(temperature){
      this.temperature += temperature;
      if(this.power_saving_mode = true && this.temperature > this.maximumTemperature) {
           this.temperature = this.maximumTemperature;
           return "Power saving mode is on. Now moving to the maximum of 25 degrees."
       }
       else if(this.power_saving_mode = false && this.temperature > this.maximumTemperature) {
           this.temperature = this.maximumTemperature;
           return "Power saving mode is off. Now moving to the maximum of 32 degrees."
       }
       return `The temperature is now ${this.temperature} degrees.`;
    }
    down(temperature){
      this.temperature -= temperature;
      if(this.temperature < this.minimumTemperature){
        this.temperature = this.minimumTemperature
        return "The temperature cannot go lower than 10 degrees"
      }
      return `The temperature is ${this.temperature} degrees`
    }
    power_saving_off() {
        this.power_saving_mode = false;
        this.maximumTemperature = 32;
        return "Power saving mode has been turned off"
    }
    reset(){
      this.temperature = 20;
    };
}
