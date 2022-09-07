import React from 'react';
import { StyleSheet, Dimensions, Text, Image, View, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const NoNotifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Notifications</Text>

      <View style={styles.card}>
        
        <View style={styles.innerContainer}>
            <View style={styles.innerContainer3}>
            <Text style={styles.cardText}>No New Notifications</Text>
            </View>
            <TouchableOpacity>
                <Image
                    style={styles.img2}
                    source={require('../assets/images/cancel.png')}/>
            </TouchableOpacity>
            
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        paddingVertical: 39,
        paddingHorizontal: 28,
    },

    topText: {
        color: '#05445E',
        fontSize: 25,
        fontWeight: '400',
        lineHeight: 25,
        marginBottom: 38,
    },

    card: {
        flexDirection: 'column',
        backgroundColor: '#189AB4',
        borderRadius: 5,
        height: 138,
        width:  width - 56,
        paddingHorizontal: 22,
        paddingVertical: 23,
        marginBottom: 19,
    },

    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    img:  {
        width: 15,
        height: 15,
    },

    img2:  {
        width: 11,
        height: 11,
    },

    innerContainer2: {
        flexDirection: 'row',
    }, 

    innerContainer3: {
        flexDirection: 'row',
    }, 

    cardText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '500',
        lineHeight: 16,
        marginRight: 13,
    },


})

export default NoNotifications