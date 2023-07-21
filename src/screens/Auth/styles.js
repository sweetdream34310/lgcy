import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from '../../global/constants';

export const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoView: {
        paddingTop: 105,
    },
    logo: {
        width: 204,
        height: 145,
        flexShrink: 0,
    },
    inputView: {
        textAlign: 'center',
        marginTop: 50,
        fontFamily: 'Radley',
        width: 320,
    },
    signInButton: {
        marginTop: 40,
    },
    forgotPWDText: {
        color: '#68696C',
        fontSize: 15,
        marginTop: 12,
        textAlign: 'center',
    },
    signUpTitle: {
        color: '#000',
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'Montserrat',
        fontWeight: '800',
    },
    signUpTermsText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Montserrat',
        marginTop: 60,
        lineHeight: 22,
    }
});