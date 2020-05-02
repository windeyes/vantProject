import axios from '@/utils/axios'
export const login = (data) => {
  return axios({
    url: '/login',
    method: 'POST',
    data
  })
}
export const getCategoryList = () => {
  return axios({
    url: '/category'

  })
}
