import { FlatList, StyleSheet } from "react-native";
import CountryCell from "./CountryCell";

function renderItem(itemData) {
    return (
        <CountryCell item={itemData.item} />
    );
}

function CountryList({ conversionResults }) {
    return (
        <FlatList
            data={conversionResults}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            style={styles.resultList}
        />
    )

}

export default CountryList;



const styles = StyleSheet.create({
    resultList: {
        marginTop: 20,
    },
})