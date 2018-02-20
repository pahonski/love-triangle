/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var counter = 0;

    preferences.forEach(function (item, number, arr) {
        var pack = [];
        pack.push(item);
        var flag = item;
        if (item !== arr[item - 1]) {
            pack.push(arr[item - 1]);
            pack.push(arr[pack[pack.length-1]-1]);
            pack.push(arr[pack[pack.length-1]-1]);
            if (pack[pack.length-1] === flag) {
                for (var i = 0; i < pack.length; i ++) {
                    preferences[pack[i]-1] = undefined;
                }
                if (pack.every(function (t) {
                        return t !== undefined;
                    })) {
                    console.log('Готовые ловеры');
                    counter += 1;
                }
                console.log(pack);
            }
        } else {return}

    });

    return counter;
};
