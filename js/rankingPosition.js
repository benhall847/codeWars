// In some ranking people collects points. The challenge is sort by 
// points and calulate position for every person.But remember if 
// two or more persons have same number of points, they should
// have same position number and sorted by name (name is unique).




function ranking(people) {
    function compare (a,b){
        if (a.points < b.points){
            return 1;
        };
        if (a.points > b.points){
            return -1;
        };if (a.points === b.points){
            if(a.name > b.name){
                return 1;
            }
            if (a.name < b.name){
                return -1;
            };
        };
    };
    let i = 0, counter = 1, tie = 0;
    people = people.sort(compare);
    people.forEach(function (object){
        if (people[i + 1]){
            if ((people[i].points) === (people[i + 1].points)){
                object["position"] = (counter - tie);
                counter++;
                tie++;
            }else{
                object["position"] = (counter - tie);
                counter++
                tie = 0
            };
        }else{
            object["position"] = counter - tie;
            counter++
        };
        i++
    });
    return people;
};

// const myList = [
//     {
//         name: "John",
//         points: 100,
//     },
//     {
//         name: "Bob",
//         points: 130,
//     },
//     {
//         name: "Mary",
//         points: 120,
//     },
//     {
//         name: "Kate",
//         points: 120,
//     },
// ];

// console.log(ranking(myList))