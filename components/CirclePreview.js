import { AutoFocus } from 'expo-camera/build/Camera.types';
import React from 'react';
import {
    Image,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { StyleSheet } from "react-native";
import { Circle } from 'react-native-maps';
import storiesData from './StoriesData';
import Colors from '../constants/Colors';
import { render } from 'react-dom';


const SnapCircle = (props) => {
    console.log(props)
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.circlesContainer}>
            {storiesData.map((item, index) => (
                <View key={index} style={styles.circles}>
                    <TouchableWithoutFeedback onPress={() => {
    props.navigation.navigate("CirclesStory")}} 
                        style={styles.imageView}>
                    <Image source={item.image} style={styles.image}/>
                    </TouchableWithoutFeedback>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.description}>{item.title}</Text>
                    <Text style={styles.description}>{item.company}</Text>
                </View>
            ))}
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
      },
      scrollView: {

      },
      circlesContainer: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 20,
      },
    circles: {
        display: "flex",
        flexGrow: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    imageView: {
        flex: 1,

    },
    image: {
        flex: 1,
        width: 150,
        height: 150,
        resizeMode: 'contain',
        backgroundColor: Colors.snapyellow,
        borderRadius: 75,
        borderColor: '#c4c4c4',
        borderWidth: 3,
        marginBottom: 8,
    },
    name: {
        fontWeight: '800',
    },
    description: {
        color: '#a3a3a3'
    },
});

export default SnapCircle;