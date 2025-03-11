import  { FC } from 'react'
import Hero from '../../components/hero/Hero'
import Filter from '../../components/filter/Filter'
import List from '../../components/list/List'

const Home:FC= () => {
  return (
    <div>
        <Hero/>
        <Filter/>
        <List/>
    </div>
  )
}

export default Home