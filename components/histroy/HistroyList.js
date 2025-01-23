import { FlatList, StyleSheet, Text, View } from "react-native";
import HistroyCell from "./HistroyCell";


function renderHistoryItem(itemData) {
    return (
        <HistroyCell item={itemData.item} />
    );
}
function HistroyList({ item }) {
    return (
        <FlatList
            data={item}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderHistoryItem}
        />
    )

}

export default HistroyList;



