//Task 1: Using forEach()
let citiesArr = ["Los Angeles", "San Francisco", "Austin", "Kansas city", "Chicago"];
//Below code iterates over each city in the citiesArr and convert the city names to uppercase and logs the results.
let upperCities = citiesArr.forEach(city =>  {
    console.log(city.toUpperCase())
});
//OUTPUT
//LOS ANGELES
//SAN FRANCISCO
//AUSTIN
//KANSAS CITY
//CHICAGO

//Task 2: Transforming with map()
let numbers = [1, 2, 3, 4, 5];
let squaresArr = numbers.map(number => number * number);
//Below code calculates the square of the every number in the numbers array and logs the results.
console.log("Squares:", squaresArr);

//OUTPUT Squares: [ 1, 4, 9, 16, 25 ]

//Task 3: Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];
//Below code filters the data that meets the condition "score>=80" and store the results in highScores array.
let highScores = scores.filter(score => score >= 80);
console.log("Scores greater than or equal to 80:", highScores);

//output Scores greater than or equal to 80: [ 85, 90, 100 ]

//Task 4: Finding with find() and findIndex()
let favoriteFoods = ["Rice", "Pizza", "Pasta", "Noodles", "Sandwich","Pancake"];
let firstFood = favoriteFoods.find(favoriteFood => favoriteFood.length > 4);
console.log("The first food with more than 4 letters is ", firstFood);
let findIndex = favoriteFoods.findIndex(favoriteFood => favoriteFood.length > 4);
console.log("The index of", firstFood, "is ", findIndex);

//output 
//The first food with more than 4 letters is  Pizza
//The index of Pizza is  1
