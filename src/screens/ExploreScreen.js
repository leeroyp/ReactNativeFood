import React from 'react';
import {View, Text , Button, StyleSheet, StatusBar} from 'react-native';

const HomeScreen  = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Explore Screen </Text>
        <Button 
        title="Go to details screen"
        onPress={() => alert("Details")}
        />
      </View>
    );
  };

  export default HomeScreen;

  const styles= StyleSheet.create ({
      container: {
          flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }

  })