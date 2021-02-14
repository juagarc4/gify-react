import { act, renderHook } from '@testing-library/react-hooks'
import useForm from './hook'

const setup = (params) => renderHook(() => useForm(params))
test('Should change keyword', () => {
  const { result } = setup()

  act(() => {
    result.current.changeKeyword({ keyword: 'batman' })
  })

  expect(result.current.keyword).toBe('batman')
})
test('Should use initial values', () => {
  const { result } = setup({ initialKeyword: 'batman' })

  expect(result.current.keyword).toBe('batman')
  expect(result.current.rating).toBe('g')
})

test('Should update times correctly when used twice', () => {
  const { result } = setup()

  act(() => {
    result.current.changeKeyword({ keyword: 'b' })
    result.current.changeKeyword({ keyword: 'ba' })
  })
  expect(result.current.keyword).toBe('ba')
  expect(result.current.times).toBe(2)
})
