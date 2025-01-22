
const countriesData = [
    { code: "USD", name: "United States", symbol: "$" },
    { code: "EUR", name: "European Union", symbol: "€" },
    { code: "GBP", name: "United Kingdom", symbol: "£" },
    { code: "JPY", name: "Japan", symbol: "¥" },
    { code: "INR", name: "India", symbol: "₹" },
    { code: "AUD", name: "Australia", symbol: "A$" },
    { code: "CAD", name: "Canada", symbol: "C$" },
    { code: "CHF", name: "Switzerland", symbol: "CHF" },
    { code: "CNY", name: "China", symbol: "¥" },
    { code: "SEK", name: "Sweden", symbol: "kr" },
    { code: "NZD", name: "New Zealand", symbol: "NZ$" },
];

const countriesHistroy = [
    { amount: 1000, country: "United States", countrySymbol: "$", code: "USD", },
    { amount: 1000, country: "Japan", countrySymbol: "¥", code: "JPY" },
    { amount: 1000, country: "India", countrySymbol: "₹", code: "INR" },
];
const API_BASE_URL = "https://v6.exchangerate-api.com/v6/16f4781b3b5debc56ae9f2ba/latest/";

export { countriesData, countriesHistroy, API_BASE_URL };
