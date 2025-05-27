// let price: number = 8;
// price = '15';
// console.log(number);

function displayFriends(friends: string[]) {
  for (let i = friends.length - 1; i >= 0; i--) {
    console.log(friends[i]);
  }
}

const friend1: string = 'John';
const friend2: string = 'Jane';
displayFriends([friend1, friend2])