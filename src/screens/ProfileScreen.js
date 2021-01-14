import React from 'react';
import {View, Text , Button, StyleSheet, StatusBar} from 'react-native';

const HomeScreen  = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Profile Screen </Text>
        <Button 
        title="Go to details screen"
        onPress={() => alert("Profile Screen")}
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