function calcAverageCalories(days){
  let caloriesArray = [];  
for(let i of days){
caloriesArray.push(i.calories);
}
    let sumCalories = 0;
    for (const i of caloriesArray) {
       sumCalories += i;
    }
    if(sumCalories!==0){
        return sumCalories/caloriesArray.length;
    }
    else{
        return 0;
    };
}
console.log(
    calcAverageCalories([
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 }
    ])
  ); 
  
  console.log(
    calcAverageCalories([
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 }
    ])
  ); 
  
  console.log(
    calcAverageCalories([])
  ); 