import { add } from '@utils/example'

describe('add tests', () => {
  it('should return 3', () => {
    expect(add(1, 2)).toBe(3)
  })
})
