import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RootStackNavigation from './src/navigations';

MaterialIcon.loadFont();
export default (): JSX.Element => {
  return (
    <RootStackNavigation />
  )
}
