class Thermostat {
    constructor(temperature) {
        this._temperature = (5 / 9 * (temperature - 32));
    }

    //getter
    get temperature() {
        return this._temperature;
    }

    //setter
    set temperature(updatedTemperature) {
        this._temperature = updatedTemperature;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
thermos.temperature = 45;
temp = thermos.temperature; //45 in C
console.log(temp);

