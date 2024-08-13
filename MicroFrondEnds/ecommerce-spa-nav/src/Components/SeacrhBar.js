import React, { useState } from 'react'

export const SeacrhBar = () => {
  const [searchItems,setSearchItems] = useState({search : "" , category : ""});
  
  const handleSearchItems = (e)=>{
    const { name, value } = e.target;
   

    setSearchItems({
      ...searchItems,
     [name] : value
  })

  }
  const submitSearchItems = (e)=>{
    e.preventDefault();
    console.log(searchItems);

  }
  return (
    <span className="h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full  flex">
          
              <select className="bg-gray-200 rounded-full rounded-r-none border-r-none text-center custom-select">
                  <option className="text-gray-700" name="items">All categories</option>
                  <option className="text-gray-700" name="items">Burger</option>
                  <option className="text-gray-700" name="items">Bun</option>
              </select>
            
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
              onChange={handleSearchItems}
              value={searchItems.search}
              
            />
            <button
              type='submit'
              onClick={submitSearchItems}
            >
              <i className="fas fa-search my-2 mx-2 mb-2  mr-3  text-lg text-gray-700 w-4 h-4"></i>
            </button>
    </span>
  )
}
