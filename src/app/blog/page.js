import CardList from '@/components/cardList/CardList'
import Category from '@/components/category/Category'
import React from 'react'

export default function page() {
    return (
        <main>
            <div className='login__header'>
                <h3>blog</h3>
                <Category />
                <input type="text" />
                <button>검색</button>
            </div>
            <div className='card__list'>
                <CardList />
            </div>
        </main>
    )
}
