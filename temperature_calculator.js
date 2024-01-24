function convertTemperature() {
    // Get user input
    var temperature = parseFloat(document.getElementById('temperature').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;

    // Perform the conversion
    var result = performTemperatureConversion(temperature, fromUnit, toUnit);

    // Display the result
    document.getElementById('temperatureResult').innerText = temperature + ' ' + fromUnit + ' = ' + result.toFixed(2) + ' ' + toUnit;
}

function performTemperatureConversion(temperature, fromUnit, toUnit) {
    switch (fromUnit) {
        case 'celsius':
            return convertCelsius(temperature, toUnit);
        case 'fahrenheit':
            return convertFahrenheit(temperature, toUnit);
        case 'kelvin':
            return convertKelvin(temperature, toUnit);
        default:
            return NaN;
    }
}

function convertCelsius(temperature, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return temperature;
        case 'fahrenheit':
            return (temperature * 9/5) + 32;
        case 'kelvin':
            return temperature + 273.15;
        default:
            return NaN;
    }
}

function convertFahrenheit(temperature, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return (temperature - 32) * 5/9;
        case 'fahrenheit':
            return temperature;
        case 'kelvin':
            return (temperature - 32) * 5/9 + 273.15;
        default:
            return NaN;
    }
}

function convertKelvin(temperature, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return temperature - 273.15;
        case 'fahrenheit':
            return (temperature - 273.15) * 9/5 + 32;
        case 'kelvin':
            return temperature;
        default:
            return NaN;
    }
}
