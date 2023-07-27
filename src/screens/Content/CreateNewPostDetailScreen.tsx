import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {AppStackParamList} from '../../navigation';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles as globalStyles} from '../../global/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DatePicker from 'react-native-date-picker';

type Props = NativeStackScreenProps<AppStackParamList>;

const CreateNewPostDetail = ({navigation}: Props) => {
  const isDarkMode = true;

  const [commenting, setCommenting] = useState(false);
  const [linking, setLinking] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('Date of Birth');

  const setDateValue = (dateObject: any) => {
    setDate(dateObject);
    let newDate = new Date(dateObject).toLocaleDateString();
    setSelectedDate(newDate);
  };

  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: Colors.black}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.black}
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/rightIcon.png')}
            resizeMode="contain"
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>New post</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('PostShareScreen')}>
          <Text style={styles.headerRightTitle}>Next</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/images/gallery/gallery(1).png')}
            style={styles.postImg}
          />
          <Text style={{paddingLeft: 20}}>Share the story...</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.pannelTitle}>10 May 2021</Text>
          <View style={styles.pannelContainer}>
            <Text style={styles.pannelTitle}>Turn off Commenting</Text>
            <Switch
              trackColor={{false: '#767577', true: '#767577'}}
              thumbColor={'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setCommenting(!commenting)}
              value={commenting}
            />
          </View>
          <View style={styles.pannelContainer}>
            <Text style={styles.pannelTitle}>Turn off Liking</Text>
            <Switch
              trackColor={{false: '#767577', true: '#767577'}}
              thumbColor={'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setLinking(!linking)}
              value={linking}
            />
          </View>

          <View style={styles.pannelContainer}>
            <Text style={styles.pannelTitle}>Share on Twitter</Text>
            <Switch
              trackColor={{false: '#767577', true: '#767577'}}
              thumbColor={'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setTwitter(!twitter)}
              value={twitter}
            />
          </View>
          <View style={styles.pannelContainer}>
            <Text style={styles.pannelTitle}>Location</Text>
            <View style={styles.locationBtn}>
              <Text style={styles.addLocationText}>Add Location</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.calenderContainer}>
            <View>
              <Text style={styles.pannelTitle}>Schedule Date</Text>
              <Text style={styles.addLocationText}>Immdiately</Text>
            </View>
            <Image
              source={require('../../assets/icons/calendar.png')}
              resizeMode="contain"
              style={styles.calenderIcon}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      {open && (
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDateValue(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {flex: 1, backgroundColor: 'white', paddingHorizontal: 20},
  headerContainer: {
    ...globalStyles.flexRowView,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: 'white',
  },
  backArrow: {height: 15, width: 15},
  headerTitleContainer: {...globalStyles.flexRowView, width: 'auto'},
  headerTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  headerRightTitle: {
    fontSize: 16,
    color: '#1e7fc9',
    fontWeight: '600',
  },
  imgContainer: {flexDirection: 'row', marginTop: 40},
  postImg: {height: 110, width: 150},
  middleContainer: {paddingTop: 50},
  pannelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  pannelTitle: {fontSize: 16, fontWeight: '600'},
  locationBtn: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 75,
  },
  addLocationText: {fontSize: 16, fontWeight: '600', color: 'grey'},
  calenderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  calenderIcon: {height: 30, width: 30},
});

export default CreateNewPostDetail;
