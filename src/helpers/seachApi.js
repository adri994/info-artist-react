import axios from 'axios'

export const getSearchApi = async( url = '' ) =>{
  const result = await axios(url)
  return result.data.artists[0]
}