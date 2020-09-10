import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,TextInput,Platform,StatusBar,
    ScrollView,Image,Dimensions } from "react-native";
import Category from '../Custom\ Component/Category';
import getRestaurantsAPI from '../API/getRestaurantsAPI.json';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Searchbar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import Search from '../screens/Search'


const { height, width } = Dimensions.get('window')


class HomeScreen extends Component{
    constructor(props) {
        super(props)
        this.state = {search: ''};
        this.arrayholder = [];
      };
      componentDidMount() {
          console.log(this.arrayholder)
      }

      SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.arrayholder.filter(function(item) {
          //applying filter for the inserted text in search bar
          const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
    
        this.setState({
          //setting the filtered newData on datasource
          //After setting the data it will automatically re-render the view
          dataSource: newData,
          text: text,
        });
      }

      
    
    render() {
        
        return (
            
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: 'white',paddingHorizontal: 20, paddingTop:10 }}>
                    <TouchableOpacity onPress = { () => 
                            this.props.navigation.navigate(Search)
                    }
                    >
                    <SearchBar
                        round = {true}
                        searchIcon={{ size: 24 }}
                        placeholder="Type Here..."
                        platform = {Platform.OS}
                        value = {this.state}
                    />
   
                    </TouchableOpacity>
                    </View>
                      
                    <ScrollView
                        scrollEventThrottle={20}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 20, paddingBottom: 20 }}>{getRestaurantsAPI.response[0].category}</Text>
                           
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Details",{
                                        image: getRestaurantsAPI.response[0].restaurantList[0].imageUrl,
                                    })}>
                                    <Category imageUri={{ uri: getRestaurantsAPI.response[0].restaurantList[0].imageUrl[0].display}}
                                        name = {getRestaurantsAPI.response[0].restaurantList[0].name}
                                        rating = {getRestaurantsAPI.response[0].restaurantList[0].rating}
                                        reviews = {getRestaurantsAPI.response[0].restaurantList[0].review}
                                    />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Details",{
                                        image: getRestaurantsAPI.response[0].restaurantList[1].imageUrl,
                                    })}>
                                    <Category imageUri={{uri: getRestaurantsAPI.response[0].restaurantList[1].imageUrl[0].display}}
                                        name= {getRestaurantsAPI.response[0].restaurantList[1].name}
                                        rating = {getRestaurantsAPI.response[0].restaurantList[1].rating}
                                        reviews = {getRestaurantsAPI.response[0].restaurantList[1].review}
                                    />
                                    </TouchableOpacity >
                                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Details",{
                                        image: getRestaurantsAPI.response[0].restaurantList[2].imageUrl,
                                    })}>
                                    <Category imageUri={{uri: getRestaurantsAPI.response[0].restaurantList[2].imageUrl[0].display}}
                                        name= {getRestaurantsAPI.response[0].restaurantList[2].name}
                                        rating = {getRestaurantsAPI.response[0].restaurantList[2].rating}
                                        reviews = {getRestaurantsAPI.response[0].restaurantList[2].review}
                                    />
                                    </TouchableOpacity>
                                </ScrollView>
                                
                            
                            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 20, paddingBottom: 20  }}>{getRestaurantsAPI.response[1].category}</Text>
                            <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Details",{
                                        image: getRestaurantsAPI.response[1].restaurantList[0].imageUrl,
                                    })}>
                                    <Category imageUri={{ uri: getRestaurantsAPI.response[1].restaurantList[0].imageUrl[0].display}}
                                        name= {getRestaurantsAPI.response[1].restaurantList[0].name}
                                        rating = {getRestaurantsAPI.response[1].restaurantList[0].rating}
                                        reviews = {getRestaurantsAPI.response[1].restaurantList[0].review}
                                    />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Details",{
                                        image: getRestaurantsAPI.response[1].restaurantList[1].imageUrl,
                                    })}>
                                    <Category imageUri={{uri: getRestaurantsAPI.response[1].restaurantList[1].imageUrl[0].display}}
                                        name= {getRestaurantsAPI.response[1].restaurantList[1].name}
                                        rating = {getRestaurantsAPI.response[1].restaurantList[1].rating}
                                        reviews = {getRestaurantsAPI.response[1].restaurantList[1].review}
                                    />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Details",{
                                        image: getRestaurantsAPI.response[1].restaurantList[2].imageUrl,
                                    })}>
                                    <Category imageUri={{uri: getRestaurantsAPI.response[1].restaurantList[2].imageUrl[0].display}}
                                        name= {getRestaurantsAPI.response[1].restaurantList[2].name}
                                        rating = {getRestaurantsAPI.response[1].restaurantList[2].rating}
                                        reviews = {getRestaurantsAPI.response[1].restaurantList[2].review}
                                    />
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 20, paddingBottom: 20  }}>{getRestaurantsAPI.response[2].category}</Text>
                            <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Details",{
                                        image: getRestaurantsAPI.response[2].restaurantList[0].imageUrl,
                                    })}>
                                    <Category imageUri={{ uri: getRestaurantsAPI.response[2].restaurantList[0].imageUrl[0].display}}
                                        name= {getRestaurantsAPI.response[2].restaurantList[0].name}
                                        rating = {getRestaurantsAPI.response[2].restaurantList[0].rating}
                                        reviews = {getRestaurantsAPI.response[2].restaurantList[0].review}
                                    />
                                    </TouchableOpacity >
                                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Details",{
                                        image: getRestaurantsAPI.response[2].restaurantList[1].imageUrl,
                                    })}>
                                    <Category imageUri={{uri: getRestaurantsAPI.response[2].restaurantList[1].imageUrl[0].display}}
                                        name= {getRestaurantsAPI.response[2].restaurantList[1].name}
                                        rating = {getRestaurantsAPI.response[2].restaurantList[1].rating}
                                        reviews = {getRestaurantsAPI.response[2].restaurantList[1].review}
                                    />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress= {() => this.props.navigation.navigate("Details",{
                                        image: getRestaurantsAPI.response[2].restaurantList[2].imageUrl,
                                    })}>
                                    <Category imageUri={{uri: getRestaurantsAPI.response[2].restaurantList[2].imageUrl[0].display}}
                                        name= {getRestaurantsAPI.response[2].restaurantList[2].name}
                                        rating = {getRestaurantsAPI.response[2].restaurantList[2].rating}
                                        reviews = {getRestaurantsAPI.response[2].restaurantList[2].review}
                                    />
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                            
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

