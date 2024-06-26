import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import JobCard from './components/JobCard';
import { featuredJobs } from './components/FeaturedJobs'; 
import { popularJobs } from './components/PopularJobs'; 

const Home = ({ route }) => {
  const { userName, userEmail } = route.params;

  const Lady = require('./assets/lady.jpeg');

  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topLeftContainer}>
        <Text style={styles.topLeftText}>{userName}</Text>
        <Text style={styles.topLeft}>{userEmail}</Text>
      </View>
      <Image style={styles.picture} source={Lady} />
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search a job or position"
            placeholderTextColor="#999"
          />
        </View>
      </View>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {featuredJobs.map((job, index) => (
          <JobCard key={index} job={job} containerStyle={styles.featuredJobCard} />
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <View style={styles.verticalScroll}>
        {popularJobs.map((job, index) => (
          <JobCard key={index} job={job} containerStyle={styles.popularJobCard} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35, 
  },
  topLeftContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  topLeftText: {
    fontSize: 16,
    color: '#0D0D26',
    fontWeight: 'bold',
  },
  topLeft: {
    fontSize: 16,
    color: '#0D0D26',
    opacity: 0.4,
  },
  picture: {
    width: 54,
    height: 54,
    position: 'absolute',
    top: 20,
    right: 20, 
    borderRadius: 27,
  },
  searchContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',  
    alignItems: 'center',
    height: 55,
    width: 360,
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 20,  
    marginBottom: 20,
  },
  searchIcon: {
    marginLeft: 20,
    paddingLeft: 20,
  },
  searchInput: {
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
  horizontalScroll: {
    marginLeft: 10,
  },
  verticalScroll: {
    marginLeft: 20,
  },
  featuredJobCard: {
    width: 200,
    marginRight: 10,
  },
  popularJobCard: {
    width: '90%',
    marginBottom: 10,
  },
});

export default Home;
