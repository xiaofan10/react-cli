import axios from 'axios'

// www.baidu.com
// www.taobao.com
const URL = {
  current: '',
  baodu: 'www.baidu.com',
  taobao: 'www.taobao.com',
}

class Request {
  constructor() {
    this.instance = null
    this.init()
    this.requestIntercetors()
  }

  createCancelToken() {
    return axios.CancelToken.source()
  }

  init() {
    this.instance = axios.create()
  }

  requestIntercetors() {
    const { instance } = this

    instance.interceptors.request.use(
      config => {
        console.log('请求拦截器')
        return config
      },
      error => {
        // 对请求错误做些什么

        console.error('请求拦截器错误', error)
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    instance.interceptors.response.use(
      response => {
        // 对响应数据做点什么
        console.log('响应拦截器')
        return response
      },
      error => {
        // 对响应错误做点什么
        if (error.code === 'ERR_CANCELED') {
          console.warn('响应拦截器警告', error)
          return error
        }
        console.error('响应拦截器错误', error)
        return Promise.reject(error)
      }
    )
  }
}

const request = new Request()
// 可以导出多个请求实力，防止项目请求有不同的配置要求，根据不同配置要求进行初始化
export { URL, request }
