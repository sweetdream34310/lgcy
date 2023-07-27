import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from './constants';

export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    primary: '#eba417',
    primaryLight: '#ffdb77',
    secondary: '#79c7ff',
    success: '#12a454',
    danger: '#e83f5b',
    dark: '#121214',
    light: '#f1f1f1',
    gray500: '#a8a8b3',
    gray800: '#29292e',
  },
};

export const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputView: {
    width: '100%',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  logo: {
    width: 204,
    height: 145,
    flexShrink: 0,
  },
  flexRowView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  flexColView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
