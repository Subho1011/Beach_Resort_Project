import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { RoomProvider } from './context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: "/rooms",
    element: <Rooms/>
  },
  {
    path: "/rooms/:slug",
    element: <SingleRoom/>
  }
]);

root.render(
  <React.StrictMode>
    <RoomProvider>
      <RouterProvider router={router}></RouterProvider>
    </RoomProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: "/rooms",
    element: <Rooms/>
  },
  {
    path: "/rooms/:slug",
    element: <SingleRoom/>
  }
]); */