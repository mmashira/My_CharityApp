import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const DonationCategories = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.category}>Disaster</Text>
        <Text style={styles.category}>NGO</Text>
        <Text style={styles.category}>Random</Text>
      </View>
    );
  };
  import React, {Component} from 'react';


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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
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
