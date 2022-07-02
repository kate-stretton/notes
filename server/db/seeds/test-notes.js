exports.seed = (knex) =>
  knex('notes')
    .truncate()
    .then(() =>
      knex('notes').insert([
        { id: 1, text: 'learn some react' },
        { id: 2, text: 'study props' },
        { id: 3, text: 'study scope!' },
      ])
    )
