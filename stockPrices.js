// Stock Prices
// Difficulty
// Medium

// Concepts
// Logic


// Instructions
// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:



function best(arr){
    let currentLow = arr[0]
    let maxProfit = 0

    for(let i = 0; i< arr.length; i++){
        if(arr[i] < currentLow){
            currentLow = arr[i]
        }
        let diff = arr[i] - currentLow

        if(diff > maxProfit){
            maxProfit = diff
        }
    }
    return maxProfit
}

// let max = Math.max(...arr)
// let min = Math.min(...arr)
// console.log(max, min)



// 12
// Here are some more examples with positive profit:

console.log(best([1, 2, 3, 4, 5]))
// // 4 - buy at $1, sell at $5

console.log(best([2, 3, 10, 6, 4, 8, 1]))
// // 8 - buy at $2, sell at $10

console.log(best([7, 9, 5, 6, 3, 2]))
// // 2 - buy at $7, sell at $9

console.log(best([0, 100]))
// // 100 - buy at $0, sell at $100
// If no profit is possible, return $0:

console.log(best([5, 4 , 3, 2, 1]))
// // 0

console.log(best([100]))
// // 0

console.log(best([100, 0]))
// // 0






