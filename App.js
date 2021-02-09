import React, { useState } from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"

export default function App() {
	const [ people, setPeople ] = useState([
		{ name: "Cam" },
		{ name: "Athena" },
		{ name: "Roy" },
		{ name: "Dempsey" },
		{ name: "Payton" },
		{ name: "Cam" },
		{ name: "Athena" },
		{ name: "Roy" },
		{ name: "Dempsey" },
		{ name: "Payton" }
	])
	return (
		<View style={styles.container}>
			<ScrollView>
				{people.map((p, i) => (
					<View key={i}>
						<Text style={styles.person}>{p.name}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 40,
		paddingHorizontal: 20,
	},
	person: {
		marginTop: 24,
		padding: 30,
		backgroundColor: "lightblue",
		fontSize: 24
	}
})
