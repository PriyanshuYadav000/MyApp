import React, { useContext, useState,useEffect } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ActivityIndicator,
} from 'react-native';

import { AppwriteContext } from '../appwrite/AppwriteContext';

type UserObj = {
    name: string;
    email: string;
};

export default function Home() {

    const context = useContext(AppwriteContext);

    const [loading, setLoading] = useState(false);

    const [userData, setUserData] = useState<UserObj | null>(null);

    if (!context) {
        throw new Error('Home must be inside AppwriteProvider');
    }

    const { appwrite, setIsLoggedIn } = context;

    const handleLogout = async () => {
      // appwrite.logout()
      // .then(() =>{
      //   setIsLoggedIn(false)
      //   Snakbar
      // })
        try {
            setLoading(true);

            const response = await appwrite.logout();

            if (response) {
                setIsLoggedIn(false);
            } else {
                Alert.alert('Error', 'Unable to logout');
            }

        } catch (error) {
            Alert.alert('Logout Failed', String(error));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!appwrite) return;
        // let isMounted = true;
        appwrite.getCurrentUser()
            .then((response) => {
                if (response) {
                    const user: UserObj = {
                        name: response.name,
                        email: response.email,
                    };
                    setUserData(user);
                }
            })
        // return () => {
        //     isMounted = false;
        // };
    }, [appwrite]);

    return (
        <View style={styles.container}>

            <Text style={styles.welcome}>Welcome!</Text>

            <Text style={styles.subtitle}>
                You are successfully logged in.
            </Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    My Home Screen
                </Text>

                <Text style={styles.cardText}>
                    Your Appwrite authentication is working.
                </Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogout}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Logout</Text>
                )}
            </TouchableOpacity>

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

    welcome: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 16,
        color: '#64748B',
    },

    card: {
        backgroundColor: '#FFFFFF',
        padding: 25,
        borderRadius: 15,
        marginTop: 30,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },

    cardTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 10,
    },

    cardText: {
        color: '#64748B',
        fontSize: 15,
    },

    button: {
        backgroundColor: '#DC2626',
        padding: 17,
        borderRadius: 12,
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
});