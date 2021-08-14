import React from 'react'
import PropTypes from 'prop-types'

const Info = ({strArtistThumb, strGenre, strBiographyEN}) => {

  if( !strArtistThumb) return null

  return ( 
    <div className="card border-light">
        <div className="card-header bg-primary text-light font-weight-bold">
            Información Artista
        </div>
        <div className="card-body">
            <img src={strArtistThumb} alt="Logo Artista" />
            <p className="card-text">Género: {strGenre}</p>
            <h2 className="card-text">Biografía:</h2>
            <p className="card-text">{strBiographyEN}</p>
        </div>
    </div>
 );
}

// Info.propTypes = {

// }

export default Info
