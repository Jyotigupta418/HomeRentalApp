import { Alert, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Home'
import { colors } from '../styles/colors'
import { width } from '../utils/dimensions'
import {Calendar} from 'react-native-calendars';
// import DocumentPicker from 'react-native-document-picker'

const Services = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91 - ');
  const [selected, setSelected] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const handlePhoneNumberChange = (input) => {
    const MAX_DIGITS = 10;
    const digits = input.replace(/\D/g, '');
    if (input.startsWith('+91')) {
      setPhoneNumber(input.slice(0, MAX_DIGITS + '+91 - '.length));
    } else if (input === '+91') {
      setPhoneNumber('+91 - ');
    }
  };

  return (
    <ScrollView style={{...styles.container, backgroundColor: colors.white, marginBottom: 50}}>
      <Text style={{ ...styles.titleSection }}>New Request</Text>
      <Text style={{ ...styles2.subTitleSection }}>Service Type</Text>
      <TextInput placeholder='Search' placeholderTextColor={colors.gray} style={styles2.textField} />

      <Text style={{ ...styles2.subTitleSection }}>Sub Category</Text>
      <TextInput placeholder='Warmer not working' placeholderTextColor={colors.gray} style={styles2.textField} />

      <Text style={{ ...styles2.subTitleSection }}>Description</Text>
      <TextInput placeholder='Short note' placeholderTextColor={colors.gray} multiline={true} style={{ ...styles2.textField, height: 100, textAlignVertical: 'top', alignItems: 'flex-start' }} />

      <Text style={{ ...styles.titleSection }}>Attach Photo/Video</Text>
      <Text style={styles2.subTitleSection}>
        Need at least one photo/video for quick response{'\n'}
        (File size should not exceed 10Mb)
      </Text>

      <TouchableOpacity style={{ height: width * 0.25, width: width, backgroundColor: colors.lightGray, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: colors.darkGray }} >Front</Text>
      </TouchableOpacity>

      <Text style={{ ...styles.titleSection }}>When you prefer us to visit</Text>
      <Text style={{...styles2.subTitleSection, marginTop: 15}}>Pick a date</Text>

      <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)} style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.gray, borderRadius: 3, padding: 8, width:width * 0.35 }}>
        <Text style={{color: colors.black, width: '80%'}}>{selected ? selected : 'Select Date'}</Text> 
    
         
        <Image  source={require('../assets/images/calendar.png')} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      {showCalendar && (
        
        <Modal visible={showCalendar} transparent={true} onRequestClose={() => setShowCalendar(false)} >
          <TouchableOpacity onPress={() => setShowCalendar(false)} style={{flex: 1,justifyContent: 'center',backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <Calendar
            onDayPress={(day) => {
              setSelected(day.dateString);
              setShowCalendar(false);
            }}
            markedDates={{[selected]: {selected: true, disableTouchEvent: true, selectedColor: colors.primary,}}}
            style={{ width: width * 0.8, height: width * 0.9, backgroundColor: 'white', borderRadius: 10, marginHorizontal: width * 0.1, padding: 10, }} 
            enableSwipeMonths={true}
            theme={{ monthTextColor: colors.primary, textMonthFontWeight: '700', textDayFontWeight: '500', arrowColor: colors.primary, }}
          />
          </TouchableOpacity>
          
        </Modal>
      )}

      <Text style={{...styles2.subTitleSection, marginTop: 15}}>Alternatie Contact Number</Text>
      <TextInput
      placeholder='Enter Number'
      placeholderTextColor={colors.gray}
      style={{ ...styles2.textField, height: 40 }}
      value={phoneNumber}
      onChangeText={handlePhoneNumberChange}
      keyboardType='numeric' 
    />

    <TouchableOpacity onPress={() => Alert.alert('Submitted')}  style={{...styles2.submitbtn}}>
       <Text style={{color: colors.white, fontWeight: '500'}}>Submit</Text>
    </TouchableOpacity>

    </ScrollView>
  )
}

export default Services

const styles2 = StyleSheet.create({
  textField: {
    color: colors.black,
    fontSize: width * 0.035,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 3,
    padding: 8,
    marginVertical: width * 0.005,
    backgroundColor: colors.white
  },
  subTitleSection: {
    fontSize: 14,
    marginVertical: 10,
    color: '#111'
  },
  submitbtn: {
    backgroundColor: colors.primary,
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 35,
    marginBottom: 20
  }

})

