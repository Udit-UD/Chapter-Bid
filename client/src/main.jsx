import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BookDataProvider } from "./Context/BookContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/configureStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <BookDataProvider>
        <App />
      </BookDataProvider>
    </Provider>
  </BrowserRouter>
);
