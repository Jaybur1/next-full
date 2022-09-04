import { useCallback, useEffect, useState } from 'react'

import type { NextPage } from 'next'

import { createNote, getNotes } from '@src/services'
import { TNote } from '@src/types'

const Home: NextPage = () => {
  const [form, setForm] = useState<TNote>({})
  const [notes, setNotes] = useState<TNote[]>([])

  const loadNotes = async (): Promise<void> => setNotes(await getNotes())

  const handleCreate = useCallback(async () => {
    try {
      await createNote(form)
      setForm({})
      await loadNotes()
    } catch (e) {
      alert(e)
    }
  }, [form, setForm])

  useEffect(() => {
    loadNotes()
  }, [])
  const handleChange = (prop: 'title' | 'content', value: string): void => setForm((pre) => ({ ...pre, [prop]: value }))
  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-4">Notes</h1>
      <form
        onSubmit={(e): void => {
          e.preventDefault()
          handleCreate()
        }}
        className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
      >
        <input type="text" placeholder="title" value={form.title || ''} onChange={(e): void => handleChange('title', e.target.value)} />
        <textarea value={form.content || ''} onChange={(e): void => handleChange('content', e.target.value)} />
        <button type="submit" className="bg-blue-500 text-white rounded p-1">
          + ADD
        </button>
      </form>

      <ol>
        {notes.map((note, i) => (
          <li key={i}>{note.title}</li>
        ))}
      </ol>
    </div>
  )
}

export default Home
