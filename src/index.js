export const sum = a => b => a + b

const arity = f => x => f(x)

export const map = f => xs => xs.map(arity(f))
