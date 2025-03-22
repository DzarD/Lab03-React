import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#e6f7ff', 
    ...Platform.select({
      web: {
        height: '100vh', 
        overflowY: 'auto', 
      },
    }),
  },
  scrollContent: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', 
    color: '#005BB5',   
  },
});
