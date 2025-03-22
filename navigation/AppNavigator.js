import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from '../screens/BookListScreen';
import BookDetailScreen from '../screens/BookDetailsScreen';
import BorrowedBooksScreen from '../screens/BorrowedBooksScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#00008B', // bluish
  },
  headerTintColor: '#fff',       // white
};

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="BookList">
      <Stack.Screen
        name="BookList"
        component={BookListScreen}
        options={{
          title: 'Available Books',
          ...screenOptions
        }}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{
          title: 'Book Detail',
          ...screenOptions
        }}
      />
      <Stack.Screen
        name="BorrowedBooks"
        component={BorrowedBooksScreen}
        options={{
          title: 'Borrowed Books',
          ...screenOptions
        }}
      />
    </Stack.Navigator>
  );
}
