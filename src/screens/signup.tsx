import React, { useContext, useState } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppwriteContext } from '../appwrite/AppwriteContext';
import type { AuthStackParamList } from '../routes/authStack';

type SignupNavigationProp = NativeStackNavigationProp<
    AuthStackParamList,
    'signup'
>;

export default function Signup() {

    const context = useContext(AppwriteContext);

    const navigation = useNavigation<SignupNavigationProp>();

    // States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    if (!context) {
        throw new Error('Signup must be inside AppwriteProvider');
    }

    const { appwrite, setIsLoggedIn } = context;

    // Signup Function
    const handleSignup = () => {

        if (!name.trim() || !email.trim() || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password.length < 8) {
            Alert.alert('Error', 'Password must be at least 8 characters');
            return;
        }

        setLoading(true);

        appwrite.createAccount({
            name: name.trim(),
            email: email.trim(),
            password,
        })
            .then((response) => {

                if (response) {
                    setIsLoggedIn(true);
                } else {
                    Alert.alert('Signup Failed', 'Unable to create account');
                }

            })
            .catch((error) => {
                Alert.alert('Signup Failed', String(error));
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Create Account</Text>

            <Text style={styles.subtitle}>
                Sign up to get started
            </Text>

            {/* Name Input */}
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
            />

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Password Input */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {/* Signup Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignup}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Create Account</Text>
                )}
            </TouchableOpacity>

            {/* Navigate to Login */}
            <View style={styles.footer}>

                <Text style={styles.footerText}>
                    Already have an account?
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('login')}
                >
                    <Text style={styles.link}> Login</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        padding: 25,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 8,
    },

    subtitle: {
        fontSize: 16,
        color: '#64748B',
        marginBottom: 35,
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        padding: 16,
        borderRadius: 12,
        marginBottom: 18,
        fontSize: 16,
        color: '#1E293B',
    },

    button: {
        backgroundColor: '#2563EB',
        padding: 17,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },

    footerText: {
        color: '#64748B',
        fontSize: 15,
    },

    link: {
        color: '#2563EB',
        fontSize: 15,
        fontWeight: 'bold',
    },
});