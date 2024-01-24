import BoardDetail from '@/components/boardDetail/BoardDetail'
import Link from 'next/link'
import React from 'react'

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/post/${slug}`, {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("실패!!! 다시 해보세요!")
    }

    return res.json()
}

export default async function page({ params }) {
    const { slug } = params;

    const data = await getData(slug);

    return (
        <main>
            <div className='login__header'>
                <h3>Detail</h3>
            </div>
            <div className='card__list'>
                <div className='detail'>
                    <div className='detail__wrap'>
                        <>
                            <div className='detail__title'>
                                <span className='cate'>{data.catSlug}</span>
                                <h3>{data.title}</h3>
                                <div className="info">
                                    <span className='auth'>{data.user.name}</span>
                                    <div className="bottom">
                                        <div className='view'>
                                            <img src="/view.svg" alt="" />
                                            <p>0</p>
                                        </div>
                                        <div className='like'>
                                            <img src="/like.svg" alt="" />
                                            <p>0</p>
                                        </div>
                                        <div className='comment'>
                                            <img src="/comment.svg" alt="" />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='detail__content'>
                                {data.desc}
                                <div className="img">
                                    {/* <img src="https://github.com/jinhomun/Next-blog/assets/144635699/4d8ee255-79f5-4af7-b2ca-2a8e143cb5d4" alt="교육 이미지" /> */}
                                </div>
                            </div>

                            <div className='detail__btn'>
                                <button className="like">❤</button>
                                <div className="right">
                                    <button><Link href="/blogModify">수정</Link></button>
                                    <button>삭제</button>
                                    <button><Link href="/blog">목록</Link></button>
                                </div>
                            </div>

                            <div className='detail__comment'>
                                <h3>댓글</h3>
                                <div className="comment">
                                    <textarea className="comment__input"></textarea>
                                    <button>작성</button>
                                </div>
                            </div>


                        </>
                    </div>
                    <div className='comment__wrap'>
                        <div className='comment__list'>
                            <div className="auth">Jins</div>
                            <div className="comment">

                                <p>asdadad</p>
                            </div>
                            <div className="bottom">
                                <button className="modify">수정</button>
                                <button className="delte">삭제</button>
                            </div>
                        </div>
                        <div className='comment__list'>
                            <div className="auth">Jins</div>
                            <div className="comment">

                                <p>asdadad</p>
                            </div>
                            <div className="bottom">
                                <button className="modify">수정</button>
                                <button className="delte">삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
