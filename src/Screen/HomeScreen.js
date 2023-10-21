import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import yelp from "../api/yelp";
import { Ionicons } from "@expo/vector-icons";
import Resultlist from "../component/Resultlist";
const HomeScreen = ({navigation}) => {
    const [term, setTerm] = useState("");
    const [result, setResult] = useState([]);
    const searchApi = async () => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term,
                    location: "san jose",
                },
            });
            setResult(response.data.businesses)
            console.log(result);
        }
        catch (error) {
            console.log("Something went wrong!!");
        }
    };

    const filterResultByPrice = (price) =>{
        return result.filter((result)=>{
            return result.price === price;
        })
    }
    useEffect(()=>{
        searchApi("pasta");
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.inputcontainer}>
                <Ionicons name="search-outline" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="useless input"
                    onChangeText={(newterm) => {
                        setTerm(newterm)
                    }}
                    value={term}
                    onEndEditing={searchApi}
                />
            </View>
            <Text>SearchTerm : {term}. Found {result.length} </Text>
            <Resultlist title="Cheap" result={filterResultByPrice("$")} navigation={navigation}/>
            <Resultlist title="Moderate" result={filterResultByPrice("$$")} navigation={navigation}/>
            <Resultlist title="Expensive" result={filterResultByPrice("$$$")} navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF1E4",
        padding: 10,
        paddingHorizontal: 15
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    icon: {
        fontSize: 35,
        marginHorizontal: 15,
        alignSelf: "center"
    },
    inputcontainer: {
        flexDirection: "row",
        backgroundColor: "#CEDEBD",
        height: 50,
        borderRadius: 20,
        marginTop: 10
    },
    serchText: {

    },
});
export default HomeScreen;
