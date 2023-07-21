import * as React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { useFormik, FormikValues } from 'formik';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import SafeAreaContainerView from '../../../components/container/SafeAreaContainerView';
import Input from '../../../components/form/Input';
import validationSchema from '../validate';
import { styles as stepStyles } from './styles';
import { RootStackParamList } from '../../../global/Type';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateUser'>;

export const CreateUserScreen = ({ navigation }: Props): JSX.Element => {
    const onSubmit = (values: FormikValues) => {
        console.log(values);
    };
    const initialValues = {
        username: '',
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
            <TouchableOpacity
                style={{ position: 'absolute', top: 30, left: 20 }}
                onPress={() => navigation.navigate("SignUp")}
            >
                <FontAwesomeIcon icon={faAngleLeft} size={30} />
            </TouchableOpacity>
            <View style={stepStyles.logoView}>
                <Text style={stepStyles.stepTitle}> Create Username </Text>
            </View>
            <View style={stepStyles.inputView}>
                <Input
                    placeholder="Username"
                    onChangeText={handleChange('username')}
                    value={values.username}
                // errorMessage={touched.name && errors.name}
                />
            </View>
            <TouchableOpacity
                style={{ position: 'absolute', right: 50, bottom: 70 }}
                onPress={() => navigation.navigate('CreatePassword')}
            >
                <Text style={{ fontSize: 21, color: '#000' }}> Next </Text>
            </TouchableOpacity>
        </SafeAreaContainerView>
    );
};
