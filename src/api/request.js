import axios from 'axios'

// www.baidu.com
// www.taobao.com
const URL = {
  current: '',
  baodu: 'www.baidu.com',
  taobao: 'www.taobao.com',
}

class Request {
  constructor({ baseURL = '' } = {}) {
    this.instance = null
    this.instance = axios.create({
      baseURL,
    })
    this.requestIntercetors()
  }

  createCancelToken() {
    return axios.CancelToken.source()
  }

  requestIntercetors() {
    const { instance } = this

    instance.interceptors.request.use(
      config => {
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    instance.interceptors.response.use(
      response => {
        // 对响应数据做点什么
        return response
      },
      error => {
        // 对响应错误做点什么
        if (error.code === 'ERR_CANCELED') {
          return error
        }
        return Promise.reject(error)
      }
    )
  }
}

const { instance: request } = new Request()
// 可以导出多个请求实力，防止项目请求有不同的配置要求，根据不同配置要求进行初始化
export { URL, request }
