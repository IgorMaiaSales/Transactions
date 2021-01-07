const transactions = [
    {
    id: 123,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -30,
    category: "eating_out",
    time: "2019-02-15T12:34:00Z",
    },
    {
    id: 1234,
    sourceAccount: "my_account",
    targetAccount: "drugstore",
    amount: -5,
    category: "other",
    time: "2019-03-28T12:34:00Z",
    },
    {
    id: 1235,
    sourceAccount: "grocery_store",
    targetAccount: "my_account",
    amount: 40,
    category: "groceries",
    time: "2019-03-12T00:00:00Z",
    },
    {
    id: 1236,
    sourceAccount: "my_account",
    targetAccount: "grocery_store",
    amount: -10,
    category: "other",
    time: "2019-03-15T23:59:00Z",
    },
    {
    id: 1237,
    sourceAccount: "my_account",
    targetAccount: "grocery_store",
    amount: -25,
    category: "groceries",
    time: "2019-04-03T12:44:00Z",
    },
    {
    id: 1238,
    sourceAccount: "my_account",
    targetAccount: "grocery_store",
    amount: -12,
    category: "groceries",
    time: "2019-03-16T11:34:00Z",
    },
    ];

const balance: number = getBalanceByCategoryInPeriod(
    transactions,
    "groceries",
    new Date("2019-03-01"),
    new Date("2019-03-31")
)

console.log(balance);

function getBalanceByCategoryInPeriod(transactions, category, periodStart, periodEnd) {
    
    var balance = 0   

    for (let i = 0; i < transactions.length; i++){
        
        let date = new Date(transactions[i].time)

        if(transactions[i].category == category && date >= periodStart && date < periodEnd)
            balance += transactions[i].amount
    }

    return balance
}