import { sum, map } from '../src'

describe('test my library', () => {
  it('sum should return a function', () => {
    expect(typeof sum(0)).toBe('function')
  })

  it('sum works', () => {
    expect(sum(1)(1)).toBe(2)
  })

  it('map should return a function', () => {
    expect(typeof map(x => x)).toBe('function')
  })

  it('map on array works', () => {
    const double = x => x * 2
    const arr = [1, 2, 3, 4, 5]

    expect(map(double)(arr)).toEqual(arr.map(double))
  })

  it('map on maybe works', () => {
    const Nothing = ({
      nothing: true,
      map: _ => Nothing
    })

    const Just = x => ({
      just: true,
      val: x,
      map: f => Just(f(x))
    })

    const fromMaybe = x => x == null ? Nothing : Just(x)

    const double = x => x * 2

    expect(map(double)(fromMaybe(null))).toBe(Nothing)

    const just = map(double)(fromMaybe(1))
    expect(just.just).toBeTruthy()
    expect(just.val).toBe(2)
  })
})
