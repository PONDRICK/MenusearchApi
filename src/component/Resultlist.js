import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Foundation } from '@expo/vector-icons';
import ShowScreen from "../Screen/ShowScreen";

const Resultlist = ({ title, result }) => {
    const navigation = useNavigation();
    if(!result.length){
        return null;
    }
    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate("Show",{id:item.id})}>
                            <View>
                                <Image style={style.img} source={{ uri: item.image_url }} />
                                <Text style={style.name}>{item.name}</Text>
                                <Text>
                                    <Foundation name="star" size={20} color="green" />
                                    {item.rating} ({item.review_count}reviews)
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    img: {
        width: 230,
        height: 120,
        borderRadius: 5,
        marginRight: 10,
    },
    name: {
        fontWeight: "bold"
    }
});

export default Resultlist;