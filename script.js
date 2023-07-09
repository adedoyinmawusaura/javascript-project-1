const language = 'Spanish';

switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('Most number of native speakers');
        break;
    case 'Spanish':
        console.log('Second place in number of native speakers');
        break;
    case 'English':
            console.log('Third place in number of native speakers');
            break;
    case 'Hindi':
           console.log('Fourth place in number of native speakers');
                break;
    case 'Arabic':
        console.log('Fifth place in numbeer of native speakers')
        break;
    default:
        console,log('Great Language Too')
        break;    
}

// Test 2

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 +118) / 4;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
}else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins = scoreKoalas) {
    console.log("Both win the trophy");
}

// Bonus 1 & 2

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 +118) / 4;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 300) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >- 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
} else {
    console.log("No one win the trophy")
}


// Test 3

const bill = 275;
const tip = bill >= 50 &&  bill <= 300 ? bill *0.15: bill *0.2;
const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`);


// Test 4

function describeCountry(country, population,  capitalCity) {
    return `${country} has ${population} million people nma its capital city is ${capitalCity}`;
}

const firstCountry = describeCountry("Finland", 6, "Helsinki.");
const secondCountry = describeCountry("Nigeria", 213, "Abuja.");
const thirdCountry = describeCountry("Canada", 38, "Ottawa.");

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);


// Test 5

function percentageOfWorld1(population) {
    return (population / 7900000) * 100;
}
const chinaPercentage1 = percentageOfWorld1(1441000000);
const iraqPercentage1 = percentageOfWorld1(435000000);
const ghanaPercentage1 = percentageOfWorld1(3283000000);
console.log(
    `Percentage population of China is ${chinaPercentage1}%,`,
    `Percentage population of Iraq is ${iraqPercentage1}%,`,
    `Percentage population of Ghana is ${ghanaPercentage1}%,`,
);


const percentageOfWorld2 = function (population) {
    return (population / 7900000) * 100;
};
const chinaPercentage2 = percentageOfWorld2(1441000000);
const iraqPercentage2 = percentageOfWorld2(435000000);
const ghanaPercentage2 = percentageOfWorld2(3283000000);
console.log(
    `Percentage population of China is ${chinaPercentage2}%,`,
    `Percentage population of Iraq is ${iraqPercentage2}%,`,
    `Percentage population of Ghana is ${ghanaPercentage2}%,`,
);


const percentageOfWorld3 = (population) => (population / 7900000) * 100;
const chinaPercentage3 = percentageOfWorld1(1441000000);
const iraqPercentage3 = percentageOfWorld1(435000000);
const ghanaPercentage3 = percentageOfWorld1(3283000000);
console.log(
    `Percentage population of China is ${chinaPercentage3}%,`,
    `Percentage population of Iraq is ${iraqPercentage3}%,`,
    `Percentage population of Ghana is ${ghanaPercentage3}%,`,
);


// Test 6

const population = ["China", "India", "Ghana", "Iraq"];
console.log(population);
console.log(Boolean((population. Lenght = 4)));

const percentages = new Array(18.2, 15.3, 17.1, 22.5);