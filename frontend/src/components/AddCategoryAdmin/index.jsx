import React, { useContext, useState } from 'react'
import "./index.scss";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
const AddCategoryAdmin = () => {
    const {token} = useContext(UserContext)
    const navigate = useNavigate()
    const [name, setName] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3200/category", {
            method: "POST",
            // headers: {
            //     Accept: 'application.json',
            //     'Content-Type': 'application/json',
            //     // Authorization: `Bearer ${token}`,
            // },
            body: JSON.stringify({ name: name })
        })
            .then(x => navigate("/adminPanel"))
    }
    function handleChange(e, stateChanger) {
        stateChanger(e.target.value)
    }
    return (
        <>
            <div className='add_tab_page'>
                <h2 className='libre-regular-i add_tab_page_title' >Add Category</h2>
                <form onSubmit={handleSubmit} className='add_tab_page_form'>
                    <div className='input_title'>
                        <div className='line'></div>
                        <label htmlFor="name">Name</label>
                    </div>
                    <input type="name" id='name' name='name' className='add_tab_page_form_input' value={name} onChange={(e) => handleChange(e, setName)} />
                    <button className='add_tab_page_form_btn'>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddCategoryAdmin