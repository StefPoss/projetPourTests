function search(arr) {
    const found = []

    // Insert your code here
    const pattern = /to.*/ig;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].match(pattern)){
            found.push(arr[i]);
            console.log(arr[i])
        }
    };
    return found
    console.log(found)
}


const cities = ["Paris", "Tokyo", "Buenos Aires", "Toronto", "Londres", "Barcelone", "Kyoto", "Berlin", "Shanghaï", "Melbourne"]
console.log(search(cities));