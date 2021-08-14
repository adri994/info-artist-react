import React, { useState } from 'react'

import Form from './components/Form'
import Info from './components/Info'
import { useFetch } from './hooks/useFetch'

const App = () => {

  const [song, setSong] = useState({})
  const infoArtist = useFetch(song) 

  return (
    <>
      <Form 
        setSong={ setSong }
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <Info 
              { ...infoArtist }
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

