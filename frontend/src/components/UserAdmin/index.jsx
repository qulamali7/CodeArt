import React, { useEffect, useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const UserAdmin = () => {
    const [data, setData] = useState(null);
    async function GetFetch() {
        try {
            const res = await fetch("http://localhost:3200/users");
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function DeleteFetch(id) {
        await fetch("http://localhost:3200/users/" + id, { method: 'DELETE' });
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
                    <th>Email</th>
                    <th>Role</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {data && data.map((x) => (
                    <tr>
                        <td>{x._id}</td>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.role}</td>
                        <td><Link to={"/updateUser/" + x._id}><button>UPDATE</button></Link></td>
                        <td><button className="btn" onClick={() => { DeleteFetch(x._id) }}>DELETE</button></td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default UserAdmin