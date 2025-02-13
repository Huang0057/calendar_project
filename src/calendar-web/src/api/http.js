import axios from 'axios'
import { ElMessage } from 'element-plus'

const http = axios.create({
  baseURL: '/api',
  timeout: 5000
})


http.interceptors.request.use(
  config => {
    
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    ElMessage.error(error.response?.data?.message || '請求失敗')
    return Promise.reject(error)
  }
)

export default http