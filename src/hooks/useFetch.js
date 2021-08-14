import { useEffect, useState } from 'react'

import { getSearchApi } from '../helpers/seachApi'

export const useFetch = ({ artist, song }) => {

  const [state, setState] = useState(null)
  
  useEffect(() => {
    
    if( !artist && !song ) return
    searchApi(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`)
  }, [artist, song])

  const searchApi = async( url ='' ) =>{
    const artist = await getSearchApi( url )

    setState(artist)

  }


  return state
}
