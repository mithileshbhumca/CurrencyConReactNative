# Currency Converter App

This is a React Native project for a Currency Converter App. The app allows users to convert a given amount from a selected base country to other currencies, maintain a history of conversions, and navigate seamlessly between a conversion screen and a history screen.

## Features

- **1. Conversion Screene**
Allows users to input an amount and select a country from a dropdown.
Converts the input amount based on the latest exchange rates fetched via the ExchangeRate API.
Displays the converted amount dynamically after clicking the "Convert" button.
Pre-fills the amount and country when navigated from the History Screen.
Automatically hides the converted amount field if pre-filled data is being used.
- ** 2. History Screen**
Displays a list of previously converted amounts, including:
Converted amount
Selected country name
Country currency symbol
Enables navigation back to the Conversion Screen with the selected history item pre-filled.
