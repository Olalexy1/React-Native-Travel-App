import React, {FC} from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenProps } from '../../types';

const { width, height } = Dimensions.get('window');

const Home:FC<ScreenProps> = () => {
    const navigation = useNavigation(); 
    return (
        <View>
        <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/images/background.png')}>
            <Image
            style={styles.img}
            source={require('../assets/images/Ellipse.png')}
            />
            <Text style={styles.titleText}>Welcome</Text>
            <Text style={styles.subText}>Your new destination awaits you!</Text>
            <View style={styles.plansContainer}>
                <TouchableOpacity
                onPress={() => navigation.navigate('BottomNavigation')}>
                    <View style={styles.plans}>
                    <Image
                        style={styles.planImg}
                        source={require('../assets/images/AddIcon.png')}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.plans}>
                    <Image
                        style={styles.planImg}
                        source={require('../assets/images/ContIcon.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>Create New Trip Plans</Text>
                </View>
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>Continue a previous plan</Text>
                </View>
            </View>
        </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundImage: {
        width: width,
        height: height,
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
    },

    img: {
        width: 105,
        height: 104,
        alignSelf: 'center',
        marginBottom: 10,
    },

    titleText:{
        color: '#0D374F',
        fontSize: 20,
        lineHeight: 20,
        fontWeight: '500',
        alignSelf:'center',
        marginVertical: 10,
    },

    subText: {
        color: '#05445E',
        fontSize: 15,
        lineHeight: 16,
        fontWeight: '400',
        alignSelf:'center',
    },

    plansContainer: {
        width: width * 0.60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 69,
    },

    plans: {
        width: 100,
        height: 99,
        backgroundColor: '#189AB4',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    planImg: {
        width: 40,
        height: 40,
    },

    bottomContainer: {
        width: width * 0.60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 27,
    },

    bottomText:{
        color: '#0D374F',
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '400',
        textAlign: 'center',
    },

    bottomTextContainer: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    
  });

export default Home