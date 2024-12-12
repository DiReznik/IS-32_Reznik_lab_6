const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

const today = new Date();

const upcomingCities = Object.keys(concerts).filter(city => {
    return concerts[city] > today; 
});

upcomingCities.sort((cityA, cityB) => {
    return concerts[cityA] - concerts[cityB]; 
});

console.log(upcomingCities); 