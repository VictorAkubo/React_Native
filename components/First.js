import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
const First = () => {
    const flat = ["victor", "ugbede", "akubo", "ugbede"]
    return (  
            <FlatList
                style={styles.flatted}
                data={flat}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.spaced}>
                        <Text style={styles.texted}>{item}</Text>
                    </TouchableOpacity>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled
            />
    )
}

export default First;
const styles = StyleSheet.create({
    flatted: {
      margin: 2,
      gap:5
    },
    spaced:{
      padding:5,
      margin:3,
      height:100,
      width:100,
      backgroundColor:"black",
      borderRadius:5,
      borderColor:1+"black"
    },
    texted:{
      color:"white",
      fontSize:14,
      alignItems:"center",
      justifyContent:"center"
    }
  })