import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  withCredentials: false
})

export default () => {
  return instance
}