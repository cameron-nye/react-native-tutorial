import React, { useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import AddToDo from "./components/AddToDo"
import Header from './components/Header'
import ToDoItem from "./components/ToDoItem"


export default function App() {
	const [ todos, setTodos ] = useState([
		{ text: "buy coffee", key: "1" },
		{ text: "create an app", key: "2" },
		{ text: "play on the switch", key: "3" }
	])

  const deleteItem = (key) => {
    setTodos(prevState => prevState.filter(item => item.key !== key))
  }

  const addItem = text => {
    setTodos(prevState => [...prevState, {text, key: todos.length + 1}])
  }

	return (
		<View style={styles.container}>
      <Header />
			<View style={styles.content}>
        <AddToDo addItem={addItem}/>
				<View style={styles.list}>
					<FlatList data={todos} renderItem={({ item }) => <ToDoItem item={item} deleteItem={deleteItem}/>} />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	content: {
		padding: 40
	},
	list: {
		marginTop: 20
	}
})
