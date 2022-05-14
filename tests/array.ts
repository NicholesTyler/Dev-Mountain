let firstList =  [];
let secondList: string  = ["thing", "thing2", "thing3",];
firstList.push(0);
firstList.push(1);
firstList.push(3);

console.log("This first lis is:" firstList);

let pieNames: Array<string> = ["Apple", "Peach", "Cherry"];
for (let i = 0; i < pieNames.length; i++) {
    console.log(`I love ${pieNames[i]} Pie!`);
}

let myNum = -12;
do {
    console.log(myNum);
    myNum = myNum / 2;
} while (myNum > 1);
console.log(`Exited when myNum was ${myNum}`);