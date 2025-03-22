import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f8ff',
    ...Platform.select({
      web: {
        height: '100vh', 
        overflowY: 'auto', 
      },
    }),
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
    color: '#007AFF',    
  },
});
