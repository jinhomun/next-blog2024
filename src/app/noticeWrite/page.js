import React from 'react'

export default function page() {
    return (
        <main id='main'>
            <div className="main__header">
                <h2>NoticeWrite</h2>
            </div>
            <div className='main__contents'>
                <div className='blog__write container'>
                    <input type='text' placeholder='제목' onChange={(e) => setTitle(e.target.value)} />
                    <select onChange={(e) => setCateSlug(e.target.value)}>
                        <option value="javascript">javascript</option>
                        <option value="jqeury">jqeury</option>
                        <option value="html">html</option>
                        <option value="css">css</option>
                        <option value="react">react</option>
                        <option value="vue">vue</option>
                        <option value="next">next</option>
                    </select>
                    <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                    {/* <ReactQuill
                        value={desc}
                        onChange={setDesc}
                        placeholder='글을 작성해 주세요!'
                    /> */}
                    <button onClick={handleSubmit}>
                        저장하기
                    </button>
                </div>
            </div>
        </main>
    )
}
