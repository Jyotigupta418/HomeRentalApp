import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/colors'
import { width, height } from '../utils/dimensions';
import { fetchServiceData } from '../utils/serviceUtils';
import { fetchRentalData } from '../utils/rentDataUtils';
import { fetchPopularServices } from '../utils/popularServices';


const Home = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const OtherAmienities = [
    { iconUrl: require('../assets/images/parking.png'), title: 'Under Cover Parking' },
    { iconUrl: require('../assets/images/gym.png'), title: 'Gym' },
    { iconUrl: require('../assets/images/swimming-pool.png'), title: 'Swimming Pool' },
  ]

  const rentData = fetchRentalData();
  const serviceData = fetchServiceData();
  const popularServices = fetchPopularServices();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}  >

      <View style={{ ...styles.container2, marginVertical: 15 }}>
        <View style={styles.searchInput}>
          <TextInput placeholder='Search' placeholderTextColor={colors.gray} style={{ width: '90%', color: colors.darkGray, fontSize: width * 0.035 }} />
          <Ionicons name="search" size={width * 0.05} color={colors.gray} />
        </View>
        <Ionicons name="notifications-outline" size={width * 0.08} color={colors.primary} style={{ marginRight: 10 }} />
      </View>

      <View style={{ flex: 1, backgroundColor: colors.white, borderTopWidth: 2, borderColor: colors.borderColor, paddingHorizontal: 15, }}>

        <View style={{ ...styles.container2, paddingVertical: 15, borderBottomWidth: 2, borderColor: colors.borderColor }}>

          <View style={{ width: width * 0.15, height: width * 0.15, borderRadius: height / 2, overflow: 'hidden' }}>
            <Image source={require('../assets/images/profile.jpg')} style={{ width: '100%', height: '100%' }} />
          </View>

          <View style={{ width: width * 0.6 }}>
            <Text style={{ color: colors.black, fontWeight: '600', fontSize: width * 0.045 }}>Hi  Ethan! </Text>
            <Text style={{ color: colors.darkGray, fontWeight: '400', fontSize: width * 0.035, }}>A3, Rich Avenue, Symphony block California 11203</Text>
          </View>
          <Text style={{ color: colors.darkGray, alignSelf: 'flex-start' }}>1/2</Text>

        </View>

        <View style={{ ...styles.container2, flexWrap: 'wrap' }}>

          <TouchableOpacity style={{ ...styles.container2, ...styles.filterContainer, }}>
            <Image source={require('../assets/images/right-triangle.png')} style={styles.filterIcon} />
            <Text style={styles.filterText}>1400 sq.ft</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...styles.container2, ...styles.filterContainer, }}>
            <Image source={require('../assets/images/bedroom.png')} style={styles.filterIcon} />
            <Text style={styles.filterText}>2 BHK</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...styles.container2, ...styles.filterContainer, }}>
            <Image source={require('../assets/images/bathroom.png')} style={styles.filterIcon} />
            <Text style={styles.filterText}>2 Bathroom</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...styles.container2, ...styles.filterContainer, }}>
            <Image source={require('../assets/images/garage.png')} style={styles.filterIcon} />
            <Text style={styles.filterText}>1 Garage</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.titleSection}>Other Amienities</Text>

        <View style={{ ...styles.container2, flexWrap: 'wrap', justifyContent: 'flex-start' }}>

          <TouchableOpacity style={{ ...styles.container2, ...styles.filterContainer, paddingVertical: 6, marginRight: 15, marginVertical: 5 }}>
            <Image source={OtherAmienities[0].iconUrl} style={styles.amenitiesIcon} />
            <Text style={styles.amenitiesText}>{OtherAmienities[0].title}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...styles.container2, ...styles.filterContainer, paddingVertical: 6, marginRight: 15, marginVertical: 5 }}>
            <Image source={OtherAmienities[1].iconUrl} style={styles.amenitiesIcon} />
            <Text style={styles.amenitiesText}>{OtherAmienities[1].title}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...styles.container2, ...styles.filterContainer, paddingVertical: 6, marginRight: 15, marginVertical: 5 }}>
            <Image source={OtherAmienities[2].iconUrl} style={styles.amenitiesIcon} />
            <Text style={styles.amenitiesText}>{OtherAmienities[2].title}</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.titleSection}>Rental Details</Text>

        {/* <RentalDetails rentData={rentData} /> */}

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          {rentData.map((item, index) => (
            <View key={index} style={[styles.item, { backgroundColor: item.bgColor, marginTop: (index === 3 || index === 5) ? 12 : 0 }]}>
              {item.title2 ? (
                <TouchableOpacity style={styles.container2}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={[styles.title, { fontStyle: 'italic', fontWeight: '500' }]}>{item.title2}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.container2}>
                  <Text style={{ ...styles.title, width: '80%' }}>{item.title}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

      </View>

      <TouchableOpacity onPress={() => setIsContentVisible(!isContentVisible)} style={{ position: 'relative' }}>
        <Ionicons name={isContentVisible ? "chevron-up" : "chevron-down"} size={width * 0.045} color={colors.white} style={{ alignSelf: 'center', padding: 1.5, backgroundColor: colors.primary, borderRadius: (width * 0.05) / 2, marginTop: -10, marginBottom: isContentVisible ? 0 : 50 }} />
      </TouchableOpacity>

      {isContentVisible && (

        <View style={{ flex: 1, marginBottom: 50, }}>
          <Text style={{ ...styles.titleSection }}>Quick Notification</Text>

          <TouchableOpacity style={{ marginVertical: 10, padding: 15, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.primary, borderRadius: 5, }} >
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10, borderBottomWidth: 1, borderColor: colors.lightGray }}>
              <Image source={require('../assets/images/house.jpg')} style={{ width: width * 0.2, height: width * 0.24, borderRadius: 8 }} />

              <View style={{ alignItems: 'flex-start', marginLeft: width * 0.06 }} >
                <Text style={{ color: colors.primary, fontWeight: '600', fontSize: width * 0.03 }}>Upcoming rent</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                  <View>
                    <Text style={{ fontSize: width * 0.028, color: colors.black, fontWeight: '700', marginTop: 10 }}>$ 600</Text>
                    <Text>for month of Sept</Text>
                  </View>
                  <View style={{ marginLeft: width * 0.1 }}>
                    <Text style={{ fontSize: width * 0.028, color: colors.black, fontWeight: '700', marginTop: 10 }}>$ 0</Text>
                    <Text>Old Balance</Text>
                  </View>
                </View>

                <View>
                  <Text style={{ fontSize: width * 0.028, color: colors.black, fontWeight: '700', marginTop: 10, }}>5 Jul 2023</Text>
                  <Text style={{ marginBottom: 10 }}>Old Balance</Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10 }}>
              <View>
                <Text style={{ fontSize: width * 0.028, color: colors.black, fontWeight: '700' }}>December 2023</Text>
                <Text style={{ fontSize: width * 0.025, color: colors.black, fontWeight: '400' }}>Renewal Date</Text>
              </View>

              <View style={{ marginLeft: width * 0.1 }}>
                <Text style={{ fontSize: width * 0.028, color: colors.black, fontWeight: '700' }}>November 5 2023</Text>
                <Text style={{ fontSize: width * 0.025, color: colors.black, fontWeight: '400' }}>Renewal Due Date</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ ...styles.container2, }}>
            <Text style={{ ...styles.titleSection }}>Service Request</Text>
            <TouchableOpacity>
              <Text style={{ color: colors.viewAll }}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: colors.white, }}>
            {serviceData.map((item, index) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 1, }} key={index}>

                <View style={{ width: width * 0.008, backgroundColor: item.color, height: width * 0.13, borderRadius: 10, marginVertical: width * 0.0002 }}></View>

                <View style={{ width: width * 0.42, paddingLeft: 10 }}>
                  <Text style={{ width: '100%', fontSize: 12, color: colors.darkGray }} >{item.date}</Text>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: colors.darkGray }} >Service : {item.Service}</Text>
                </View>

                <View style={{ width: width * 0.25 }}>
                  <Text style={{ fontSize: 12, color: colors.darkGray }}>Priority</Text>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: colors.darkGray }}>{item.priority}</Text>
                </View>

                <Text>{item.status}</Text>

              </View>
            ))}
          </View>

          <View style={{ ...styles.container2, }}>
            <Text style={{ ...styles.titleSection }}>Popular Service</Text>
            <TouchableOpacity>
              <Text style={{ color: colors.viewAll }}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularServices.map((item, index) => (
              <View style={{ alignItems: 'center', marginVertical: 1, height: width * 0.2, width: width * 0.22, backgroundColor: colors.white, marginHorizontal: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 6 }} key={index}>
                <Image source={item.iconUrl} style={{ height: width * 0.09, width: width * 0.09 }} />
                <Text style={{ color: colors.darkGray, fontSize: 12, fontWeight: '500', marginTop: 5 }}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>

        </View>
      )}
    </ScrollView>
  )
}

export default Home

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.borderColor
  },
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.lightGray,
    width: '86%',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterContainer: {
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderWidth: 1.5,
    borderColor: colors.lightGray,
    borderRadius: 4,
  },
  filterIcon: {
    width: 15,
    height: 15,
  },
  filterText: {
    fontSize: width * 0.027,
    color: colors.mediumGray,
    fontWeight: '500',
    marginLeft: 5
  },
  amenitiesIcon: {
    width: 20,
    height: 20,
  },
  amenitiesText: {
    fontSize: width * 0.031,
    color: colors.mediumGray,
    fontWeight: '500',
    marginLeft: 10,
  },
  titleSection: {
    color: colors.black,
    fontWeight: '600',
    fontSize: width * 0.032,
    marginTop: width * 0.025,
    marginBottom: 5
  },
  item: {
    padding: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: width * 0.03,
    fontWeight: '600',
    color: colors.darkGray,
  },
  price: {
    fontSize: width * 0.03,
    color: colors.darkGray,
    fontWeight: '800',
  },


})