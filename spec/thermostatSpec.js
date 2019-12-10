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
  })

});