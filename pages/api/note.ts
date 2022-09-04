/* eslint-disable no-console */
import { RouterBuilder } from 'next-api-handler'

import { prisma } from '@lib/prisma'
import { TNote } from '@src/types'

const router = new RouterBuilder()

router.get<TNote[]>(async () => await prisma.note.findMany())

router.post(async (req, res) => {
  const { title, content } = req.body as { title: string; content: string }

  try {
    await prisma.note.create({
      data: { title, content },
    })

    res.status(200).json({ message: 'Note Created' })
  } catch (e) {
    console.error(e)
  }
})

export default router.build()
