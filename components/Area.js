import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const dimension = Dimensions.get("screen")
const viewed = [
    {
        id: 1,
        reg: "Number 1"
    },
    {
        id: 2,
        reg: "Number 2"
    },
    {
        id: 3,
        reg: "Number 3"
    }]
export default function Area() {
    return (
        <ScrollView horizontal style={styles.areaview}>
            {viewed.map(item => (
                <TouchableOpacity
                    key={item.id}
                    style={styles.btn}
                >
                    <Text>{item.reg}</Text>
                </TouchableOpacity>

            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    areaview: {
        margin: 5,
    },
    btn: {
        borderRadius: 6,
        margin:3,
        width: dimension.width,
        height: (dimension.height) / 3,
        backgroundColor: "gray"
    }
})