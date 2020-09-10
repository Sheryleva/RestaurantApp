import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Platform, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import getRestaurantsAPI from '../API/getRestaurantsAPI.json';

var a=0,b=0;
 
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: '', a :0,b: 0, };
    this.arrayholder = [];
  }
  componentDidMount() {
    return fetch('https://run.mocky.io/v3/0ae08828-66b9-4702-ac91-a32895e55aa7')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  variables() {
    for (var i=0; i < 3; i++) {
      for (var j=2; j <= 0; j--) {
        if 
        (getRestaurantsAPI.response[i].restaurantList[j].name == item.name) {
          this.setState (a=i, b=j)
          console.log(a,b)
        }
      }
      
    }
    
  }
  
  
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search:text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          round
          platform = {Platform.OS}
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          />
          <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <Button style={styles.textStyle} title = {item.name}
            val = {this.variables()}
            
            onPress = {() => this.props.navigation.navigate("Details",{
              
              image: getRestaurantsAPI.response[a].restaurantList[b].imageUrl
          })}/>
            
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
          
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'white',
    marginTop: Platform.OS == 'ios'? 10 : 0
  },
  textStyle: {
    padding: 10,
  },
});