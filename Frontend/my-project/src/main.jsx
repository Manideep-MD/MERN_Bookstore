import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import store from './Redux/Store/Store.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Provider store={store}>
    <App />
    <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </Provider>
    </div>
  </StrictMode>,
)
