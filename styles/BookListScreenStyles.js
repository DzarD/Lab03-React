import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    ...Platform.select({
      web: {
        height: '100vh', 
      },
    }),
  },
  listContainer: {
    flex: 1,
    overflow: 'hidden', 
  },
  scrollView: {
    flex: 1,
    ...Platform.select({
      web: {
        overflowY: 'auto', 
      },
    }),
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 10,
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
    textAlign: 'left',
    color: '#007AFF',
  },
  footerContainer: {
    height: 60,
    padding: 10,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
  },
});
