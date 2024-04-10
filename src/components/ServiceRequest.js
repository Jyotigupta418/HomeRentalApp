import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../styles/colors';
import { width } from '../utils/dimensions';


const ServiceRequest = ({ serviceData }) => {

  return (
    <View style={{backgroundColor: colors.white }}>
      {serviceData.map((item, index) => (
        <View style={{flexDirection: 'row',alignItems: 'center', marginVertical: 6, paddingHorizontal: 10}} key={index}>
            <View style={{width: width * 0.42}}>
                <Text style={{width: '100%', fontSize: 12, color: colors.darkGray}} >{item.date}</Text>
                <Text style={{fontSize: 14, fontWeight: '600', color: colors.darkGray}} >Service : {item.Service}</Text>
            </View>

            <View style={{width: width*0.25}}>
                <Text style={{fontSize: 12, color: colors.darkGray}}>Priority</Text>
                <Text style={{fontSize: 14, fontWeight: '600', color: colors.darkGray}}>{item.priority}</Text>
            </View>

            <Text>{item.status}</Text>

        </View>
      ))}
    </View>
  );
};

export default ServiceRequest;

