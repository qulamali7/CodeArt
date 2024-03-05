import React, { useEffect, useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const PostAdmin = () => {
    const [data, setData] = useState(null);
    async function GetFetch() {
        try {
            const res = await fetch("http://localhost:3200/postWithauthorAndcategory");
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function DeleteFetch(id) {
        await fetch("http://localhost:3200/posts/" + id, { method: 'DELETE' });
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
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {data && data.map((x) => (
                    <tr>
                        <td>{x._id}</td>
                        <td className='table-img'><img src={x.image} alt="" /></td>
                        <td>{x.title}</td>
                        <td dangerouslySetInnerHTML={{__html:x.description.slice(0,50)}}></td>
                        <td>{x.author?.name}</td>
                        <td>{x.category?.name}</td>
                        <td><Link to={"/updatePosts/" + x._id}><button>UPDATE</button></Link></td>
                        <td><button className="btn" onClick={() => { DeleteFetch(x._id) }}>DELETE</button></td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default PostAdmin