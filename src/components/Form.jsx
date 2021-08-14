import React from 'react'
import PropTypes from 'prop-types'

import { useForms } from '../hooks/useForm'
import { useToggle } from '../hooks/useToogle'

const Form = ({ setSong = '' }) => {

  const [ error, setError ] = useToggle()
  const [ { artist, song }, handleInputChange, reset ] = useForms({
    artist: '',
    song: ''
  })

  const handleSubmit = (e) =>{
    e.preventDefault()

    if( artist.trim() === '' || song.trim() === '' ) return setError(true)

    setError(false)
    setSong({
      artist,
      song
    })
    reset()
  }
  
  return (
    <div className="bg-info">
      {
      error ? <p className="alert alert-danger text-center p-2">Todos los campos son necesario</p> : null
      }
      <div className="container">
        <div className="row">
          <form
            onSubmit={ handleSubmit }
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">
                Buscador Letras Canciones
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input 
                      type="text"
                      className="form-control" 
                      name="artist"
                      value={ artist }
                      placeholder="Nombre del artista"
                      onChange={ handleInputChange }
                      />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canciòn</label>
                    <input 
                      type="text"
                      className="form-control" 
                      name="song"
                      value={ song }
                      placeholder="Nombre de la cancion"
                      onChange={ handleInputChange }
                      />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right"
              >
                Buscar
              </button>
            </fieldset>

          </form>
        </div>
      </div>
    </div>
  )
}

Form.propTypes = {
  setSong: PropTypes.func.isRequired
}

export default Form

