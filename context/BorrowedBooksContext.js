import React, { createContext, useState } from 'react';


export const BorrowedBooksContext = createContext();

// provider component
export function BorrowedBooksProvider({ children }) {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  return (
    <BorrowedBooksContext.Provider value={{ borrowedBooks, setBorrowedBooks }}>
      {children}
    </BorrowedBooksContext.Provider>
  );
}
