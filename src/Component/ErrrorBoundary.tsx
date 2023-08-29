import React from 'react';
import {Text, View} from 'react-native';

const ErrorFallback = (props: {error?: Error; resetError?: Function}) => (
  <View>
    <Text>{'Something goes wrong...'}</Text>
    <Text>{props?.error?.toString()}</Text>
  </View>
);

export default ErrorFallback;
