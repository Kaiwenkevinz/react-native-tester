import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Detail')}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
