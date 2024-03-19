import { Request } from './request'

const request = new Request()

export const login = (params = {}) => {
  return request.$get('/api/getUsers', params)
}
