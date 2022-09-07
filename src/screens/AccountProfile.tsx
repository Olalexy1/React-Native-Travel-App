import React from 'react';
import { StyleSheet, Dimensions, Text, Image, View, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');


const AccountProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity>
            <Image
            style={styles.img}
            source={require('../assets/images/Back.png')}/>
        </TouchableOpacity>
            <Text style={styles.topText}>My Account</Text>
        </View>
        <View style={styles.accountCard}>
            <Image
            style={styles.img2}
            source={require('../assets/images/Ellipse.png')}/>
            <View>
                <View style={styles.innerCard}>
                    <View style={styles.innerCard2}>
                        <Text style={styles.nameText}>Olivia Scott</Text>
                        <Text style={styles.descText}>UI/UX Designer</Text>
                    </View>
                    <Image
                    style={styles.penImg}
                    source={require('../assets/images/Pen.png')}/>
                </View>
            </View>
        </View>

        <View style={styles.bottomCards}>
            <TouchableOpacity>
                <View style={styles.innerCardContainer}>
                    <Image
                    style={styles.img3}
                    source={require('../assets/images/Profile.png')}/>
                    <View style={styles.innerMostCard}>
                        <View>
                            <Text style={styles.profileName}>Profile</Text>
                            <Text style={styles.profileDesc}>Manage Changes to your account</Text>
                        </View>
                        <Image
                        style={styles.img4}
                        source={require('../assets/images/ArrowRight.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.innerCardContainer}>
                    <Image
                    style={styles.img5}
                    source={require('../assets/images/Card.png')}/>
                    <View style={styles.innerMostCard}>
                        <View>
                            <Text style={styles.profileName}>Cards</Text>
                            <Text style={styles.profileDesc}>Secure your cards for safety</Text>
                        </View>
                        <Image
                        style={styles.img4}
                        source={require('../assets/images/ArrowRight.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.innerCardContainer}>
                    <Image
                    style={styles.img3}
                    source={require('../assets/images/Settings.png')}/>
                    <View style={styles.innerMostCard}>
                        <View>
                            <Text style={styles.profileName}>Preferences</Text>
                            <Text style={styles.profileDesc}>Customize you app</Text>
                        </View>
                        <Image
                        style={styles.img4}
                        source={require('../assets/images/ArrowRight.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.innerCardContainer}>
                    <Image
                    style={styles.img3}
                    source={require('../assets/images/Logout.png')}/>
                    <View style={styles.innerMostCard}>
                        <View>
                            <Text style={styles.profileName}>LogOut</Text>
                            <Text style={styles.profileDesc}>Logout for your account</Text>
                        </View>
                        <Image
                        style={styles.img4}
                        source={require('../assets/images/ArrowRight.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        width: width,
        height: height,
        paddingVertical: 39,
        paddingHorizontal: 28,
    },

    topContainer: {
        flexDirection: 'row',
        
    },

    topText: {
        color: '#05445E',
        fontSize: 25,
        fontWeight: '400',
        lineHeight: 25,
        marginBottom: 38,
    },

    img: {
        width: 25,
        height: 20,
        marginRight: 12,
    },

    img2: {
        width: 68,
        height: 68,
        borderRadius: 50,
        marginRight: 16,
    },

    img3: {
        width: 20,
        height: 20,
        marginRight: 16,
    },

    img5: {
        width: 23,
        height: 18,
        marginRight: 16,
    },

    img4: {
        width: 6,
        height: 11,
    },

    penImg: {
        width: 19,
        height: 18,
    },

    accountCard: {
        flexDirection: 'row',
        backgroundColor: '#189AB4',
        borderRadius: 5,
        height: 79,
        width:  width - 56,
        paddingLeft: 21,
        paddingRight: 30,
        paddingVertical: 6,
        marginBottom: 19,
        alignItems: 'center',
    },

    bottomCards: {
        flexDirection: 'column',
        width:  width - 56,
        paddingLeft: 21,
        paddingRight: 61,
        paddingTop: 20,
        paddingBottom: 39,
        borderColor: '#F5F5F5',
        borderRightWidth: 2,
        borderBottomWidth: 2,
        marginTop: 49,
    },

    innerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    innerCard2: {
        marginRight: 94,
    },

    nameText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 16,
    },

    descText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 16,
    },

    innerCardContainer: {
        flexDirection: 'row',
        marginBottom: 19,
    },

    profileName: {
        color: '#189AB4',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 16,
        marginBottom: 6,
    },

    profileDesc: {
        color: '#189AB4',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 16,
    },

    innerMostCard: {
        borderColor: '#189AB480',
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingBottom: 19,
        paddingRight: 9,
        width: 226,
        justifyContent: 'space-between',
    },

})

export default AccountProfile