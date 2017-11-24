const utility = x => Math.sqrt(x)

const ransom = (N, N_bar) => 
  10000 / (N_bar + 1) + 2000 / (N + 1) - 2000

const premium = (p, R) => p*R

const p_death = N => N / (100 + N)

const expectedUtility = (p, W, D, K, N, N_bar) => {
  const P = premium(p, ransom(N, N_bar))
  return (1 - p) * utility(W - P) +
         p * p_death(N) * utility(W - P - D) +
         p * (1 - p_death(N)) * utility(W - P - K)
}

export const U = (N, N_bar) => expectedUtility(p=.05, W=10000, D=9000, K=3000, N, N_bar)
