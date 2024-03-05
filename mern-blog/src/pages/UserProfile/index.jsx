import React, { useContext, useState } from 'react'
import "./index.scss";
import { Link, useNavigate } from 'react-router-dom';
import UserPost from '../../components/UserPost';
import EditProfile from '../../components/EditProfile';
import { UserContext } from '../../context/UserContext';
import Cookies from 'js-cookie';
import MyPost from '../../components/MyPost';
const UserProfile = () => {
  const navigate = useNavigate()
  const { setToken, decode, setDecode } = useContext(UserContext)
  const [tab, setTab] = useState("post")
  function logOut() {
    setToken(null);
    setDecode(null)
    Cookies.remove("token");
    navigate("/")
  }
  return (
    <>
      <section id='profile'>
        <div className='hero '>
          <div className='hero_content'>
            <h1 className='libre-bold'>{decode?.name}</h1>
            <button onClick={logOut}>log out</button>
          </div>
        </div>
        <MyPost />
        <div className='profile_container'>
          <div className='profile_detail'>
            <div className='profile_title'>
              <h4 className='montserrat'>Profile</h4>
              <p className='libre-regular-i'>We nurture our collaborative creative thinking & high-end design outcomes to develop compelling work that sets us apart.</p>
            </div>
            <div className='profile_tab'>
              <button onClick={() => setTab("post")} className={`${tab === 'post' && "active_btn"} btn`}>Post</button>
              <button onClick={() => setTab("edit")} className={`${tab === 'edit' && "active_btn"} btn`}>Edit</button>
            </div>
            <div className='profile_content'>
              {
                tab === 'post' && <UserPost />
              }
              {
                tab === 'edit' && <EditProfile />
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserProfile