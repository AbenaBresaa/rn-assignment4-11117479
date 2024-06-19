import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, Image } from 'react-native';

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      navigation.navigate('Home', { userName: name, userEmail: email });
    } else {
      alert('Please enter both name and email.');
    }
  };

  const Line = require('./assets/Line.png');
  const Apple = require('./assets/Apple.png');
  const Google = require('./assets/Google.png');
  const Facebook = require('./assets/Facebook.png');
 
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Jobizz</Text>
        <Text style={styles.subheader}>Welcome Back 👋</Text>
        <Text style={styles.subhead}>Let's log in Apply to jobs!</Text>
      </View>
      <View style={styles.main}>
        <TextInput
          style={styles.placeholder}
          placeholder='Name'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.placeholder}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <Pressable
          onPress={handleLogin}
          style={[styles.button]}
          disabled={!name || !email}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Log in</Text>
        </Pressable>
        <View style={styles.footer}>
        <Image style={styles.line} source={Line}/>
        <Text style={styles.last}>Or continue with</Text> 
        <Image style={styles.line} source={Line}/>
        </View>
       <View style={styles.icons}>
       <Image style={styles.icon} source={Apple}/>
       <Image style={styles.icon} source={Google}/>
       <Image style={styles.icon} source={Facebook}/>
       </View>
       <View style={styles.registerContainer}>
          <Text style={{ color:'#0D0D26', opacity:'40%' }}>Haven't an account? </Text>
          <Text style={{ color: '#356899' }}> Register</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginLeft: 30,
    marginTop: 40,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#356899",
    marginBottom: 25,
  },
  subheader: {
    color: "#0D0D26",
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 15,
  },
  subhead: {
      opacity:'40%',
      fontSize:'14px',
      fontWeight:'400',
      fontSize: 'Regular/14px',
      lineHeight:'22.4px',
      width:'170px',
      height:'22px',
      letterSpacing:'-1%',
    },  
  placeholder: {
    fontSize: 20,
    borderWidth: 0.5,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderColor: '#AFB0B6',
    width: '80%',
   
  },
  button: {
    width: 327,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#356899",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
 last:{
    fontWeight: 400,
    fontSize: 13,
    color:' #AFB0B6',
    marginHorizontal: 20,
    color:'#0D0D26',
    opacity:'40%',
 }, 
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    width: 98, 
    height: 1,  
    backgroundColor: '#AFB0B6', 
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  icon:{
    marginHorizontal: 10,
  },
  registerContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Login;