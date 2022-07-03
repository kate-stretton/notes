import request from 'superagent'

const rootUrl = '/api/v1'

//here's the http request

export function getNotes() {
  return request.get(rootUrl + '/notes').then((res) => {
    return res.body
  })
}

export function postNote(note) {
  return request
    .post(rootUrl + '/notes')
    .send({ note })
    .then((res) => {
      return res.body
    })
}

export function deleteNote(id) {
  return request.delete(rootUrl + '/notes/' + id)
}
