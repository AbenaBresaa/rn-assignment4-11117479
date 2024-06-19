import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ job, containerStyle }) => {
  const logos = {
    Facebook: require('../assets/Facebook.png'),
    Google: require('../assets/Google.png'),
    Apple: require('../assets/Apple.png'),
    BurgerKing: require('../assets/burgerKing.webp'),
    Beats: require('../assets/beats.png'),
    KFC: require('../assets/KFC.jpeg'),
  };

  return (
    <View style={[styles.card, containerStyle, job.style?.containerStyle]}>
      <Image source={logos[job.company]} style={[styles.logo, job.style?.logoStyle]} />
      <View style={styles.infoContainer}>
        <Text style={[styles.title, job.style?.titleStyle]}>{job.title}</Text>
        <Text style={[styles.company, job.style?.companyStyle]}>{job.company}</Text>
        <Text style={[styles.location, job.style?.locationStyle]}>{job.location}</Text>
        <Text style={[styles.salary, job.style?.salaryStyle]}>{job.salary}</Text>
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
    width: 40,
    height: 40,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: '#555',
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
