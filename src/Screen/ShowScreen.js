import React,{useState,useEffect} from "react";
import { View,Text, StyleSheet,Image,FlatList} from "react-native";
import yelp from "../api/yelp";
const ShowScreen = ({route}) =>{
    const [result, setResult] = useState(null);
    const {id} =route.params;
    const getDetail = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };
    useEffect(()=>{
        getDetail(id);
    },[]);
    if(!result){
        return null;
    }
    return(
        <View style={styles.container}>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return(
                        <Image style={styles.img} source={{uri:item}}/>
                    );
                }}
            />
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
    img: {
        width: 230,
        height: 120,
        borderRadius: 5,
        marginRight: 10,
    },
});
export default ShowScreen;