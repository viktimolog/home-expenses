import Urls from '../constants/Urls'
import axios from 'axios'

//get All Items
export const GetItems = () => {
  return axios.get(Urls.clients)
}
