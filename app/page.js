"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [items, setItems] = useState([])
  const [search,setSearch] = useState('')
  const [searchItems,setSearchItems] = useState([])
  const [loading,setLoading] = useState(false)


  const onChange = (e)=>{
    setSearch(e.target.value)
  }

  useEffect(()=>{
    setLoading(true)
    setSearchItems([])
    const handleSearch= async ()=>{
      const { data: data } = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${search}`)
      setSearchItems(data)

    }
    if(search.length>0){
      handleSearch()
    }
    setTimeout(() => {
      setLoading(false)
      
    }, 1000);
  },[search])

 

  useEffect(() => {
    const fetchItems = async () => {
      const { data: data } = await axios.get('https://api.punkapi.com/v2/beers')
      setItems(data)
    }

    fetchItems()
  }, [])

  return (
    <div className="text-white" >
      <div className="w-full mt-16 flex items-center justify-center">
       
        <div style={{ fontFamily: 'gilroy' }} className="w-[85%] text-white ">

          <h1 className="text-5xl font-bold">Brew<span className="text-orange-500">B</span>liss</h1>
          <h3 className="text-lg font-semibold my-1">Exploring the World of Beer, One Sip at a Time</h3>
          <p className="font-normal">Welcome to BrewBliss, your digital destination for all things beer-related! Dive into the rich and diverse universe of craft beers, lagers, ales, and more. Whether you're a seasoned beer connoisseur or a curious beginner, our website is your gateway to discovering the finest brews, brewing techniques, tasting notes, and the latest trends in the world of beer. Cheers to the art of brewing and the joy of savoring a cold one!</p>
          <button className="px-6 py-2 mt-2 rounded-full bg-orange-500 text-white font-bold">Explore</button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <div className="flex items-center border border-gray-600 px-5 py-2 rounded-md ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input value={search} onChange={onChange} className="ml-2 lg:w-96 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container lg:px-12 px-3 py-16 mx-auto">
          <div className="flex flex-wrap items-center justify-center ">
            {loading && <> <div className="flex items-center justify-center" style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}><iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="100px" height="100px" style={{position:"absolute"}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg"></a></p> </> }
            {
              search && !loading ?  searchItems.map((item,index) => {
                return <div key={index} className="p-2 md:w-1/4  ">
                  <div className="h-full  border-2 shadow-md border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="lg:h-72 md:h-36 bg-white w-full flex items-center p-4 justify-center">

                      <img className=" w-16  object-cover " src={item.image_url} alt="blog" />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.tagline}</h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">{item.name}</h1>
                      <div className="w-full h-20 overflow-hidden">
                        <p className="leading-relaxed mb-3 text-gray-200">{item.description}</p>

                      </div>
                      <div className="flex items-center flex-wrap mt-3 ">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg> {item.abv}
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
              }) : 
              items && items.map((item,index) => {
                return <div key={index} className="p-2 w-96  ">
                  <div className="h-full  border-2 shadow-md border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="h-72  bg-white w-full flex items-center p-4 justify-center">

                      <img className=" w-16  object-cover " src={item.image_url} alt="blog" />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.tagline}</h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">{item.name}</h1>
                      <div className="w-full h-20 overflow-hidden">
                        <p className="leading-relaxed mb-3 text-gray-200">{item.description}</p>

                      </div>
                      <div className="flex items-center flex-wrap mt-3 ">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg> {item.abv}
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
              })
            }


          </div>
        </div>
      </section>
    </div>
  )
}
