import React from 'react';
import { StyleSheet, Dimensions, Text, Image, View, TouchableOpacity, Button, Pressable, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const Notifications = () => {
  return (
    <ScrollView style={styles.container}
    contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.topText}>Notifications</Text>

      <View style={styles.card}>
        <View style={styles.innerContainer}>
            <View style={styles.innerContainer3}>
                <Text style={styles.cardText}>Flight</Text>
                <Image
                style={styles.img}
                source={require('../assets/images/Flight.png')}
                />
            </View>
            <TouchableOpacity>
                <Image
                    style={styles.img2}
                    source={require('../assets/images/cancel.png')}/>
            </TouchableOpacity>
            
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.cardText}>
            The flight to Morocco is cheaper now.
            Check Emirates and Air Maroc
            </Text>
        </View>
        
        <View style={styles.innerContainer2}>
            <Pressable>
                <View style={styles.btn1}>
                    <Text style={styles.txt}>Book Now</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.btn2}>
                    <Text style={styles.txt2}>Later</Text>
                </View>
            </Pressable>
        </View>
      </View>

      <View style={styles.card}>
        
        <View style={styles.innerContainer}>
            <View style={styles.innerContainer3}>
                <Text style={styles.cardText}>Pack Help</Text>
                <Image
                style={styles.img}
                source={require('../assets/images/Travelbox.png')}
                />
            </View>
            <TouchableOpacity>
                <Image
                    style={styles.img2}
                    source={require('../assets/images/cancel.png')}/>
            </TouchableOpacity>
            
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.cardText}>
            Well done!You have packed 15 items for you Seychelles Trip, You have 10 more items to pack.
            </Text>
        </View>
        
        <View style={styles.innerContainer2}>
            <Pressable>
                <View style={styles.btn1}>
                    <Text style={styles.txt}>Book Now</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.btn2}>
                    <Text style={styles.txt2}>Later</Text>
                </View>
            </Pressable>
        </View>
      </View>

      <View style={styles.card}>
        
        <View style={styles.innerContainer}>
            <View style={styles.innerContainer3}>
                <Text style={styles.cardText}>Weather</Text>
                <Image
                style={styles.img}
                source={require('../assets/images/Sunlight.png')}
                />
            </View>
            <TouchableOpacity>
                <Image
                    style={styles.img2}
                    source={require('../assets/images/cancel.png')}/>
            </TouchableOpacity>
            
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.cardText}>
            Have you checked the weather in seychelles for your planned trip?
            </Text>
        </View>
        
        <View style={styles.innerContainer2}>
            <Pressable>
                <View style={styles.btn1}>
                    <Text style={styles.txt}>Book Now</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.btn2}>
                    <Text style={styles.txt2}>Later</Text>
                </View>
            </Pressable>
        </View>
      </View>

      <View style={styles.card}>
        
        <View style={styles.innerContainer}>
            <View style={styles.innerContainer3}>
                <Text style={styles.cardText}>Short Stay</Text>
                <Image
                style={styles.img}
                source={require('../assets/images/Hotel.png')}
                />
            </View>
            <TouchableOpacity>
                <Image
                    style={styles.img2}
                    source={require('../assets/images/cancel.png')}/>
            </TouchableOpacity>
            
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.cardText}>
            Well done!You have packed 15 items for you Seychelles Trip, You have 10 more items to pack.
            </Text>
        </View>
        
        <View style={styles.innerContainer2}>
            <Pressable>
                <View style={styles.btn1}>
                    <Text style={styles.txt}>Book Now</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.btn2}>
                    <Text style={styles.txt2}>Later</Text>
                </View>
            </Pressable>
        </View>
      </View>
    </ScrollView>
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

    textContainer: {
        width: 193,
        marginVertical: 10,
    },

    btn1: {
        width: 66,
        height: 19,
        backgroundColor: '#FFFFFF',
        marginRight: 21,
        borderRadius: 2,
        justifyContent: 'center',
    },

    btn2: {
        width: 66,
        height: 19,
        borderRadius: 2,
        borderColor: '#D4F1F4',
        borderWidth: 2,
        justifyContent: 'center',
    },

    txt: {
        color: '#05445E',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 16,
        alignSelf: 'center',
    },

    txt2: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 16,
        alignSelf: 'center',
    },


})

export default Notifications