import React, { useContext, useEffect, useState } from 'react'
import "./index.scss";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
const UpdateCategory = () => {
    const { token } = useContext(UserContext)
    const navigate = useNavigate()
    const { id } = useParams()
    const [name, setName] = useState("")
    async function GetFetchById(id) {
        try {
            const res = await fetch("http://localhost:3200/category/" + id);
            const data = await res.json();
            console.log(data.name);
            setName(data.name);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        GetFetchById(id)
    }, [id])

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3200/category/" + id, {
            method: "PUT",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name: name })
        })
            .then(x => navigate("/adminPanel"))

    }
    function handleChange(e, stateChanger) {
        stateChanger(e.target.value)
    }
    function logOut() {
        setToken(null);
        setDecode(null)
        Cookies.remove("token");
        navigate("/")
    }
    return (
        <>
            <div className='adminPanel_title'>
                <Link to={"/adminPanel"} className="montserrat admin_title" >codeArt</Link>
                <div className='adminPanel_btn'>
                    <button onClick={logOut}>Log Out</button>
                    <button><Link to={"/addAdmin"}>Add</Link></button>
                </div>
            </div>
            <div className='add_tab_page'>
                <h2 className='libre-regular-i add_tab_page_title ' >Update Category</h2>
                <form onSubmit={handleSubmit} className='add_tab_page_form'>
                    <div className='input_title'>
                        <div className='line'></div>
                        <label htmlFor="name">Name</label>
                    </div>
                    <input type="name" id='name' name='name' className='add_tab_page_form_input' value={name} onChange={(e) => handleChange(e, setName)} />
                    <button className='add_tab_page_form_btn'>Update</button>
                </form>
            </div>
        </>
    )
}

export default UpdateCategory