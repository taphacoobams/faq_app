import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ici, vous pouvez mettre en place la logique d'authentification.
    // Après l'authentification réussie, vous pouvez naviguer vers la page principale de l'application.
    navigation.navigate('HomeScreen');
  };

  const handleForgotPassword = () => {
    // Ici, vous pouvez mettre en place la logique de réinitialisation du mot de passe.
    alert('Un e-mail de réinitialisation du mot de passe a été envoyé à votre adresse e-mail.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/epsi-logo.png')} style={styles.leftLogo} />
        <Image source={require('../assets/images/faq.png')} style={styles.logo} />
        <Image source={require('../assets/images/wis-logo.png')} style={styles.rightLogo} />
      </View>
      <Text style={styles.title}>EPSICONNECT</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  leftLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  rightLogo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
