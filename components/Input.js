import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function NewEntryForm() {

  return (
    <View>
      <View style={styles.screen}>
        <TextInput placeholder="Entry Title" style={styles.inputContainer} onChangeText={fieldEntryHandler} value={enteredField} />
        <Button title="Submit" onPress={addEntryHandler} />
      </View>
        <FlatList 
        keyExtractor={(item, index) => item.key} 
        data={titles} 
        renderItem={itemData => (<View style={styles.listItem}>
            <Text 
            key={itemData.item.value}>{title}
            </Text>
          </View>)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
  }
});



