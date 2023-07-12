import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ElementVisualizarBike() {
 
  const navigation = useNavigation();


  const handleVoltar = () => {
    navigation.navigate('Home');
  };

  const handleEditBike = () => {
    navigation.navigate('ElementEditarBike');
  };

  const handleHelp = () => {
    navigation.navigate('ElementVisualizarBike');
  };
  
  const handleTutoriais = () => {
    navigation.navigate('');
  };

  return (
    <View style={styles.elementVisualizarBike}>
          <View style={styles.overlap}>
            <View style={styles.titulo}>
              <View style={styles.overlapGroup}>
                <TouchableOpacity onPress={handleVoltar}>
                  <Image style={styles.icon} source={require("../../../assets/Keyboard.png")} />
                </TouchableOpacity>
                <Text style={styles.textWrapper}>Minha Bike</Text>
                <TouchableOpacity  onPress={handleHelp}>
                  <Image style={styles.icon} source={require("../../../assets/Help.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEditBike}>
                  <Image style={styles.icon} source={require("../../../assets/more.png")} />
                </TouchableOpacity>
              </View>
              <View style={styles.line} />
            </View>
          </View>

          <View style={styles.bike}>
            <Image style={styles.img} source={require("../../../assets/bike.png")} />
          </View>
          <View style={styles.texto}>
            <View style={styles.pneu}>
              <Image
                style={styles.img2}
                source={require("../../../assets/1.png")}
              />
              <Text style={styles.div}>Michelin Force 2,25</Text>
            </View>
            <View style={styles.cambio}>
              <Text style={styles.div}>Shimano Alivio</Text>
              <Image
                style={styles.imagesRemovebg}
                source={require("../../../assets/2.png")}
              />
            </View>
            <View style={styles.passadores}>
              <Text style={styles.div}>Shimano Altus</Text>
              <Image
                style={styles.img2}
                source={require("../../../assets/3.png")}
              />
            </View>
            <View style={styles.catraca}>
              <Text style={styles.div}>Shimano 11V 11-51t</Text>
              <Image
                style={styles.gripshiftRemovebg}
                source={require("../../../assets/4.png")}
              />
            </View>
            <View style={styles.freios}>
              <Text style={styles.textWrapper2}>Shimano Deore</Text>
              <Image
                style={styles.gripshiftRemovebg2}
                source={require("../../../assets/5.png")}
              />
            </View>
          </View>
      
    </View>
  );
};
const styles = {
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
  },
  elementVisualizarBike: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  iphoneWrapper: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    height: 667,
    width: 375,
  },
  iphone: {
    backgroundColor: "#0055fa1a",
    height: 667,
    overflow: "hidden",
    position: "relative",
  },
  overlap: {
    height: 225,
    width: 377,
  },
  titulo: {
    height: 60,
    width: 377,
  },
  overlapGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#00000040",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  iconsContainer: {
    marginHorizontal: 8,
  },
  icon: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
  },
  keyboardBackspace: {
    height: 59,
    left: 0,
    position: "absolute",
    top: 0,
    width: 60,
  },
  helpOutline: {
    height: 40,
    left: 285,
    position: "absolute",
    top: 12,
    width: 40,
  },
  moreVert: {
    height: 48,
    left: 325,
    position: "absolute",
    top: 8,
    width: 48,
  },
  bike: {
    height: 209,
    left: 0,
    position: "absolute",
    top: 16,
    width: 375,
  },
  img: {
    height: 200,
    left: 88,
    position: "absolute",
    top: 0,
    width: 200,
  },
  line2: {
    height: 1,
    left: 0,
    position: "absolute",
    top: 208,
    width: 375,
  },
  texto: {
    height: 379,
    left: 24,
    position: "absolute",
    top: 245,
    width: 333,
  },
  pneu: {
    height: 69,
    left: 0,
    position: "absolute",
    top: 0,
    width: 335,
  },
  img2: {
    height: 57,
    left: 0,
    position: "absolute",
    top: 7,
    width: 57,
  },
  div: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    height: 69,
    left: 58,
    letterSpacing: 0,
    
    position: "absolute",
    top: 0,
    width: 275,
  },
  cambio: {
    height: 69,
    left: 0,
    position: "absolute",
    top: 79,
    width: 335,
  },
  imagesRemovebg: {
    height: 57,
    left: 0,
    position: "absolute",
    top: 6,
    width: 58,
  },
  passadores: {
    height: 69,
    left: 0,
    position: "absolute",
    top: 153,
    width: 335,
  },
  catraca: {
    height: 69,
    left: 0,
    position: "absolute",
    top: 232,
    width: 335,
  },
  gripshiftRemovebg: {
    height: 57,
    left: 0,
    position: "absolute",
    top: 6,
    width: 57,
  },
  freios: {
    height: 69,
    left: 1,
    position: "absolute",
    top: 310,
    width: 334,
  },
  textWrapper2: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    height: 69,
    left: 57,
    letterSpacing: 0,
  
    position: "absolute",
    top: 0,
    width: 275,
  },
  gripshiftRemovebg2: {
    height: 54,
    left: 0,
    position: "absolute",
    top: 8,
    width: 57,
  },
};
