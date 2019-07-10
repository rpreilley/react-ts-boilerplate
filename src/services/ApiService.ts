import Api from './Api';

export default {
  login (url: string) {
    return Api().get(url)
  },
  get (url: string) {
    return Api().get(url)
  },
  post (url: string, data: object, options: (object | undefined)) {
    if (!options) {
      return Api().post(url, data, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
    } else {
      return Api().post(url, data, options)
    }
  },
  add (url: string, data: object) {
    return Api().post(url, data)
  },
  edit (url: string, data: object) {
    return Api().put(url, data)
  },
  delete (url: string, data: object) {
    return Api().delete(url, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: data
    })
  }
}