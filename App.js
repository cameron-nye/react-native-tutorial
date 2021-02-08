import React, { useState } from "react"
import { StyleSheet, Text, View, Button } from "react-native"

export default function App() {
	const [ name, setName ] = useState("Cam")
  const [person, setPerson] = useState({
    name: "Athena",
    age: 30
  })

	return (
		<View style={styles.container}>
			<Text style={styles.boldText}>My name is {name}</Text>
			<Text>Her name is {person.name} and her age is {person.age}</Text>
			<View style={styles.buttonContainer}>
				<Button title="Update Name" onPress={() => {
          setName("Athena")
          setPerson({...person, age: 55})
          }}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	buttonContainer: {
    marginTop: 20
  }
})
