import React, { useContext, useState } from 'react'
import "./index.scss";
import UserAdmin from '../../components/UserAdmin';
import PostAdmin from '../../components/PostAdmin';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Cookies from 'js-cookie';
import CategoryAdmin from '../../components/CategoryAdmin';
const AdminPanel = () => {
    const { setDecode, setToken } = useContext(UserContext)
    const navigate = useNavigate()
    const [tab, setTab] = useState("user")
    function logOut() {
        setToken(null);
        setDecode(null)
        Cookies.remove("token");
        navigate("/")
    }
    return (
        <>
            <section id='adminPanel'>
                <div className='adminPanel_title'>
                    <Link to={"/"} className="montserrat admin_title" >codeArt</Link>
                    <div className='adminPanel_btn'>
                        <button onClick={logOut}>Log Out</button>
                        <button><Link to={"/addAdmin"}>Add</Link></button>
                    </div>
                </div>
                <div className='adminPanel_container'>
                    <div className='adminpanel_content'>
                        <div className='admin_tab'>
                            <button onClick={() => setTab("user")} className={`${tab === 'user' && "active_btn"} btn`}>User</button>
                            <button onClick={() => setTab("post")} className={`${tab === 'post' && "active_btn"} btn`}>Post</button>
                            <button onClick={() => setTab("category")} className={`${tab === 'category' && "active_btn"} btn`}>Category</button>
                        </div>
                        <div className='admin_content'>
                            {
                                tab === 'user' && <UserAdmin />
                            }
                            {
                                tab === 'post' && <PostAdmin />
                            }
                            {
                                tab === 'category' && <CategoryAdmin />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminPanel