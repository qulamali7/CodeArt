import React, { useContext, useEffect, useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
const CategoryAdmin = () => {
    const { token } = useContext(UserContext)
    const [data, setData] = useState(null);
    async function GetFetch() {
        try {
            const res = await fetch("http://localhost:3200/category");
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function DeleteFetch(id) {
        await fetch("http://localhost:3200/category/" + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        });
        await GetFetch()
    }

    useEffect(() => {
        GetFetch();
    }, []);
    return (
        <>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {data && data.map((x) => (
                    <tr>
                        <td>{x._id}</td>
                        <td>{x.name}</td>
                        <td><Link to={"/updateCategory/" + x._id}><button>UPDATE</button></Link></td>
                        <td><button className="btn" onClick={() => { DeleteFetch(x._id) }}>DELETE</button></td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default CategoryAdmin