
// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

var number = function(busStops){
    result = 0;
    busStops.forEach((stop)=>{
        result += stop[0] - stop[1]
        })
    return result
}


//   number([[10,0],[3,5],[5,8]])
//  should equal 5