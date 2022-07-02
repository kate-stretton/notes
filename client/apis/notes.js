import request from 'superagent'

const rootUrl = '/api/v1'

export function getNotes() {
  return request.get(rootUrl + '/notes').then((res) => {
    return res.body.notes
  })
}

export function addNote(note) {
  console.log(note)
  return request
    .post(rootUrl + '/notes/')
    .send(note)
    .then((res) => {
      return res.body
    })
}
