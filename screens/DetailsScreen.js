
//Import packages
import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { Text, StyleSheet, View,Image, Button } from "react-native";
import { render } from 'react-dom';


//Create a function which return JSX
const DetailsScreen =  (props) => {
    // this.props.route.params.params.report.name
    console.log(props)
    return (
    <View style={styles.container}>
        
        <Button style={{fontSize: 25,fontWeight: "bold"}} title = {props.navigation.getParam("title")} />
        <Button title = {props.navigation.getParam("releaseyear")} style={{width: '100%', height:'100%',flex: 1, resizeMode: "stretch"}}/>
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




