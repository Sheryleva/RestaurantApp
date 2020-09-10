
//Import packages
import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { Text, StyleSheet, View,Image, Button } from "react-native";
import { render } from 'react-dom';


//Create a function which return JSX
const DetailsScreen =  (props) => {
    // this.props.route.params.params.report.name
    console.log(props);
    console.log("yes")
    console.log(props.route.params.image[1].img1);
    return (
    <View style={styles.container}>
        <Image source = {{uri: props.route.params.image[1].img1}} style={{ flex: 1, width: 300, height: 100, margin: 30,resizeMode: "stretch"}}/>
        <Image source = {{uri: props.route.params.image[2].img2}} style={{ flex: 1, width: 300, height: 100, margin: 30 ,resizeMode: "stretch"}}/>
        <Image source = {{uri: props.route.params.image[3].img3}} style={{ flex: 1, width: 300, height: 100, margin: 30,resizeMode: "stretch"}}/>
        <Image source = {{uri: props.route.params.image[4].img4}} style={{ flex: 1, width: 300, height: 100, margin: 30 ,resizeMode: "stretch"}}/>
    </View>
    );

};


//write style related code 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }
    });

export default DetailsScreen;




