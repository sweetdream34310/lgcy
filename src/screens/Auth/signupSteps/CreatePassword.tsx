import * as React from 'react';
import {
    Text,
    TouchableOpacity,
    useColorScheme,
    View
} from "react-native";
import SafeAreaContainerView from '../../../components/container/SafeAreaContainerView';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useFormik, FormikValues } from 'formik';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import Input from '../../../components/form/Input';
import validationSchema from '../validate';
import { styles as stepStyles } from './styles';
import { RootStackParamList } from '../../../global/Type';

type Props = NativeStackScreenProps<RootStackParamList, 'CreatePassword'>;

export const CreatePasswordScreen = ({ navigation }: Props): JSX.Element => {
    const onSubmit = (values: FormikValues) => {
        console.log(values);
    };
    const initialValues = {
        password: '',
        confirm_password: '',
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
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaContainerView>
            <TouchableOpacity
                style={{ position: 'absolute', top: 30, left: 20 }}
                onPress={() => navigation.navigate("CreateUser")}
            >
                <FontAwesomeIcon icon={faAngleLeft} size={30} />
            </TouchableOpacity>
            <View style={stepStyles.logoView}>
                <Text style={stepStyles.stepTitle}> Password </Text>
            </View>
            <View style={stepStyles.inputView}>
                <Input
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    value={values.password}
                // errorMessage={touched.name && errors.name}
                />
                <Input
                    placeholder="Confirm Password"
                    onChangeText={handleChange('confirm_password')}
                    value={values.confirm_password}
                    style={{ marginTop: 25 }}
                // errorMessage={touched.name && errors.name}
                />
            </View>
            <TouchableOpacity
                style={{ position: 'absolute', right: 50, bottom: 70 }}
                onPress={() => navigation.navigate("LogIn")}
            >
                <Text style={{ fontSize: 21, color: '#000' }}> Next </Text>
            </TouchableOpacity>
        </SafeAreaContainerView>
    );
};
