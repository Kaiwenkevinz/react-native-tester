import {View, Text} from 'react-native';
import React from 'react';

interface DetailScreenProps {}

const DetailScreen = (props: DetailScreenProps) => {
  console.log('🚀 ~ file: DetailScreen.tsx:7 ~ DetailScreen ~ props:', props);

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
