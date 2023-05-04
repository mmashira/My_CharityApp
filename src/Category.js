import React , {Component}from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TextInput,StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme, Image } from '@rneui/themed';



const DonationCategories = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.category}>Disaster</Text>
        <Text style={styles.category}>NGO</Text>
        <Text style={styles.category}>Random</Text>
      </View>
    )};
  
  
  handleCategory = () => {
    props.navigation.navigate('DonationForm')
  };

const DATA = [
  {
    title: 'Disaster',
    data: ['Fire', 'Earthquake', 'flood'],
  },
  {
    title: 'NGO',
    data: ['International', 'Non-Governmental', 'ENGO'],
  },
  {
    title: 'Random',
    data: ['Old-age home', 'Charity', 'Orphanage',],
  },
 
];

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          />
          <Button
          title="Enter"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: 'rgba(0, 87, 146, 1)',
            borderRadius: 15,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 50,
            height: 50,
            width: 200,
            marginVertical: 10,
          }}
          onPress={() => props.navigation.navigate("Category")}
          
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#EDF9FC',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
