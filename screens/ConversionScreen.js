import { useState } from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    View,
    ActivityIndicator,
    StatusBar,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { fetchConversionRates } from '../utils/http';
import CountryList from '../components/conversion/CountryList';
import { countriesData } from '../utils/constants';


function ConversionScreen() {
    const [error, setError] = useState();

    const [selectedCountry, setSelectedCountry] = useState(countriesData[0].code); // Default country
    const [amount, setAmount] = useState('');
    const [conversionResults, setConversionResults] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const handleConversionRates = async () => {
        if (!amount || isNaN(amount)) {
            alert('Please enter a valid amount.');
            return;
        }
        setIsFetching(true)
        try {
            const rates = await fetchConversionRates(selectedCountry);
            const results = countriesData
                .filter((country) => country.code !== selectedCountry)
                .map((country) => ({
                    country: `${country.name} (${country.code})`,
                    countrySymbol: country.symbol,
                    amount: (rates[country.code] * parseFloat(amount)).toFixed(2),
                }));
            setConversionResults(results);
        } catch (error) {
            console.error(error);
            alert('Error fetching currency data. Please try again later.');
        } finally {
            setIsFetching(false)
        }
    };


    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle="light-content" backgroundColor="#f7f7f7" /> */}
            {/* <View style={styles.toolbar}>
                <Text style={styles.toolbarTitle}>Currency Converter</Text>
            </View> */}
            <View style={styles.inputContainer}>

           
            {/* <Text style={styles.title}>Currency Converter</Text> */}
            <Text style={styles.label}>Select Country:</Text>
            <Picker
                selectedValue={selectedCountry}
                onValueChange={(itemValue) => setSelectedCountry(itemValue)}
                style={styles.picker}
            >
                {countriesData.map((item) => (
                    <Picker.Item
                        label={`${item.name} (${item.code})`}
                        key={item.code}
                        value={item.code}
                    />
                ))}
            </Picker>
            <Text style={styles.label}>Enter Amount:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
                placeholder="Enter amount in selected currency"
            />
            <TouchableOpacity style={styles.button} onPress={handleConversionRates}>
                <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>
            </View>

            {isFetching ? (
                <ActivityIndicator size="large" color="#6200EE" />
            ) : (
                <CountryList conversionResults={conversionResults} />
            )}

        </View>
    )

}

export default ConversionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultList: {
        marginTop: 20,
    },
    resultItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#e8e8e8',
        borderRadius: 8,
        marginBottom: 10,
    },
    countryText: {
        fontSize: 16,
    },
    amountText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    picker: {
        height: 50,
        width: "100%",
    },
    toolbar: {
        backgroundColor: "#6200EE",
        padding: 15,
      },
      toolbarTitle: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
      },
});

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: 'black',
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: 'black',
        marginBottom: 16,
        backgroundColor: '#fff',
    },
};