import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import "./index.scss";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
const AddPostAdmin = () => {
    const { token } = useContext(UserContext)
    const navigate = useNavigate()
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", title)
        formData.append("category", category)
        formData.append("description", description)
        formData.append("image", image)
        formData.append("author", author)
        fetch("http://localhost:3200/posts", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        })
            .then(() => navigate("/adminPanel"))
    }
    const [categories, setCategories] = useState([])
    async function getFetch() {
        try {
            await fetch("http://localhost:3200/category")
                .then(res => res.json())
                .then(data => setCategories(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFetch()
    }, [])

    return (
        <>
            <div className='add_tab_page '>
                <h2 className='libre-regular-i add_tab_page_title '>Add Post</h2>
                <form action="" onSubmit={handleSubmit} className='add_tab_page_form'>
                    <div className='input_title'>
                        <div className='line'></div>
                        <label htmlFor="text">Title</label>
                    </div>
                    <input type="text" id='text' name='text' className='add_tab_page_form_input' onChange={e => setTitle(e.target.value)} />
                    <div className='input_title'>
                        <div className='line'></div>
                        <label htmlFor="text">Category</label>
                    </div>
                    <select onChange={e => setCategory(e.target.value)}>
                        {categories && categories.map((x) => (
                            <option value={x._id} >{x.name}</option>
                        ))}
                    </select>
                    <div className='input_title'>
                        <div className='line'></div>
                        <label htmlFor="text">Author ID</label>
                    </div>
                    <input type="text" id='text' name='text' className='add_tab_page_form_input' onChange={e => setAuthor(e.target.value)} />
                    <div className='input_title'>
                        <div className='line'></div>
                        <label htmlFor="text">Description</label>
                    </div>
                    <ReactQuill modules={modules} formats={formats} onChange={setDescription} />
                    <div className='input_title'>
                        <div className='line'></div>
                        <label htmlFor="text">Photo</label>
                    </div>
                    <input type="file" className='add_tab_page_form_input' onChange={e => setImage(e.target.files[0])} />
                    <button className='add_tab_page_form_btn'>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddPostAdmin