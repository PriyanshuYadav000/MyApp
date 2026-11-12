
import React, { JSX } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? '#000' : '#fff' }
            ]}
        >
            <Text style={isDarkMode ? styles.DarkText : styles.writeText}>
                Hello World
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    writeText: {
        color: '#000', // Black text in light mode
    },
    DarkText: {
        color: '#fff', // White text in dark mode
    },
});

export default AppPro;
