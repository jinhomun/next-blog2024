import BoardDetail from '@/components/boardDetail/BoardDetail'
import Category from '@/components/category/Category'
import React from 'react'

export default function page() {
    return (
        <main>
            <div className='login__header'>
                <h3>Detail</h3>
            </div>
            <div className='card__list'>
                <BoardDetail />
            </div>
        </main>

    )
}
