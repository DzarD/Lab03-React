import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import { getBorrowedBooks, returnBook } from '../firebase/database';
import styles from '../styles/BorrowedBooksScreenStyles';

export default function BorrowedBooksScreen() {
  const [borrowedData, setBorrowedData] = useState({});

  useEffect(() => {
    getBorrowedBooks((data) => {
      setBorrowedData(data || {});
    });
  }, []);

  // borrowed books array
  const borrowedArray = Object.keys(borrowedData).map((borrowedId) => {
    const borrowedBook = borrowedData[borrowedId];
    return {
      borrowedId: borrowedId,
      title: borrowedBook.title,
      author: borrowedBook.author,
      description: borrowedBook.description,
    };
  });
//alert returned
  const handleReturn = (borrowedId) => {
    returnBook(borrowedId);
    Alert.alert('Returned', 'Book has been returned.');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>Author: {item.author}</Text>
      <Button title="Return" onPress={() => handleReturn(item.borrowedId)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={borrowedArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.borrowedId}
      />
    </View>
  );
}
