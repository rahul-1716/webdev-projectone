class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    shift(){
        const firstItem = this.data[0];
        for(let i = 0; i < this.length -1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1]
        this.length--;
        return firstItem;
    }
    deleteByIndex(index){
        for(let i = index ; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    get(item){
        return this.data[item];
    }
}
// ===================================================

//String reversals

const Reverse = str => str.split("").reverse().join("");
console.log(Reverse("HELLO")); // OLLEH

//palindrome

const palindrome = str => str.split("").reverse().join("") === str;
console.log(palindrome('lolol'))

function revPal(str){
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] != str[right])return false
        left++;
        right--;
    }
    return true;
}
console.log(revPal('lolol'));

//reverse Integer
function revInt(num){
    const reversed = num.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(num);
}
console.log(revInt(6969));


//Capitalize each word

const caps = (str) => {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
};

console.log(caps("hello world"));


//FizzBuzz

function fizzBuzz(n){
    for (let i = 1; i <= n ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(12);


//MaxProfit

const maxProfit = (prices) => {
    //Assume minimum price
    let minPrice = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++){
        const currentPrice = prices[i];
        minPrice = Math.min(minPrice, currentPrice);
        profit = Math.max(profit, currentPrice - minPrice)
    }
    return profit;
}
const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit: ", profit);


//Array Chunk
const chunk = (array, size) => {
    const chunked = [];
    let idx = 0;

    while(idx < array.length){
        const chunk = array.slice(idx, idx + size);
        console.log(chunk);
        chunked.push(chunk)
        idx += size;
    }
    return chunked;
}

console.log(chunk([1,2,3,4,5,6,7,8], 3));

//TwoSum O(n^2)

const twoSum = (arr, target) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i,j]
            }
        }
    }
    return [];
}

console.log(twoSum([2,7,11,15], 9));

