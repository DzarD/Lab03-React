import React, { useEffect, useState } from 'react';
import { Text, Button, Alert, ScrollView } from 'react-native';
import { getBorrowedBooks, borrowBook } from '../firebase/database';
import styles from '../styles/BookDetailsScreenStyles';

export default function BookDetailScreen({ route, navigation }) {
  const { book, bookId } = route.params;
  const [borrowedCount, setBorrowedCount] = useState(0);
//get data
  useEffect(() => {
    getBorrowedBooks((data) => {
      const count = data ? Object.keys(data).length : 0;
      setBorrowedCount(count);
    });
  }, []);

  const handleBorrow = () => {
    if (borrowedCount >= 3) {
      Alert.alert('Limit Reached', 'You cannot borrow more than three books at a time.');
    } else {
      // borrow data
      const borrowBookData = {
        bookId: bookId,
        title: book.title,
        author: book.author,
        description: book.description,
      };
      borrowBook(borrowBookData);
      Alert.alert('Success', 'Book borrowed successfully!');
      navigation.navigate('BorrowedBooks');
    }
  };
//show data
  return (
    <ScrollView 
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <Text style={styles.title}>{book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Description: {book.description || 'No description available.'}</Text>
      <Button title="Borrow Book" onPress={handleBorrow} />
    </ScrollView>
  );
}
