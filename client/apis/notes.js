import request from 'superagent'

const rootUrl = '/api/v1'

export function getNotes() {
  return request.get(rootUrl + '/notes').then((res) => {
    return res.body.notes
  })
}

export function addNewNote(newNote) {
  return request
    .post(rootUrl + '/notes')
    .send({ newNote })
    .then((res) => {
      return res.body.notes
    })
}
