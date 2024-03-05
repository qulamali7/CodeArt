import React, { useContext, useState } from 'react'
import "./index.scss";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { UserContext } from '../../context/UserContext';
import { useEffect } from 'react';
const UserPost = () => {
  const { token, decode } = useContext(UserContext)
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
  async function handleSubmit() {
    // e.preventDefault()
    const formData = new FormData()
    formData.append("title", title)
    formData.append("category", category)
    formData.append("description", description)
    formData.append("image", image)
    formData.append("author", decode._id)
    await fetch("http://localhost:3200/posts", {
      method: "POST",
      body: formData,
    })
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
      <div className='user_post'>
        <div className='user_post_title'>
          <h2 className='montserrat'>Create Post</h2>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Title</label>
          </div>
          <input type="text" id='text' name='text' onChange={e => setTitle(e.target.value)} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="category">Category</label>
          </div>
          <select  onChange={e => setCategory(e.target.value)}>
            {categories && categories.map((x) => (
              <option key={x._id} value={x._id} >{x.name}</option>
            ))}
          </select>
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="description">Description</label>
          </div>
          <ReactQuill id='description' className='input_desc' modules={modules} formats={formats} onChange={setDescription} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="photo" className='file_btn'>Upload Photo</label>
          </div>
          <input type="file" id='photo' className='file_input' onChange={e => setImage(e.target.files[0])} />
          <button className='submit_btn'>Create</button>
        </form>
      </div>
    </>
  )
}

export default UserPost