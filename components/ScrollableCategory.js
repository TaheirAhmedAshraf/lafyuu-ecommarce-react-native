import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../theme.json';

// images
import ManShirt from '../assets/icons/category/shirt.png';
import Dress from '../assets/icons/category/dress.png';
import ManBag from '../assets/icons/category/man_bag.png';
import WomanBag from '../assets/icons/category/woman_bag.png';
import ManShoe from '../assets/icons/category/man_shoes.png';
import WomanShoe from '../assets/icons/category/woman_shoes.png';

export default function ScrollableCategory() {
  const categories = [
    {id: 1, title: 'Man Shirt', image: ManShirt},
    {id: 2, title: 'Dress', image: Dress},
    {id: 3, title: 'Main Work Equipment', image: ManBag},
    {id: 4, title: 'Woman Bag', image: WomanBag},
    {id: 5, title: 'Man Shoe', image: ManShoe},
    {id: 6, title: 'Woman Shoe', image: WomanShoe},
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.neutral.dark,
          }}>
          Category
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: theme.primary.blue,
            }}>
            More Category
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.root}>
        <View style={{flexDirection: 'row'}}>
          {categories.map(category => (
            <TouchableOpacity style={styles.singleCategory} key={category.id}>
              <View style={styles.cateoryIcon}>
                <Image source={category.image} />
              </View>
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  singleCategory: {
    alignItems: 'center',
    marginHorizontal: 6,
    width: 70,
    marginTop: 10,
  },
  cateoryIcon: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.neutral.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  categoryTitle: {
    textAlign: 'center',
  },
});
