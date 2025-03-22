import { getDatabase, ref, onValue, push, remove } from "firebase/database";
import app from "./firebaseConfig";

const db = getDatabase(app);


export const getAvailableBooks = (callback) => {
  const booksRef = ref(db, 'books');
  onValue(booksRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};


export const getBorrowedBooks = (callback) => {
  const borrowedRef = ref(db, 'borrowed');
  onValue(borrowedRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};


export const borrowBook = (book) => {
  const borrowedRef = ref(db, 'borrowed');
  push(borrowedRef, book);
};


export const returnBook = (borrowedId) => {
  const bookRef = ref(db, `borrowed/${borrowedId}`);
  remove(bookRef);
};
