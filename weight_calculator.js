function convertWeight() {
    // Get user input
    var weight = parseFloat(document.getElementById('weight').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;

    // Perform the conversion
    var result = performWeightConversion(weight, fromUnit, toUnit);

    // Display the result
    document.getElementById('weightResult').innerText = weight + ' ' + fromUnit + ' = ' + result.toFixed(2) + ' ' + toUnit;
}

function performWeightConversion(weight, fromUnit, toUnit) {
    switch (fromUnit) {
        case 'grams':
            return convertGrams(weight, toUnit);
        case 'kilograms':
            return convertKilograms(weight, toUnit);
        case 'pounds':
            return convertPounds(weight, toUnit);
        case 'ounces':
            return convertOunces(weight, toUnit);
        default:
            return NaN;
    }
}

function convertGrams(weight, toUnit) {
    switch (toUnit) {
        case 'grams':
            return weight;
        case 'kilograms':
            return weight / 1000;
        case 'pounds':
            return weight * 0.00220462;
        case 'ounces':
            return weight * 0.03527396;
        default:
            return NaN;
    }
}

function convertKilograms(weight, toUnit) {
    switch (toUnit) {
        case 'grams':
            return weight * 1000;
        case 'kilograms':
            return weight;
        case 'pounds':
            return weight * 2.20462;
        case 'ounces':
            return weight * 35.27396;
        default:
            return NaN;
    }
}

function convertPounds(weight, toUnit) {
    switch (toUnit) {
        case 'grams':
            return weight * 453.592;
        case 'kilograms':
            return weight * 0.453592;
        case 'pounds':
            return weight;
        case 'ounces':
            return weight * 16;
        default:
            return NaN;
    }
}

function convertOunces(weight, toUnit) {
    switch (toUnit) {
        case 'grams':
            return weight * 28.3495;
        case 'kilograms':
            return weight * 0.0283495;
        case 'pounds':
            return weight * 0.0625;
        case 'ounces':
            return weight;
        default:
            return NaN;
    }
}
