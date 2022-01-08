import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import theme from '../theme.json';
import Product1 from '../assets/product-images/product_1.png';
import Product2 from '../assets/product-images/product_2.png';
import Product3 from '../assets/product-images/product_3.png';
import Product4 from '../assets/product-images/product_4.png';
import Product5 from '../assets/product-images/product_5.png';
import Product6 from '../assets/product-images/product_6.png';
import Product7 from '../assets/product-images/product_7.png';
import Product8 from '../assets/product-images/product_8.png';

const products = [
  {
    id: 1,
    name: 'Nike Air Max 270 React ENG',
    discountPrice: 120,
    price: 400,
    image: Product1,
    rating: 1,
  },
  {
    id: 2,
    name: 'Nike Air Max 270 React ENG',
    discountPrice: 390,
    price: 400,
    image: Product2,
    rating: 4,
  },
  {
    id: 3,
    name: 'Nike Air Max 270 React ENG',
    discountPrice: 310,
    price: 400,
    image: Product3,
    rating: 3,
  },
  {
    id: 4,
    name: 'Nike Air Max 270 React ENG',
    discountPrice: 340,
    price: 400,
    image: Product4,
    rating: 5,
  },
  {
    id: 5,
    name: 'Nike Air Max 270 React ENG',
    discountPrice: 395,
    price: 400,
    image: Product5,
    rating: 2,
  },
  {
    id: 6,
    name: 'Nike Air Max 270 React ENG',
    discountPrice: 210,
    price: 400,
    image: Product6,
    rating: 4,
  },
  {
    id: 7,
    name: 'Nike Air Max 270 React ENG',
    discountPrice: 250,
    price: 400,
    image: Product7,
    rating: 5,
  },
  {
    id: 8,
    name: 'Nike Air Max 270 React ENG',
    discountPrice: 290,
    price: 400,
    image: Product8,
    rating: 5,
  },
];

export default function Products({navigation}) {
  const width = Dimensions.get('window').width;
  const productImageSize = width / 2 - 30;

  const calculateDiscount = (price, discountPrice) => {
    const discount = ((price - discountPrice) / price) * 100;
    return discount.toFixed(0);
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.products}>
        {products.map(product => (
          <TouchableOpacity
            onPress={() => navigation.push('ProductScreen', {product})}
            key={product.id}
            style={styles.singleProduct}>
            <View style={styles.productImage}>
              <Image
                source={product.image}
                style={{width: productImageSize, height: productImageSize}}
                resizeMode="contain"
              />
            </View>
            <View style={styles.productInfo}>
              <View>
                <Text style={styles.productTitle}>{product.name}</Text>
                <View style={styles.starsWrapper}>
                  <AntdesignIcon
                    name={product.rating > 0 ? 'star' : 'staro'}
                    size={17}
                    color="#ffd700"
                  />
                  <AntdesignIcon
                    name={product.rating > 1 ? 'star' : 'staro'}
                    size={17}
                    color="#ffd700"
                  />
                  <AntdesignIcon
                    name={product.rating > 2 ? 'star' : 'staro'}
                    size={17}
                    color="#ffd700"
                  />
                  <AntdesignIcon
                    name={product.rating > 3 ? 'star' : 'staro'}
                    size={17}
                    color="#ffd700"
                  />
                  <AntdesignIcon
                    name={product.rating > 4 ? 'star' : 'staro'}
                    size={17}
                    color="#ffd700"
                  />
                </View>
              </View>
              <View style={styles.priceWrapper}>
                <Text style={styles.offerPrice}>${product.discountPrice}</Text>
                <View style={styles.realPriceWrapper}>
                  <Text style={styles.realPrice}>${product.price}</Text>
                  <Text style={styles.offerPercentage}>
                    {calculateDiscount(product.price, product.discountPrice)}%
                    off
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: 30,
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  singleProduct: {
    width: '49%',
    borderWidth: 1,
    borderColor: theme.neutral.light,
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },
  starsWrapper: {
    flexDirection: 'row',
  },
  productInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.neutral.dark,
  },
  priceWrapper: {
    paddingTop: 12,
  },
  offerPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.primary.blue,
    paddingBottom: 7,
  },
  realPriceWrapper: {
    flexDirection: 'row',
  },
  realPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    color: theme.neutral.grey,
    marginRight: 8,
  },
  offerPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.primary.red,
  },
  productImage: {
    overflow: 'hidden',
    borderRadius: 12,
  },
});
