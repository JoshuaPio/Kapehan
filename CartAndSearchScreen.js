import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CartAndSearchScreen = () => {
  const navigation = useNavigation();

  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  const handleSearchPress = () => {
    console.log('Search icon clicked');
  };

  // 3 CATEGORIES
  const handleTeaPress = () => {
    navigation.navigate('Tea');
  };

  const handleCoffeePress = () => {
    navigation.navigate('Coffee');
  };

  const handleCookiePress = () => {
    navigation.navigate('Cookie');
  };

  // Dummy image for the white container
  const circleImage = require('./assets/CaramelMac.png');

  // Dummy data for featured drinks with local image paths
  const featuredDrinks = [
    { id: '1', name: 'Green Tea', image: require('./assets/GreenTea.png') },
    { id: '2', name: 'Black Tea', image: require('./assets/BlackTea.png') },
    { id: '3', name: 'Espresso', image: require('./assets/Espresso.png') },
    { id: '4', name: 'Latte', image: require('./assets/Latte.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <View style={styles.navigationButtons}>
          <TouchableOpacity onPress={handleCartPress} style={styles.iconContainer}>
            <Ionicons name="cart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSearchPress} style={styles.iconContainer}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.navigator}>
          <TouchableOpacity onPress={handleTeaPress} style={styles.navButton}>
            <Text style={styles.navText}>Tea</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCoffeePress} style={styles.navButton}>
            <Text style={styles.navText}>Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCookiePress} style={styles.navButton}>
            <Text style={styles.navText}>Cookie</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image source={circleImage} style={styles.circleImage} resizeMode="cover" />
          <View style={styles.circleBackground}></View>
        </View>
        <Text style={styles.bestsellerTitle}>MUST TRY DRINK</Text>
        <View style={styles.starContainer}>
          {[...Array(5)].map((_, index) => (
            <Ionicons key={index} name="star" size={24} color="yellow" />
          ))}
        </View>
      </View>
      <View style={styles.bottomHalf}>
        {/* Featured Drinks Section */}
        <View style={styles.featuredDrinksContainer}>
          <Text style={styles.featuredTitle}>Featured Drinks</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.gridContainer}>
              {featuredDrinks.map((drink) => (
                <TouchableOpacity
                  key={drink.id}
                  onPress={() => console.log(drink.name + ' selected')}
                  style={styles.drinkContainer}>
                  <View style={styles.circleBackgroundSmall}>
                    <Image source={drink.image} style={styles.drinkImage} />
                  </View>
                  <Text style={styles.drinkName}>{drink.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE0D1',
  },
  topHalf: {
    flex: 1,
    backgroundColor: '#967259', 
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 250,
  },
  bottomHalf: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  navButton: {
    padding: 5,
  },
  navText: {
    color: 'white', // Change text color to black
  },
  bestsellerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ECE0D1',
    marginBottom: 20, // Adjust margin to move the text lower
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10, // Adjust marginTop to move the stars lower
  },
  navigator: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Center the navigator horizontally
    alignItems: 'center', // Center the navigator vertically
    paddingHorizontal: 20,
    paddingTop: 10, // Move navigator buttons up slightly
  },
  iconContainer: {
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 50, // Adjusted marginBottom to move the image down
  },
  circleImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 1,
    bottom: -380, // Move the image down by 20 units
  },
  circleBackground: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#ECE0D1', // Beige
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 0,
    bottom: -320, // Move the circular background down by 15 units
  },
  featuredDrinksContainer: {
    paddingTop: 20,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'left', // Align text to left
    marginLeft: 20, // Add left margin
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap', 
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  drinkContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 100, 
    padding: 20,
  },
  circleBackgroundSmall: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  drinkImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  drinkName: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CartAndSearchScreen;
