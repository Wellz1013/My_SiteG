var unsortedList = [12, 65, 8, 85, 28, 77, 15, 53, 4, 38];

function numberFinder(num, list){
    var result = "Not in List";

    list.forEach(function(item, position){
        if(item === num) {
            result = position;
        }
    });

    return result;
}

console.log(numberFinder(65, unsortedList));
