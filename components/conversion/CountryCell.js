import { StyleSheet, Text, View } from "react-native";
import currencySymbols from "../../utils/constants";


function CountryCell({ item }) {
    return (
        <View style={styles.resultItem}>
            <Text style={styles.countryText}>{item.country}</Text>
            <Text style={styles.amountText}>{item.countrySymbol} {item.amount}</Text>
        </View>
    )
}

export default CountryCell;

const styles = StyleSheet.create({
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
})