import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import UserProfile from './pages/UserProfile'
import PostDetail from './pages/PostDetail'
import LoginRegister from './pages/LoginRegister'
import ErrorPage from './pages/Error'
import AdminPanel from './pages/AdminPanel'
import PrivateRoute from './routes/PrivateRoute'
import AddAdmin from './pages/AddAdmin'
import UpdateCategory from './pages/UpdateCategory'
import UpdatePosts from './pages/UpdatePosts'
import UpdateUser from './pages/UpdateUser'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/userProfile' element={<UserProfile />} />
            <Route path='/detail/:id' element={<PostDetail />} />
            <Route path='/login' element={<LoginRegister />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
          <Route element={<PrivateRoute roles={["admin"]} />}>
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/addAdmin" element={<AddAdmin />} />
            <Route path="/updateCategory/:id" element={<UpdateCategory />} />
            <Route path="/updatePosts/:id" element={<UpdatePosts />} />
            <Route path="/updateUser/:id" element={<UpdateUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
