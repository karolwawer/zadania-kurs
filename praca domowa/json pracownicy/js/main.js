let akademia108 = {
    "pracownicy": [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }]
};

console.log(akademia108.pracownicy);

akademia108.pracownicy.forEach(function (element, index) {
    
    console.log("Pod indeksem: " + index, "znajduję się pracownik - " + element.firstName, element.lastName);
});