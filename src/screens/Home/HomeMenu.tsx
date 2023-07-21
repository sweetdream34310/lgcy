import React from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../global/Type';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList>;

export const HomeMenuScreen = ({ navigation }: Props): JSX.Element => {
    return (
        <View style={styles.homeMenu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../assets/images/homepage/menu/home.png')} style={{ width: 40, height: 36 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../assets/images/homepage/menu/contact.png')} style={{ width: 52, height: 52 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
                <Image source={require('../../assets/images/homepage/menu/plus.png')} style={styles.menuList} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('NotiView')}>
                <Image source={require('../../assets/images/homepage/menu/notification.png')} style={styles.menuList} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
                <Image source={require('../../assets/images/homepage/menu/user.png')} style={{ width: 35, height: 35 }} />
            </TouchableOpacity>
        </View>
    );
};
