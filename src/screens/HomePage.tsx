import React from 'react';
import { StyleSheet, Dimensions, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');


const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Hi Olivia</Text>
        <Image
            style={styles.img}
            source={require('../assets/images/Ellipse.png')}
            />
      </View>
      <Text style={styles.subText}>All you need for your new trip right here.</Text>
        <View style={styles.wrapper}>
            <View style={styles.boxes}>
                <TouchableOpacity>
                    <View style={styles.innerBoxes}>
                    <Image
                        style={styles.imageBox1}
                        source={require('../assets/images/Itinerary.png')}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles.innerText}>Itinerary</Text>
            </View>
        

            <View style={styles.boxes}>
                <TouchableOpacity>
                    <View style={styles.innerBoxes}>
                    <Image
                        style={styles.imageBox2}
                        source={require('../assets/images/Flight.png')}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles.innerText}>Flights</Text>
            </View>

        
            <View style={styles.boxes}>
                <View style={styles.innerBoxes}>
                <Image
                    style={styles.imageBox3}
                    source={require('../assets/images/Travelbox.png')}
                    />
                </View>
                <Text style={styles.innerText}>Pack Help</Text>
            </View>
        </View>

        
        <View style={styles.wrapper}>
            <View style={styles.boxes}>
                <View style={styles.innerBoxes}>
                <Image
                    style={styles.imageBox4}
                    source={require('../assets/images/Vacation.png')}
                    />
                </View>
                <Text style={styles.innerText}>Leisure</Text>
            </View>

            <View style={styles.boxes}>
                <View style={styles.innerBoxes}>
                <Image
                    style={styles.imageBox5}
                    source={require('../assets/images/Hotel.png')}
                    />
                </View>
                <Text style={styles.innerText}>Short Stay</Text>
            </View>

            <View style={styles.boxes}>
                <View style={styles.innerBoxes}>
                <Image
                    style={styles.imageBox6}
                    source={require('../assets/images/Map.png')}
                    />
                </View>
                <Text style={styles.innerText}>Map</Text>
            </View>
        </View>

        <View style={styles.wrapper}>
            <View style={styles.boxes}>
                <View style={styles.innerBoxes}>
                <Image
                    style={styles.imageBox7}
                    source={require('../assets/images/Food.png')}
                    />
                </View>
                <Text style={styles.innerText}>Restaurants</Text>
            </View>

            <View style={styles.boxes}>
                <View style={styles.innerBoxes}>
                <Image
                    style={styles.imageBox8}
                    source={require('../assets/images/Drink.png')}
                    />
                </View>
                <Text style={styles.innerText}>Drinks</Text>
            </View>

            <View style={styles.boxes}>
                <View style={styles.innerBoxes}>
                <Image
                    style={styles.imageBox9}
                    source={require('../assets/images/Sunlight.png')}
                    />
                </View>
                <Text style={styles.innerText}>Weather</Text>
            </View>
        </View>

        <View style={styles.bottomTab}>
            <Text style={styles.bottomText}>Expenses Planner</Text>
            <Image
            style={styles.imageBox9}
            source={require('../assets/images/expense.png')}
            />
            
        </View>


    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        paddingHorizontal: 28,
        paddingVertical: 39,
    },

    topContainer: {
        width:  width - 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    img: {
        width: 42,
        height: 40,
    },

    topText:{
        color: '#05445E',
        fontSize: 25,
        // lineHeight: 24,
        fontWeight: '400',
    },

    subText: {
        color: '#05445E',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        marginTop: 20,
        marginBottom: 35,
    },

    boxes: {
        flexDirection: 'column',
    },

    innerBoxes: {
        width: 78,
        height: 79,
        backgroundColor: '#189AB4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    imageBox1: {
        width: 40,
        height: 43,
    },

    imageBox2: {
        width: 40,
        height: 42,
    },

    imageBox3: {
        width: 42,
        height: 51,
    },

    imageBox4: {
        width: 50,
        height: 50,
    },

    imageBox5: {
        width: 43,
        height: 42,
    },

    imageBox6: {
        width: 45,
        height: 41,
    },

    imageBox7: {
        width: 40,
        height: 43,
    },

    imageBox8: {
        width: 52,
        height: 48,
    },

    imageBox9: {
        width: 53,
        height: 39,
    },

    wrapper: {
        width:  width - 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 44,
    },

    innerText: {
        color: '#05445E',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        marginTop: 20,
        alignSelf:'center',
    },

    bottomText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
    },

    bottomTab: {
        flexDirection: 'row',
        backgroundColor: '#189AB4',
        justifyContent: 'space-between',
        borderRadius: 5,
        height: 78,
        width:  width - 56,
        alignItems: 'center',
        paddingRight: 53,
        paddingLeft: 41,
    }

});


export default HomePage