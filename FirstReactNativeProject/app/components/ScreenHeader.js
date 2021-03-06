import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Pressable } from 'react-native';

import colors from '../config/colors'
import edge from '../config/edge'

function ScreenTitle({ children }) {
    const navigation = useNavigation();

    return (
        <View style={[styles.header]}>
            <Pressable style={styles.hamburger} onPress={() => navigation.openDrawer()}>
                {/* <View style={styles.hamburger} /> */}
            </Pressable>
            <View>
                <Text style={styles.titleText}>{children}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.heading,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: 50,
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 15
    },
    hamburger: {
        width: 50,
        borderTopRightRadius: edge.global,
        borderBottomRightRadius: edge.global,
        borderRightWidth: 2,
    }
})

export default ScreenTitle;