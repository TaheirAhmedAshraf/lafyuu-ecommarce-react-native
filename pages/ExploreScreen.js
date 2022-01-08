import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import FeatherIcon from 'react-native-vector-icons/Feather';
import theme from '../theme.json';

function ExploreScreenHeader() {
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

export default function ExploreScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({header: () => <ExploreScreenHeader />});
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Text>ExploreScreen</Text>
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
    borderBottomWidth: 1,
    borderColor: theme.neutral.light,
  },
  headerInputContainerStyle: {
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: theme.neutral.light,
    marginHorizontal: 0,
    height: 46,
  },

  // explore style
  root: {
    flex: 1,
    backgroundColor: theme.background.white,
  },
});
