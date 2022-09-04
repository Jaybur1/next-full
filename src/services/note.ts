import { TNote } from '@src/types'

export const createNote = async (form: TNote): Promise<Response> =>
  fetch('http://localhost:3000/api/note', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })

export const getNotes = async (): Promise<TNote[]> =>
  fetch('http://localhost:3000/api/note', { method: 'GET' }).then(async (res) => (await res.json()).data)
