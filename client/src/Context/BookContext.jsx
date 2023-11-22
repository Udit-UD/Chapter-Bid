import { createContext, useContext, useState } from 'react';

const BookDataContext = createContext();

export const BookDataProvider = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const setBookData = (data) => {
    setSelectedBook(data);
  };

  return (
    <BookDataContext.Provider value={{ selectedBook, setBookData }}>
      {children}
    </BookDataContext.Provider>
  );
};

export const useBookDataContext = () => useContext(BookDataContext);
