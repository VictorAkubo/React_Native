import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View, Dimensions, Text, TouchableOpacity, Linking, Image } from 'react-native'
import images from "./images/download.jpg"
import First from './components/First'
import Area from './components/Area'
import Realscroll from './components/Realscroll'
const dimension = Dimensions.get("screen")
const App = () => {
  const [user, setuser] = useState(true);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  if (user) {
    return (

      <SafeAreaView >

        <Image source={ }
        <View style={styles.whole}>
          <Text style={styles.title}>Register</Text>
          <View style={styles.position}>
            <Text style={styles.text}>Username</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='enter username'
            />
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='enter password'
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.all}>
            <Text>Do you have Acoount ?</Text>
            <Text>Login</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView>

      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => {
            return <ScreenHeaderBtn iconurl={icons.menu} dimension="60%" />
          },
          headerRight: () => {
            return <ScreenHeaderBtn iconurl={images.profile} dimension="100%" />
          },
          headerTitle: ""

        }}
      />
      <ScrollView>
        <First />
        <Area />
        <Realscroll />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    fontSize: 15
  },
  btnText: {
    color: "white"
  },
  whole: {
    gap: 20,
  },
  title: {
    textAlign: "center",
    /*  fontWeight:10, */
    fontSize: 20,
  },
  all: {
    gap: 6,
    alignItems: "center"
  },
  position: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  input: {

  },
  btn: {
    width: "50%",
    alignItems: "center",
    textAlign: "center",
    height: "20%",
    color: "white",
    backgroundColor: "black",
    textDecorationColor: "white",
    marginLeft: 6,
    marginRight: 6
  }
})