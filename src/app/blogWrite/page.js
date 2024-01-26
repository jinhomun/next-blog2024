"use client"
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Page() {
    const [title, setTitle] = useState("");
    const [cateSlug, setCateSlug] = useState("");
    const [file, setFile] = useState("");
    const [desc, setDesc] = useState("");



    const handleSubmit = async () => {
        const res = await fetch("/api/blogWrite", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                desc: desc,
                // img: img,
                slug: title,
                cateSlug: cateSlug || "javascript",
            })
        })

        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
        }
    }

    return (
        <main id='main'>
            <div className="login__header">
                <h3>blog Write</h3>
            </div>
            <div className='main__contents'>
                <div className='blog__write container'>
                    <div className='header'>
                        <select onChange={(e) => setCateSlug(e.target.value)}>
                            <option value="javascript">javascript</option>
                            <option value="jquery">jquery</option>
                            <option value="node">node</option>
                            <option value="react">react</option>
                            <option value="vue">vue</option>
                            <option value="next">next</option>
                        </select>
                        <input className='title' type='text' placeholder='제목' onChange={(e) => setTitle(e.target.value)} />
                        <input className='file' type='file' onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <ReactQuill
                        value={desc}
                        onChange={setDesc}
                        placeholder='글을 작성해 주세요!'
                        style={{ backgroundColor: "var(--black)", border: "2px solid var(--white)", color: "var(--white)" }}
                    />
                    <button className='submit' onClick={handleSubmit}>
                        저장하기
                    </button>
                </div>
            </div>
        </main>
    )
}