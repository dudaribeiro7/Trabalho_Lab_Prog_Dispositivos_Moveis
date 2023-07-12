import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity, View, KeyboardAvoidingView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pecas(){

    const navigationimc = useNavigation();

    const handleVoltar = () => {
        navigationimc.navigate('Home');
    };
    const handleHelp = () => {
        navigationimc.navigate('Pecas');
    };
    const handleMore = () => {
        navigationimc.navigate('Pecas');
    };
    const handleSearch = () => {
        navigationimc.navigate('Pecas'); 
    };
    const handleIconPress = () => {
        navigationimc.navigate('Pecas'); 
    };

    const shopItemWidth = (375-24)/2;

    return(
        <ScrollView>
            <KeyboardAvoidingView behavior="position" styles={styles.container} enabled>
            <View>
                              
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={handleVoltar}>
                        <Image source={require('../../../assets/Keyboard.png')}
                            style={styles.iconWrapper} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Peças</Text>
                    <TouchableOpacity onPress={handleHelp}>
                        <Image source={require('../../../assets/Help.png')}
                            style={styles.iconWrapper} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleMore}>
                        <Image source={require('../../../assets/more.png')}
                            style={styles.iconWrapper} />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.line} />

                <View style={styles.searchContainer}>
                    <View style={styles.searchBackground} />
                    <Text style={styles.searchText}>Pesquisar...</Text>
                </View>

                <View style={styles.shopContainer}>
                    <View style={[styles.shopItem, { width: shopItemWidth }]}>
                        <View style={styles.shopBackground} />
                        <Text style={styles.shopName}>Bike Shop 1</Text>
                        <TouchableOpacity onPress={handleIconPress}>
                            <Image source={require('../../../assets/bikeshop1.png')}
                                style={styles.shopImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.shopItem, { width: shopItemWidth }]}>
                        <View style={styles.shopBackground} />
                        <Text style={styles.shopName}>Bike Shop 2</Text>
                        <TouchableOpacity onPress={handleIconPress}>
                            <Image source={require('../../../assets/bikeshop2.png')}
                                style={styles.shopImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.shopItem, { width: shopItemWidth }]}>
                        <View style={styles.shopBackground} />
                        <Text style={styles.shopName}>Bike Shop 3</Text>
                        <TouchableOpacity onPress={handleIconPress}>
                           <Image source={require('../../../assets/bikeshop3.png')}
                                style={styles.shopImage} /> 
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.shopItem, { width: shopItemWidth }]}>
                        <View style={styles.shopBackground} />
                        <Text style={styles.shopName}>Bike Shop 4</Text>
                        <TouchableOpacity onPress={handleIconPress}>
                          <Image source={require('../../../assets/bikeshop4.png')}
                                style={styles.shopImage} />  
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.shopItem, { width: shopItemWidth }]}>
                        <View style={styles.shopBackground} />
                        <Text style={styles.shopName}>Bike Shop 5</Text>
                        <TouchableOpacity onPress={handleIconPress}>
                          <Image source={require('../../../assets/bikeshop5.png')}
                                style={styles.shopImage} />  
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.shopItem, { width: shopItemWidth }]}>
                        <View style={styles.shopBackground} />
                        <Text style={styles.shopName}>Bike Shop 6</Text>
                        <TouchableOpacity onPress={handleIconPress}>
                          <Image source={require('../../../assets/bikeshop6.png')}
                                style={styles.shopImage} />  
                        </TouchableOpacity>  
                    </View>
                </View>
                
            </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        width: 375,
        height: 667,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 85, 251, 0.10)',
    },
    line:{
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
    },
    title: {
        color: '#000',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 'normal',
    },
    iconsContainer: {
        width: 375,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconWrapper: {
        width: 40,
        height: 40,
        position: 'relative',
    },
    searchContainer: {
        width: 304,
        height: 39,
        left: 25,
        position: 'relative',
    },
    searchBackground: {
        width: 304,
        height: 39,
        left: 25,
        top: 0,
        position: 'absolute',
        backgroundColor: 'rgba(0, 85, 250, 0.15)',
        borderRadius: 50,
    },
    searchText: {
        width: 214,
        height: 27,
        left: 56,
        top: 4,
        position: 'absolute',
        color: 'black',
        fontSize: 20,
        fontWeight: 'normal',
        wordWrap: 'break-word',
    },
    shopContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    },
    shopBackground: {
        width: 159,
        height: 95,
        left: 0,
        top: 32,
        position: 'absolute',
        backgroundColor: '#C3D7FE',
    },
    shopItem: {
        marginBottom: 16,
        height: 127,
        position: 'relative',
    },
    shopImage: {
        width: 138,
        height: 79,
        left: 11,
        top: 40,
        position: 'absolute',
    },
    shopName: {
        width: 120,
        height: 24,
        left: 35,
        top: 0,
        position: 'absolute',
        color: '#000',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 'normal',
        wordWrap: 'break-word',
    }    


});