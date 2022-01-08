import React, {useEffect, useLayoutEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import theme from '../theme.json';
import {Button, Image} from 'react-native-elements';

export default function ProductScreen(props) {
  const [product, setProduct] = React.useState({});
  const [favorite, setFavorite] = React.useState(false);
  const [selectedVarient, setSelectedVarient] = React.useState('');
  const [selectedColorVarient, setSelectedColorVarient] = React.useState('');

  useEffect(() => {
    setProduct(props.route.params.product);
  }, [props]);
  console.log(product);

  const touggleFavorite = () => {
    setFavorite(!favorite);
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title:
        product?.name?.length > 18
          ? product?.name?.slice(0, 22) + '...'
          : product?.name,
      headerTitleStyle: {
        color: theme.neutral.dark,
        fontWeight: 'bold',
      },
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <Iconicons name="search" size={26} color={theme.neutral.grey} />
          <Iconicons
            name="ellipsis-vertical"
            size={26}
            color={theme.neutral.grey}
          />
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <FeatherIcons
            style={{marginRight: 12}}
            name="chevron-left"
            size={24}
            color={theme.neutral.grey}
          />
        </TouchableOpacity>
      ),
    });
  }, [product]);

  const varients = ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'];
  const colorVarianets = [
    theme.primary.yellow,
    theme.primary.blue,
    theme.primary.red,
    theme.primary.green,
    theme.primary.purple,
    theme.neutral.dark,
  ];

  return (
    <>
      <ScrollView style={styles.root}>
        <View>
          <Image style={styles.ProductImage} source={product.image} />
        </View>
        <View style={styles.container}>
          {/* ProductInfo */}
          <View style={styles.productInfo}>
            <View style={styles.productInfoTopSide}>
              <Text style={styles.productTitle}>{product?.name}</Text>
              <TouchableOpacity onPress={touggleFavorite}>
                {favorite ? (
                  <AntDesignIcon
                    name="heart"
                    size={24}
                    color={theme.primary.red}
                  />
                ) : (
                  <AntDesignIcon
                    name="hearto"
                    size={24}
                    color={theme.neutral.grey}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.rating}>
              <AntDesignIcon
                name={product.rating > 0 ? 'star' : 'staro'}
                size={17}
                color="#ffd700"
              />
              <AntDesignIcon
                name={product.rating > 1 ? 'star' : 'staro'}
                size={17}
                color="#ffd700"
              />
              <AntDesignIcon
                name={product.rating > 2 ? 'star' : 'staro'}
                size={17}
                color="#ffd700"
              />
              <AntDesignIcon
                name={product.rating > 3 ? 'star' : 'staro'}
                size={17}
                color="#ffd700"
              />
              <AntDesignIcon
                name={product.rating > 4 ? 'star' : 'staro'}
                size={17}
                color="#ffd700"
              />
            </View>
            <Text style={styles.price}>${product.discountPrice}</Text>
          </View>
          {/* Product Varient */}
          <View style={styles.productVarient}>
            <Text style={styles.title}>Select Size</Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.varients}>
              {varients.map(varient => (
                <TouchableOpacity
                  onPress={() => setSelectedVarient(varient)}
                  id={varient}
                  style={[
                    styles.varient,
                    selectedVarient == varient && {
                      borderColor: theme.primary.blue,
                    },
                  ]}>
                  <Text style={styles.varientText}>{varient}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.productVarient}>
            <Text style={styles.title}>Select Color</Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.varients}>
              {colorVarianets.map(color => (
                <TouchableOpacity
                  onPress={() => setSelectedColorVarient(color)}
                  id={color}
                  style={[styles.varient, {backgroundColor: color}]}>
                  {selectedColorVarient == color && (
                    <View style={styles.colorVarBall}></View>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          {/* product specifiaction */}
          <View style={styles.specification}>
            <Text style={styles.title}>Product Specification</Text>
            <View style={{marginVertical: 10}}>
              <Text style={styles.specTitle}>Style:</Text>
              <Text style={styles.specDetails}>
                The Nike Air Max 270 React ENG combines a full-length React foam
                midsole with a 270 Max Air unit for unrivaled comfort and a
                striking visual experience.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          paddingVertical: 14,
          backgroundColor: theme.background.white,
        }}>
        <Button
          disabled={!selectedVarient || !selectedColorVarient}
          title="Add To Cart"
          buttonStyle={styles.button}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.background.white,
  },
  ProductImage: {
    width: '100%',
    height: 280,
  },
  container: {
    paddingHorizontal: 12,
  },
  productInfo: {
    paddingVertical: 15,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.neutral.dark,
  },
  productInfoTopSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.primary.blue,
    paddingTop: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: theme.neutral.dark,
  },
  varients: {
    marginTop: 10,
    flexDirection: 'row',
  },
  varient: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderColor: theme.neutral.light,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  varientText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.neutral.dark,
  },
  productVarient: {
    marginBottom: 20,
  },
  colorVarBall: {
    width: '35%',
    height: '35%',
    borderRadius: 50,
    backgroundColor: theme.background.white,
  },
  button: {
    backgroundColor: theme.primary.blue,
    marginHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 10,
    // position: 'absolute',
  },
  specTitle: {
    fontSize: 16,
    color: theme.neutral.dark,
    marginBottom: 5,
  },
  specDetails: {
    fontSize: 15,
    color: theme.neutral.grey,
  },
});
