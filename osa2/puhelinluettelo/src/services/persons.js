import axios from 'axios'
const baseUrl = '/api/persons'


const getAll = () => {
  return axios.get(baseUrl).then(res => res.data)
}

const removeNumber = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then(res => res)
}

const addNumber = (personObject) => {
  return axios.post(baseUrl, personObject).then(res => res.data)
}

const modNumber = (personObject, id) => {
  return axios.put(`${baseUrl}/${id}`, personObject).then(res => res.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, removeNumber, addNumber, modNumber}