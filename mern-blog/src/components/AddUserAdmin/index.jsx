import React, { useContext } from 'react'
import "./index.scss";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
const AddUserAdmin = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({ ...state, [evt.target.name]: value });
  };
  const handleOnSubmit = evt => {
    evt.preventDefault();
    try {
      fetch("http://localhost:3200/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          password: state.password,
          password2: state.password2
        }),
      })
        .then(x => navigate("/adminPanel"))
    } catch (error) {
      setError(error)
    }

  };
  return (
    <>
      <div className='add_tab_page'>
        <h2 className='libre-regular-i add_tab_page_title ' >Add User</h2>
        <form onSubmit={handleOnSubmit} className='add_tab_page_form'>
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="name">Name</label>
          </div>
          <input type="name" id='name' name='name' className='add_tab_page_form_input' value={state.name} onChange={handleChange} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="email">Email</label>
          </div>
          <input type="email" id='email' name='email' value={state.email} className='add_tab_page_form_input' onChange={handleChange} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="password">Password</label>
          </div>
          <input type="password" id='password' value={state.password} className='add_tab_page_form_input' name='password' onChange={handleChange} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="password2">Password Confirm</label>
          </div>
          <input type="password" id='password2' value={state.password2} className='add_tab_page_form_input' name='password2' onChange={handleChange} />
          <button className='add_tab_page_form_btn'>Add</button>
        </form>
      </div>
    </>
  )
}

export default AddUserAdmin