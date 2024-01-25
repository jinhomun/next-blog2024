"use client"

import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import useSWR, { mutate } from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;

}

export default function Comments({ slug }) {
    const { status } = useSession();

    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?slug=${slug}`, fetcher)

    const [comment, setComment] = useState();

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc: comment, postSlug: slug }),
        });
        mutate()
    }

    return (
        <div className='comment'>
            <div className='comment__wrap'>
                <div className='detail__comment'>
                    <h3>댓글</h3>
                    {status == "authenticated" ? (
                        <div className="comment">
                            <textarea className="comment__input" placeholder='댓글' onChange={(e) => setComment(e.target.value)}></textarea>
                            <button onClick={handleSubmit}>작성</button>
                        </div>
                    ) : (
                        <div className="comment">
                            <textarea className="comment__input" placeholder='로그인하셔야 댓글 작성하실수 있습니다.' onChange={(e) => setComment(e.target.value)}></textarea>
                        </div>
                    )}
                </div>
            </div>

            <div className='commentlist__wrap'>
                {isLoading ? "isLoading" : data?.map((item) => (
                    <div className='comment__list' key={item.id}>
                        <div className="auth">{item.user.name}</div>
                        <div className="comment">
                            <p>{item.desc}</p>
                            <p>{item.user.createdAt}</p>
                        </div>
                        <div className="bottom">
                            <button className="modify">수정</button>
                            <button className="delte">삭제</button>
                        </div>
                    </div>

                ))}
            </div>

        </div>


    )
}
