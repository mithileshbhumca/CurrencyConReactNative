import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";


function HistroyCell({ item }) {
    const navigation = useNavigation();

    function histroyPressHandler() {
        navigation.navigate('Conversion', {
          amount: item.amount,
          countryCode: item.code
        });
      }
    

    return (
        <Pressable
            onPress={histroyPressHandler}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.item}>
                <Text style={styles.text}>
                    {item.countrySymbol} {item.amount} - {item.country}
                </Text>
            </View>
        </Pressable>

    );
}


export default HistroyCell;

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    text: { fontSize: 16 },

    pressed: {
        opacity: 0.75,
      },
})