import React, { useState } from "react"
import { StyleSheet, Text, View, Button, TextInput } from "react-native"

export default function App() {
	const [ person, setPerson ] = useState({
		name: "Athena",
		age: 30
	})

	return (
		<View style={styles.container}>
			<Text>Enter Name</Text>
			<TextInput style={styles.input} placeholder="e.g. John Doe" onChangeText={(val) => setPerson({...person, name: val})}/>
      <Text>Enter Age</Text>
			<TextInput style={styles.input} placeholder="e.g. 42" onChangeText={(val) => setPerson({...person, age: val})} multiline keyboardType='numeric'/>
			<TextInput>Name: {person.name}</TextInput>
			<Text>Age: {person.age}</Text>
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
	input: {
		borderWidth: 1,
		borderColor: "darkgray",
		padding: 8,
		margin: 10,
		width: 200
	}
})
