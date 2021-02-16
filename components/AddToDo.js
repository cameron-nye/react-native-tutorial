import React, { useState } from "react"
import { StyleSheet, TextInput, View, Button } from "react-native"

const AddToDo = ({ addItem }) => {
	const [ text, setText ] = useState("")
	return (
		<View style={styles.container}>
			<TextInput placeholder="What's next on your list?" style={styles.input} onChangeText={val => setText(val)} />
			<View style={styles.btnWrapper}>
				<Button
					title="Add"
					onPress={() => {
						addItem(text)
					}}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex"
	},
	input: {
		borderWidth: 1,
		borderColor: "#bbb",
		borderStyle: "solid",
		borderRadius: 4,
		padding: 8,
    backgroundColor: '#fff'
	},
	btnWrapper: {
		marginTop: 16,
		display: "flex"
	}
})

export default AddToDo
