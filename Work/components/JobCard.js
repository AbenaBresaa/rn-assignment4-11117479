import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ job, containerStyle }) => {
  const logos = {
    Facebook: require('../assets/Facebook.png'),
    Google: require('../assets/Google.png'),
    Apple: require('../assets/Apple.png'),
    X : require('../assets/Xapp.jpg'),
    Tesla : require ('../assets/tesla.png'),
    Telecel: require('../assets/telecel.webp'),
    Range: require('../assets/rover.jpg'),
    Harvard: require('../assets/harvard.png'),
    BurgerKing: require('../assets/burgerKing.webp'),
    Beats: require('../assets/beats.png'),
    KFC: require('../assets/KFC.jpeg'),
    Total: require('../assets/total.png'),
    Nike: require('../assets/nike.jpeg'),
    Microsoft: require('../assets/microsoft.png'),
    McDonalds: require('../assets/McDonalds.png'),
    Pizza: require('../assets/eddys.png'),
  };

  return (
    <View style={[styles.card, job.style.containerStyle]}>
      <Image source={logos[job.company]} style={[styles.logo, job.style.logoStyle]} />
      <View style={styles.infoContainer}>
        <View style={styles.topSection}>
          <Text style={[styles.title, job.style.titleStyle]}>{job.title}</Text>
          <Text style={[styles.company, job.style.companyStyle]}>{job.company}</Text>
        </View>
        <View style={styles.bottomSection}>
          <Text style={[styles.location, job.style.locationStyle]}>{job.location}</Text>
          <Text style={[styles.salary, job.style.salaryStyle]}>{job.salary}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 320,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  logo: {
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSection: {
    marginBottom: 30,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: '#555',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 'auto',
  },
  location: {
    fontSize: 12,
    color: '#777',
  },
  salary: {
    fontSize: 12,
    color: '#00A699',
  },
});

export default JobCard;
