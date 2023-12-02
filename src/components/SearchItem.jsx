import React from 'react'

const SearchItem = ({search,setSearch,handleSearch}) => {
  return (
    <form action="" className='searchForm' onSubmit={handleSearch}>
    <label htmlFor="search">search</label>
  <input 
  type="text"
  id='search'
  role='search'
  placeholder='Search'
  value={search}
  onChange={(e) =>setSearch(e.target.value) }
   />


    </form>
  )
}

export default SearchItem