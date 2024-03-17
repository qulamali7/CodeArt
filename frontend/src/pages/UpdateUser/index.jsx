import React, { useContext, useEffect } from 'react'
import "./index.scss";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { UserContext } from '../../context/UserContext';
const UpdateUser = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { setToken, setDecode } = useContext(UserContext)
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });
    const handleChange = evt => {
        const value = evt.target.value;
        setState({ ...state, [evt.target.name]: value });
    };
    const handleOnSubmit = evt => {
        evt.preventDefault();
        try {
            fetch(`http://localhost:3200/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: state.name,
                    email: state.email,
                    password: state.password,
                    role: state.role
                }),
            })
                .then(x => navigate("/adminPanel"))
        } catch (error) {
            console.log(error.message);
        }
    }
    async function GetFetchById(id) {
        try {
            const res = await fetch("http://localhost:3200/users/" + id);
            const data = await res.json();
            setState(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        GetFetchById(id)
    }, [id])
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
                <h2 className='libre-regular-i add_tab_page_title'>Update User</h2>
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
                        <label htmlFor="role">Role</label>
                    </div>
                    <input type="text" id='role' value={state.role} className='add_tab_page_form_input' name='role' onChange={handleChange} />
                    <button className='add_tab_page_form_btn'>Update</button>
                </form>
            </div>
        </>
    )
}

export default UpdateUser