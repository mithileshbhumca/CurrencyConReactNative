import { FlatList, StyleSheet, Text, View } from "react-native";
import CountryList from "../components/conversion/CountryList";
import { useEffect, useState } from "react";
import { countriesHistroy } from "../utils/constants";
import { useIsFocused } from "@react-navigation/native";
import HistroyList from "../components/histroy/HistroyList";
import { fetchData } from "../utils/database";


function HistoryScreen() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const loadHistory = async () => {
            const data = await fetchData();
            setHistory(data);
        };
        loadHistory();
        console.log("loadHistroy", history)

    }, []);

    let content = <Text style={styles.infoText}>No History found</Text>;

    if (history.length > 0) {
        content = <HistroyList item={history} />;
    }

    return (
        <View style={styles.container}>
            {content}
        </View>
    )
}

export default HistoryScreen;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f7f7f7',
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    },
}
);