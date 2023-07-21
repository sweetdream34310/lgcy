import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../global/constants';

export const styles = StyleSheet.create({
    homeMenu: {
        position: 'absolute',
        bottom: 70,
        width: SCREEN_WIDTH,
        height: 60,
        backgroundColor: '#eee',
        borderColor: 'grey',
        borderTopWidth: 1,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    menuList: {
        width: 40,
        height: 40
    }
});