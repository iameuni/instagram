import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'

const title = 'CopyMe'
export default function CopyMe() {
    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {padding: 5, backgroundColor: Colors.blue900, flex: 1},
    text: {fontSize: 20, color: 'white'},
})