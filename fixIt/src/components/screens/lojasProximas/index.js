import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ElementLojasProximas() {

    const navigationimc = useNavigation();
    const handleHome = () => {
        navigationimc.navigate('Home');
      };
      const handleMaps = () => {
        const url = `https://www.google.com.br/maps/place/S%C3%A3o+Pedro,+Juiz+de+Fora+-+MG/@-21.7736809,-43.4044465,14z/data=!3m1!4b1!4m6!3m5!1s0x989b9a2acd70df:0xec63b3c9f4e8c2ad!8m2!3d-21.7732997!4d-43.3815506!16s%2Fg%2F1ymsmq74c?entry=ttu`;

    Linking.openURL(url);
      };


    return (
        <View style={styles.elementLojasProximas}>
            <View style={styles.overlapWrapper}>
                <View style={styles.overlap}>
                    <View style={styles.iphone}>
                        <TouchableOpacity onPress={handleMaps}>
                            <Image style={styles.maps} source={require("../../../assets/maps 1.png")} />
                        </TouchableOpacity>
                        <View style={styles.pesquisa}>
                            <View style={styles.overlapGroup}>
                                <View style={styles.rectangle} />
                                <TextInput style={styles.textWrapper} placeholder="Pesquisar..."></TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={styles.titulo}>
                        <View style={styles.div}>
                            <Text style={styles.lojasProximas}>Lojas Próximas</Text>
                            <TouchableOpacity>
                                <Image style={styles.moreVert} source={require("../../../assets/more.png")} />
                            </TouchableOpacity>
                            <View style={styles.line}></View>
                            <TouchableOpacity  onPress={handleHome}>
                                <Image style={styles.keyboardBackspace} source={require("../../../assets/Keyboard.png")} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pesquisa: {
        flex: 1,
        paddingHorizontal: 10,
    },
    areaPesquisa: {
        width: 304,
        height: 39,
        flexShrink: 0,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 85, 251, 0.15)',
    },
    elementLojasProximas: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
    },
    overlapWrapper: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        height: 667,
        overflow: "hidden",
        width: 375,
    },
    overlap: {
        height: 667,
        position: "relative",
        width: 388,
    },
    iphone: {
        backgroundColor: "#0055fa1a",
        height: 667,
        left: 0,
        position: "absolute",
        top: 0,
        width: 375,
    },
    maps: {
        height: 312,
        left: 11,
        position: "absolute",
        top: 178,
        width: 353,
    },
    pesquisa: {
        height: 39,
        left: 36,
        position: "absolute",
        top: 111,
        width: 306,
    },
    overlapGroup: {
        borderRadius: 50,
        height: 39,
        position: "relative",
        width: 304,
    },
    mag: {
        height: 25,
        left: 18,
        position: "absolute",
        top: 8,
        width: 25,
    },
    rectangle: {
        backgroundColor: "#0055fa26",
        borderRadius: 50,
        height: 39,
        left: 0,
        position: "absolute",
        top: 0,
        width: 304,
    },
    textWrapper: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
        height: 27,
        left: 56,
        letterSpacing: 0,
        lineHeight: "normal",
        position: "absolute",
        top: 4,
        width: 214,
    },
    titulo: {
        height: 60,
        left: 0,
        position: "absolute",
        top: 0,
        width: 388,
    },
    div: {
        height: 60,
        position: "relative",
        width: 386,
    },
    lojasProximas: {
        color: "#000000",
        fontSize: 28,
        fontWeight: "bold",
        height: 60,
        left: 11,
        letterSpacing: 0,
        lineHeight: "normal",
        position: "absolute",
        textAlign: "center",
        textShadow: "0px 4px 4px #00000040",
        top: 0,
        width: 375,
    },
    moreVert: {
        height: 48,
        left: 316,
        position: "absolute",
        top: 8,
        width: 48,
    },
    line: {
        height: 1,
        left: 0,
        objectFit: "cover",
        position: "absolute",
        top: 59,
        width: 375,
    },
    keyboardBackspace: {
        height: 59,
        left: 0,
        position: "absolute",
        top: 0,
        width: 60,
    },
};