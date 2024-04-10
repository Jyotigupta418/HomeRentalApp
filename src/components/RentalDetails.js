import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../screens/Home';


const RentalDetails = ({ rentData }) => {
  return (
    <View style={{ marginTop: 10, marginBottom: 10 }}>
      {rentData.map((item, index) => (
        <View key={index} style={[styles.item, { backgroundColor: item.bgColor, marginTop: (index === 3 || index === 5) ? 12 : 0 }]}>
          {item.title2 ? (
            <View style={styles.container2}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={[styles.title, { fontStyle: 'italic', fontWeight: '500' }]}>{item.title2}</Text>
            </View>
          ) : (
            <View style={styles.container2}>
              <Text style={{ ...styles.title, width: '80%' }}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default RentalDetails;

