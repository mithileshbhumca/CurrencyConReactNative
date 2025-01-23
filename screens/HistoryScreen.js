import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import HistroyList from "../components/histroy/HistroyList";
import { fetchData } from "../utils/database";

function HistoryScreen() {
    const [history, setHistory] = useState([]);
    const isFocused = useIsFocused(); // Tracks if the screen is currently focused

    useEffect(() => {
        const loadHistory = async () => {
            const data = await fetchData();
            setHistory(data);
        };
        if (isFocused) {
            loadHistory();  // Fetch data only when the screen is focused
            console.log("loadHistroy", history)
        }
    }, [isFocused]); //// Runs the effect whenever the screen focus state changes

    let content = <Text style={styles.infoText}>No history found.</Text>;

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
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 32,
    },
}
);