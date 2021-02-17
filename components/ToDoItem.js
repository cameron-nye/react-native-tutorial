import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

const ToDoItem = ({ item, deleteItem }) => {
	return (
		<TouchableOpacity style={styles.itemWrapper} onPress={() => deleteItem(item.key)}>
			<View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#333'/>
				<Text style={styles.itemText}>{item.text}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		borderColor: "#bbb",
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 4,
		backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center'
	},
  itemText: {
    marginLeft: 10
  }
})

export default ToDoItem
