import React, {useState} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {Colors} from 'react-native-paper'
import Country from './Country'
import * as D from '../data'
import {useAsync} from '../hooks'

// prettier-ignore
export default function Fetch() {
    const [countries, setCountries] = useState<D.ICountry[]>([])
    const [error, resetError] = useAsync(async () => {
        setCountries([])
        resetError()
        // await Promise.reject(new Error('some error occurs'))
        const countries = await D.getCountries()
        setCountries(countries)
    })

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Fetch</Text>
            {error && <Text>{error.message}</Text>}
            <FlatList data={countries} showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Country country={item} />}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {backgroundColor: Colors.blue100, flex: 1, alignItems: 'center'},
    title: {fontSize: 30, fontWeight: '600'},
    separator: {borderBottomColor: Colors.blue50, borderBottomWidth: 1}
})