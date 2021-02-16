import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>1</Text>
      <Text style={styles.boxTwo}>2</Text>
      <Text style={styles.boxThree}>3</Text>
      <Text style={styles.boxFour}>4</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#ddd",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  boxOne: {
    backgroundColor: 'violet',
    padding: 10,
    borderWidth: 1,
    borderColor: "dodgerblue",
    borderRadius: 6,
    flex: 1
  },
  boxTwo: {
    backgroundColor: 'gold',
    padding: 20,
    borderWidth: 1,
    borderColor: "dodgerblue",
    borderRadius: 6,
    flex: 1
  },
  boxThree: {
    backgroundColor: 'coral',
    padding: 30,
    borderWidth: 1,
    borderColor: "dodgerblue",
    borderRadius: 6,
    flex: 1
  },
  boxFour: {
    backgroundColor: 'lightgreen',
    padding: 40,
    borderWidth: 1,
    borderColor: "dodgerblue",
    borderRadius: 6
  },
})

export default Sandbox
