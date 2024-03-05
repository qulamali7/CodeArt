import React, { useContext, useEffect, useState } from 'react'
import "./index.scss";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const EditProfile = () => {
  const navigate = useNavigate()
  const { token, decode, setDecode, setToken, addToken } = useContext(UserContext)
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({ ...state, [evt.target.name]: value });
  };
  const handleOnSubmit = evt => {
    evt.preventDefault();
    try {
      fetch(`http://localhost:3200/users/editProfile/${decode._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          password: state.password,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          setToken(null);
          setDecode(null);
          Cookies.remove("token");
          navigate("/")

        }) 
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className='edit_profile'>
        <div className='edit_profile_title'>
          <h2 className='montserrat'>Edit Profile</h2>
        </div>
        <form action="" onSubmit={handleOnSubmit}>
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Name</label>
          </div>
          <input type="name" id='name' name='name' value={state.name} onChange={handleChange} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Email</label>
          </div>
          <input type="email" id='email' name='email' value={state.email} onChange={handleChange} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Password</label>
          </div>
          <input type="password" id='password' name='password' value={state.password} onChange={handleChange} />
          <button>Edit</button>
        </form>
      </div>
    </>
  )
}

export default EditProfile