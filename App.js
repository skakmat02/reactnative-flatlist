  
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  StatusBar,
  ListView,              // deprecated 
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const data = [
  {
    id: 'UPN Jatim', 
    title: 'Universitas'
  }, 
  {
    id: 'Puskom', 
    title: 'UPT'
  }, 
  {
    id: 'SBY', 
    title: 'Kota'
  }, 
  {
    id: 'NGAWI', 
    title: 'Kabupaten'
  }
];

export default class App extends Component {

  renderSeparator = () => {
    return(
      <View style={{ 
        height:0.8, 
        width: "100%", 
        backgroundColor: "#000000" }} />
    );
  };

  // jika dipilih salah satu item 
  getListViewItem = (item) => {
    Alert.alert(item.id,item.title);
  }
  
    render() {
      return(
        <View style={styles.container}>
          <Text style={styles.item2}>Flat List</Text>
          {<FlatList data={data} 
            renderItem={({ item }) => 
            <Text style={styles.item} 
                onPress={this.getListViewItem.bind(this, item)}>
                {item.id} 
              </Text>} ItemSeparatorComponent={this.renderSeparator} /> } 

        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  item: {
    padding: 10, 
    fontSize: 18, 
    height: 44,
  },
  item2: {
    padding: 10, 
    fontSize: 18, 
    height: 44,
    backgroundColor:'grey',
    color:'white'
  },
})

function Item({ title }) {
  return(
    <View>
      <Text>{title}</Text>
    </View>
  );
}
