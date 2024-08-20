import inquirer from 'inquirer';
const Currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    { name: "TO",
        message: "Enter To Currency",
        type: 'list',
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    {
        name: "Amount",
        message: "Enter Your Amount",
        type: "number"
    },
]);
let FromAmount = Currency[user_answer.from];
let ToAmount = Currency[user_answer.TO];
let Amount = user_answer.Amount;
let baseAmount = Amount / FromAmount;
let ConvertedAmount = baseAmount * ToAmount;
console.log(ConvertedAmount);
