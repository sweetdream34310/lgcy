import * as React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import SafeAreaContainerView from '../../components/container/SafeAreaContainerView';
import { useFormik, FormikValues } from 'formik';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Input from '../../components/form/Input';
import validationSchema from './validate';
import { styles as signupStyles } from './styles';
import { RootStackParamList } from '../../global/Type';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpScreen = ({ navigation }: Props): JSX.Element => {
    const onSubmit = (values: FormikValues) => {
        console.log(values);
    };
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        dob: '',
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
            <View style={signupStyles.logoView}>
                <Text style={signupStyles.signUpTitle}> Create your account </Text>
            </View>
            <View style={signupStyles.inputView}>
                <Input
                    placeholder="Name"
                    onChangeText={handleChange('name')}
                    value={values.name}
                // errorMessage={touched.name && errors.name}
                />
                <Input
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    style={{ marginTop: 5 }}
                // errorMessage={touched.email && errors.email}
                />
                <Input
                    placeholder="Phone Number"
                    onChangeText={handleChange('phone')}
                    value={values.phone}
                    style={{ marginTop: 5 }}
                // errorMessage={touched.email && errors.email}
                />
                <Input
                    placeholder="Date of Birth"
                    onChangeText={handleChange('dob')}
                    value={values.dob}
                    style={{ marginTop: 5 }}
                // errorMessage={touched.dob && errors.dob}
                />
                <Text style={signupStyles.signUpTermsText}>
                    By signing up you agree to our
                    <Text
                        style={{
                            textDecorationColor: 'black',
                            textDecorationStyle: 'solid',
                            textDecorationLine: 'underline',
                            color: '#000',
                        }}
                    > Terms and Privacy Policy </Text>
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 15,
                        marginTop: 60,
                        textAlign: "center",
                    }}
                >
                    Already have an account?
                    <Text onPress={() => navigation.navigate('LogIn')}> &nbsp;Sign in </Text>
                </Text>
            </View>
            <TouchableOpacity
                style={{ position: 'absolute', right: 50, bottom: 70 }}
                onPress={() => navigation.navigate("CreateUser")}
            >
                <Text style={{ fontSize: 21, color: '#000' }}> Next </Text>
            </TouchableOpacity>
        </SafeAreaContainerView>
    );
};
