import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const ToDoItem = ({item, deleteItem}) => {

  return (
    <TouchableOpacity style={styles.item} onPress={() => deleteItem(item.key)}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4
  }
})

export default ToDoItem
