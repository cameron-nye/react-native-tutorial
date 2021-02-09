import React, { useState } from "react"
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native"

export default function App() {
	const [ people, setPeople ] = useState([
		{ name: "Cam", id: "1" },
		{ name: "Athena", id: "2" },
		{ name: "Roy", id: "3" },
		{ name: "Dempsey", id: "4" },
		{ name: "Payton", id: "5" },
		{ name: "Cam", id: "6" },
		{ name: "Athena", id: "7" },
		{ name: "Roy", id: "8" },
		{ name: "Dempsey", id: "9" },
		{ name: "Payton", id: "10" }
	])

	const pressHandler = id => {
		setPeople(prevState => prevState.filter(p => p.id !== id))
	}

	return (
		<View style={styles.container}>
			<FlatList
				numColumns={2}
				data={people}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={[
							styles.person,
							{ marginLeft: item.id % 2 === 0 ? 10 : 0, marginRight: item.id % 2 === 1 ? 10 : 0 }
						]}
						onPress={() => pressHandler(item.id)}
					>
						<Text>{item.name}</Text>
					</TouchableOpacity>
				)}
				keyExtractor={item => item.id} // Only necessary if data does not contain 'key' value
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 40
	},
	person: {
		marginTop: 24,
		padding: 30,
		backgroundColor: "lightblue",
		fontSize: 24,
		width: "50%",
		marginHorizontal: 10,
		textAlign: "center"
	}
})
