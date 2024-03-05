import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import ErrorPage from './pages/Error/index.jsx'
// import MainLayout from './layout/MainLayout/index.jsx'
// import Home from './pages/Home/index.jsx'
// import PostDetail from './pages/PostDetail/index.jsx'
// import Register from './pages/Register/index.jsx'
// import Authors from './pages/Authors/index.jsx'
// import UserProfile from './pages/UserProfile/index.jsx'
// import MyPost from './pages/MyPost/index.jsx'
// import CreatePost from './pages/CreatePost/index.jsx'
// import EditPost from './pages/EditPost/index.jsx'
// import LoginRegister from './pages/LoginRegister/index.jsx'
// import Blog from './pages/Blog/index.jsx'
import MainProvider from './context/MainContext.jsx'
import { HelmetProvider } from 'react-helmet-async'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     errorElement: <ErrorPage />,
//     element: <MainLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "/detail/:id", element: <PostDetail /> },
//       { path: "/register", element: <Register /> },
//       { path: "/login", element: <LoginRegister /> },
//       { path: "/authors", element: <Authors /> },
//       { path: "/userProfile", element: <UserProfile /> },
//       { path: "/myPost", element: <MyPost /> },
//       { path: "/createPost", element: <CreatePost /> },
//       { path: "/editPost", element: <EditPost /> },
//       { path: "/blogs", element: <Blog /> }

//     ]
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
