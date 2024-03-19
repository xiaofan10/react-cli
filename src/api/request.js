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
        return Promise.reject(error)
      }
    )
  }

  $get(url, params) {
    const source = this.createCancelToken()
    return {
      fetch: () =>
        this.instance.get(url, {
          cancelToken: source.token,
          params,
        }),
      cancel: () => {
        source.cancel()
      },
    }
  }

  $post(url, data = {}, options = {}) {
    const source = this.createCancelToken()
    return {
      fetch: () =>
        this.instance.post(url, data, {
          cancelToken: source.token,
          ...options,
        }),
      cancel: () => {
        source.cancel()
      },
    }
  }
}

export { URL, Request }
