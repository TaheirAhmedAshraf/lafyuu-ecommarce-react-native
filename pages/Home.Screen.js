import React, {useLayoutEffect} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Carousel from '../components/Carousel';
import Products from '../components/Products';
import ScrollableCategory from '../components/ScrollableCategory';
import theme from '../theme.json';

export default function HomeScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({header: () => <HomeScreenHeader />});
  }, [navigation]);

  return (
    <>
      <StatusBar
        backgroundColor={theme.background.white}
        barStyle={'dark-content'}
      />
      <ScrollView style={styles.root}>
        {/* <Carousel /> */}
        <ScrollableCategory navigation={navigation} />
        <Products navigation={navigation} />
      </ScrollView>
    </>
  );
}

function HomeScreenHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={{width: '80%'}}>
        <Input
          inputContainerStyle={styles.headerInputContainerStyle}
          inputStyle={{fontSize: 15}}
          style={{width: 400}}
          placeholder="Search Product"
          placeholderTextColor={theme.neutral.grey}
          leftIcon={() => (
            <FeatherIcon name="search" size={22} color={theme.primary.blue} />
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '18%',
        }}>
        <FeatherIcon name="heart" size={25} color={theme.neutral.grey} />
        <FeatherIcon name="bell" size={25} color={theme.neutral.grey} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // headerstyle
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    height: 85,
    backgroundColor: theme.background.white,
  },
  headerInputContainerStyle: {
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: theme.neutral.light,
    marginHorizontal: 0,
    height: 46,
  },

  // home
  root: {
    flex: 1,
    backgroundColor: theme.background.white,
    paddingHorizontal: 8,
  },
});
