import Comments from '@/components/comments/Comments'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blogDetail/${slug}`, {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("실패!!! 다시 해보세요!")
    }

    return res.json();
}

export default async function page({ params }) {
    const { slug } = params;

    const data = await getData(slug);

    return (
        <main>
            <div className='login__header'>
                <h3>Detail</h3>
                <p>상세 페이지 입니다.</p>
            </div>
            <div className='card__list'>
                <div className='detail__wrap'>
                    <div className='detail__title'>
                        <span className='cate'>{data.catSlug}</span>
                        <h3>{data.title}</h3>
                        <div className="info">
                            <span className='auth'><p><Image src={data.user.image} alt="dd" width={50} height={50} /></p>{data.user.name}</span>
                            <div className="bottom">
                                <div className='view'>
                                    <image src="/view.svg" alt="" />
                                    <p>{data.views}</p>
                                </div>
                                <div className='like'>
                                    <image src="/like.svg" alt="" />
                                    <p>0</p>
                                </div>
                                <div className='comment'>
                                    <image src="/comment.svg" alt="" />
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
                    <Comments slug={slug} />
                </div>
            </div>
        </main>
    )
}
