import CardList from '@/components/cardList/CardList'
import Category from '@/components/category/Category'
import React from 'react'

export default function Home({ searchParams }) {

  const page = parseInt(searchParams.page || 1);
  const { cate } = searchParams;


  return (
    <>
      <main>
        <div className='login__header'>
          <h3>main</h3>
          <Category />
          <input type="text" />
          <button>검색</button>
        </div>

        <div className='card__list'>

          <CardList page={page} cate={cate} />

        </div>
      </main>

    </>

  )
}