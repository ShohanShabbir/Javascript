

function kilometerToMeter(kilometer=0){

    if ( kilometer<= 0){

        console.log("Your input is not right. It must be above than 0");

    }
    else{
        var meter = kilometer*1000;
        return meter;
    }
}
var lengthInMeter = kilometerToMeter(2.5);
console.log(lengthInMeter);


function budgetCalculator(watch=0, phone=0, laptop=0){

    if ( watch< 0){

        console.log("Number of Watches must be above than 0");

    }
    if ( phone< 0){

        console.log("Number of phones must be above than 0");

    }
    if ( laptop< 0){

        console.log("Number of laptops must be above than 0");

    }
    else{

        var watchPrice = watch*50;
        var phonePrice = phone*100;
        var laptopPrice = laptop*500;
        var totalPrice = watchPrice+phonePrice+laptopPrice;
        return totalPrice;
    }

}
var totalBudget = budgetCalculator(2,3,2);
console.log(totalBudget);



function hotelCost(daysInHotel = 0) {
    if (daysInHotel <= 0){
       console.log("Number Of Days In Hotel Must Be Greater Than 0"); 
    }
    else if (daysInHotel <= 10) {
        return daysInHotel * 100;
    } 
    else if (daysInHotel <= 20) {
        return 10 * 100 + (daysInHotel - 10) * 80;
    } 
    else {
        var totalCost = 10 * 100 + 10 * 80 + (daysInHotel - 20) * 50;
        return totalCost;
    }
}
console.log(hotelCost(25));



function megaFriend(arr) {
  var word = "";
  for (var i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

console.log(megaFriend(['nur', 'nahid', 'shohan', 'Monjurul', 'Payek', 'Nahian']));

