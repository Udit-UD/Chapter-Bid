import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { BookDataProvider } from './Context/BookContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BookDataProvider>
      <App />
    </BookDataProvider>
  </BrowserRouter>,
)
