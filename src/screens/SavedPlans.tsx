import React from 'react';
import { StyleSheet, Dimensions, Text, Image, View, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');


const SavedPlans = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Saved Trip Plans</Text>
      <View style={styles.card}>
        <Image
            style={styles.img}
            source={require('../assets/images/Rectangle1.png')}
            />
        <View style={styles.innerContainer}>
            <Text style={styles.cardText}>Australia</Text>
            <Text style={styles.cardText2}>Royal Air Maroc </Text>
            <Text style={styles.cardText2}>Brunswick Hotel</Text>
            <Text style={styles.cardText2}>2 mini tours</Text>
            <Text style={styles.cardText2}>Two items Packed</Text>
        </View>
        <View style={styles.innerContainer2}>
            <Image
            style={styles.icon}
            source={require('../assets/images/heart.png')}
            />
            <Text style={styles.cardText3}>12% completed</Text>
        </View>

      </View>

      <View style={styles.card}>
        <Image
            style={styles.img}
            source={require('../assets/images/Rectangle2.png')}
            />
        <View style={styles.innerContainer}>
            <Text style={styles.cardText}>Paris</Text>
            <Text style={styles.cardText2}>Emirate</Text>
            <Text style={styles.cardText2}>Air BnB</Text>
            <Text style={styles.cardText2}>2 mini tours</Text>
            <Text style={styles.cardText2}>15 items Packed</Text>
        </View>
        <View style={styles.innerContainer2}>
            <Image
            style={styles.icon}
            source={require('../assets/images/heart.png')}
            />
            <Text style={styles.cardText3}>90% completed</Text>
        </View>

      </View>

      <View style={styles.card}>
        <Image
            style={styles.img}
            source={require('../assets/images/Rectangle3.png')}
            />
        <View style={styles.innerContainer}>
            <Text style={styles.cardText}>Seychelles</Text>
            <Text style={styles.cardText2}>Qatar Airways</Text>
            <Text style={styles.cardText2}>Bayveiw Seychelles</Text>
            <Text style={styles.cardText2}>Sun bathing & Scuba.....</Text>
            <Text style={styles.cardText2}>All items Packed</Text>
        </View>
        <View style={styles.innerContainer2}>
            <Image
            style={styles.icon}
            source={require('../assets/images/heartfilled.png')}
            />
            <Text style={styles.cardText3}>Done</Text>
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

    cardText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 16,
    },

    cardText2: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 16,
    },

    cardText3: {
        color: '#FFFFFF',
        fontSize: 6,
        fontWeight: '400',
        lineHeight: 16,
    },

    card: {
        flexDirection: 'row',
        backgroundColor: '#189AB4',
        borderRadius: 5,
        height: 156,
        width:  width - 56,
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 39,
        justifyContent: 'space-between',
    },

    img: {
        width: 120,
        height: 118,
    },

    icon: {
        width: 24,
        height: 21,
    },

    innerContainer: {
        flexDirection: 'column',
    },

    innerContainer2: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
})

export default SavedPlans