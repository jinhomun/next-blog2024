import React from 'react'
import Card from '../card/Card'
import Pagination from '../pagination/Pagination'

const getData = async (page, cate) => {
    const res = await fetch("http://localhost:3000/api/blogPost", {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("실패!!! 다시 해보세요!")
    }

    return res.json()
}

export default async function CardList() {
    const data = await getData();


    // console.log(data)

    return (
        <>
            <div className='list__wrap'>
                {data.map((item) => (

                    <Card item={item} key={item.id} />

                ))}
            </div>
            {/* <Pagination page={page} count={count} postView={postView} /> */}
        </>

    )
}


