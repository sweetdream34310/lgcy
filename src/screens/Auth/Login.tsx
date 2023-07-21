import React from 'react';
import { View, Image, Text } from "react-native";
import { useFormik, FormikValues } from 'formik';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SafeAreaContainerView from '../../components/container/SafeAreaContainerView';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import { styles as globalStyles } from '../../global/styles';
import { styles as loginStyles } from './styles';
import validationSchema from './validate';
import { RootStackParamList } from '../../global/Type';

type Props = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

export const LoginScreen = ({ navigation }: Props): JSX.Element => {
    const initialValues = {
        email: '',
        password: '',
    };
    const onSubmit = (values: FormikValues) => {
        // setTimeout(() => {
        //     navigation.navigate('Home');
        // }, 3000);
        console.log(values);
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    const {
        values,
        touched,
        errors,
        handleChange,
        isSubmitting,
        isValid,
        handleSubmit,
    } = formik;
    return (
        <SafeAreaContainerView>
            <View style={loginStyles.logoView}>
                <Image style={globalStyles.logo} source={require('../../assets/images/logo.png')} />
            </View>
            <View style={loginStyles.inputView}>
                <Input
                    placeholder="Email or Username"
                    onChangeText={handleChange('email')}
                    value={values.email}
                // errorMessage={touched.email && errors.email}
                />
                <Input
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    value={values.password}
                    style={{ marginVertical: 20, margin: "auto" }}
                    // errorMessage={touched.password && errors.password}
                    secureTextEntry={true}
                />
                <Button
                    title="Sign in"
                    style={{ marginTop: 50 }}
                    onPress={() => navigation.navigate('Home')}
                />
                <Text style={loginStyles.forgotPWDText}> Forget password? </Text>
                <Button
                    title="Sign up"
                    style={{ marginTop: 75 }}
                    onPress={() => navigation.navigate('SignUp')}
                />
            </View>
        </SafeAreaContainerView>
    );
};
