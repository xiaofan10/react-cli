import { request } from './request'

export const fetchLogin = ({ params = {} } = {}) => {
  return request({
    url: '/user',
    method: 'get',
    params,
  })
}
