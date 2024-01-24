function convertCurrency() {
    // Get user input
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Perform the conversion (multiply by exchange rate)
    var exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    var result = amount * exchangeRate;

    // Display the result
    document.getElementById('result').innerText = amount + ' ' + fromCurrency + ' = ' + result.toFixed(2) + ' ' + toCurrency;
}

// Function to get exchange rates (replace with actual API call or predefined rates)
function getExchangeRate(fromCurrency, toCurrency) {
    // Add your exchange rate logic or API call here
    // For simplicity, let's assume a fixed rate for illustration purposes
    // Replace this with the actual rates or API call
    var fixedRates = {
        'myr': { 'sgd': 0.28, 'usd': 0.21, 'idr': 3317.98 },
        'sgd': { 'myr': 3.54, 'usd': 0.75, 'idr': 11736.22 },
        'usd': { 'myr': 4.73, 'sgd': 1.34, 'idr': 15704.00 },
        'idr': { 'myr': 0.00030, 'sgd': 0.000085, 'usd': 0.000064 }
    };

    return fixedRates[fromCurrency][toCurrency];
}
