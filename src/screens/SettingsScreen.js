import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SettingsScreen = () => { 
    return ( 
        <View style={styles.container}> 
            <Text>Settings screen </Text>
        <Button 
        title= "Click here"
        onPress={() => alert( " button Clicked")}
        />
        </View>
    );
};

export default SettingsScreen; 

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'

    },
});