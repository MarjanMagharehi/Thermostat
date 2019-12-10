describe("Thermostat", function(){
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Thermostat starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases the temperature", function(){
    thermostat.up(5);
    expect(thermostat.temperature).toEqual(25);
  });

  it("decreases the temperature", function(){
    thermostat.down(5);
    expect(thermostat.temperature).toEqual(15);
  });
  it("minimum temperature is 10 degrees", function(){
    thermostat.down(11);
    expect(thermostat.temperature).toEqual(10);
  });

  it("Power saving mode is on by default", function(){
     expect(thermostat.power_saving_mode).toBe(true);
  });

  it("If power saving mode is on, expect the maximum temperature to be 25", function(){
        expect(thermostat.maximumTemperature).toEqual(25);
  });
  it("If power saving mode is off, the maximum temperature to be 32", function(){
        thermostat.power_saving_off();
        expect(thermostat.maximumTemperature).toEqual(32);
    });
  it("Resets the temperature to 20", function(){
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });
  
});
