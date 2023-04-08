import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeVideos from './components/HomeVideos';
import ErrorComponent from './components/ErrorComponent';
import VideoDetail from './components/VideoDetail';
import LikedVideos from './components/LikedVideos';
import SearchVideoList from './components/SearchVideoList';



const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement: <ErrorComponent />,
    children:[{
      path:"/",
      element:<HomeVideos />
    },
    {
      path:"/videoDetail",
      element:<VideoDetail />
    },
    {
      path:"/likedVideos",
      element:<LikedVideos />
    },
    {
      path:"/searchVideoList",
      element:<SearchVideoList />
    }
  ]
  }
])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
