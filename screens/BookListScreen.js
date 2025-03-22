import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import { getAvailableBooks } from '../firebase/database';
import styles from '../styles/BookListScreenStyles';

export default function BookListScreen({ navigation }) {
  const [books, setBooks] = useState({});

  useEffect(() => {
    getAvailableBooks((data) => {
      setBooks(data || {});
    });
  }, []);

  // books array
  const booksArray = Object.keys(books).map((key) => {
    const book = books[key];
    return {
      key: key,
      title: book.title,
      author: book.author,
      description: book.description,
    };
  });
//show data 
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={styles.scrollContent}
        >
          {booksArray.map((item) => (
            <TouchableOpacity
              key={item.key}
              onPress={() =>
                navigation.navigate('BookDetail', { book: item, bookId: item.key })
              }
            >
              <View style={styles.itemContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.author}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <Button
          title="View Borrowed Books"
          onPress={() => navigation.navigate('BorrowedBooks')}
        />
      </View>
    </View>
  );
}
