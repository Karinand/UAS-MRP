const data = [
    { year: 2010, sales: 5200 },
    { year: 2011, sales: 4900 },
    { year: 2012, sales: 6400 },
    { year: 2013, sales: 4500 },
    { year: 2014, sales: 6200 },
    { year: 2015, sales: 5500 },
    { year: 2016, sales: 4400 },
    { year: 2017, sales: 5700 },
    { year: 2018, sales: 6100 },
    { year: 2019, sales: 5400 },
    { year: 2020, sales: 5900 },
];

let forecastYear = 4;
let sma = [];

// Calculate SMA
for (let i = 4; i < data.length; i++) {
    sum = 0;
    for (let j = 0; j < forecastYear; j++) {
        sum += data[i - j - 1].sales;
    }

    sma.push({ year: data[i].year, forecast: sum / 4 });
}

let totalCountSMA = sma.length;

// Calculate Absolute Error dan Square Error
let totalAbsoluteError = 0
let tempAbsoluteError = 0
let totalSquareError = 0;
let tempSquareError = 0;

for (let i = 0; i < totalCountSMA; i++) {
    let actualSales = data[i + 4].sales;
    let forecast = sma[i].forecast;

    totalAbsoluteError += Math.abs(actualSales - forecast);
    tempAbsoluteError = Math.abs(actualSales - forecast);

    totalSquareError += Math.pow(tempAbsoluteError, 2);
    tempSquareError = Math.pow(tempAbsoluteError, 2);

    sma[i].absoluteError = tempAbsoluteError;
    sma[i].squareError = tempSquareError;
};

// Calculate Mean Absolute Error dan Mean Square Error
let meanAbsoluteError = totalAbsoluteError / totalCountSMA;
let meanSquareError = totalSquareError / totalCountSMA;

console.log('forecast SMA');
console.log(sma);

console.log('Total Absolute Error: ' + totalAbsoluteError);
console.log('Total Square Error: ' + totalSquareError);

console.log('Mean Absolute Error: ' + meanAbsoluteError);
console.log('Mean Square Error: ' + meanSquareError);