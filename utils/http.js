import axios from 'axios';
import { API_BASE_URL } from './constants';

export const fetchConversionRates = async (baseCurrency) => {
  try {
    const response = await axios.get(
     `${API_BASE_URL}${baseCurrency}`
    );

    if (response.data.result === "success"){
      return response.data.conversion_rates;
    } else {
      throw new Error("Failed to fetch exchange rates.");
    }
  } catch (error) {
    console.error('Error fetching conversion rates:', error);
    throw new Error('Unable to fetch conversion rates.');
  }
};