import React from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';

function CapitalList({weekLeft, weekRight}) {
  return (
    <View>
      <Text style={styles.secondTitle}>Capitais</Text>
      <View>
        <View>
          <View style={styles.flexDirectionRow}>
            <Text style={styles.textMarginLeft}>Min</Text>
            <Text style={styles.textMarginLeft}>Max</Text>
          </View>

          <FlatList
            keyExtractor={(item) => item.city.id.toString()}
            data={weekLeft}
            renderItem={({item}) => (
              <View style={styles.flexDirectionRow}>
                <Text style={styles.textMarginLeft}>
                  {item.list[0].main.temp_min.toString().substring(0, 2)}º
                </Text>
                <Text style={styles.textMarginLeft}>
                  {item.list[0].main.temp_max.toString().substring(0, 2)}º
                </Text>
                <Text style={styles.textMarginLeft}>{item.city.name}</Text>
              </View>
            )}
          />

          <FlatList
            keyExtractor={(item) => item.city.id.toString()}
            data={weekRight}
            renderItem={({item}) => (
              <View style={styles.flexDirectionRow}>
                <Text style={styles.textMarginLeft}>
                  {item.list[0].main.temp_min.toString().substring(0, 2)}º
                </Text>
                <Text style={styles.textMarginLeft}>
                  {item.list[0].main.temp_max.toString().substring(0, 2)}º
                </Text>
                <Text style={styles.textMarginLeft}>{item.city.name}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 38,
    color: 'white',
  },
  secondTitle: {
    color: 'white',
    fontSize: 30,
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    padding: 6,
    color: 'white',
    width: 280,
    fontWeight: 'bold',
    borderRadius: 1,
    borderColor: 'whitesmoke',
    borderWidth: 0.6,
  },
  iconSearch: {
    backgroundColor: 'white',
    margin: 13,
  },
  flexDirectionRow: {
    flex: 1,
    width: 300,
    flexDirection: 'row',
  },
  textMarginLeft: {
    margin: 5,
    color: 'white',
  },
  containerBottom: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default CapitalList;
